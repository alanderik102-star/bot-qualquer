/**
 * Sistema de backup automático do banco de dados usando GitHub como storage
 * 100% grátis, persiste dados entre deploys no Render
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DB_PATH = path.resolve(process.cwd(), 'data/database.db');
const BACKUP_INTERVAL = 30 * 60 * 1000; // 30 minutos
let backupTimer = null;

// ─── Configurar Git com token do ambiente ─────────────────────────────────────
function configurarGit() {
  try {
    const token = process.env.GITHUB_TOKEN;
    const repo = process.env.GITHUB_BACKUP_REPO; // formato: usuario/repo
    
    if (!token || !repo) {
      console.log('[GitBackup] ⚠️ GITHUB_TOKEN ou GITHUB_BACKUP_REPO não configurado - backup desabilitado');
      return false;
    }

    // Configurar git user
    try {
      execSync('git config user.name "MrStore Bot"', { stdio: 'ignore' });
      execSync('git config user.email "bot@mrstore.com"', { stdio: 'ignore' });
    } catch {}

    console.log('[GitBackup] ✅ Git configurado');
    return true;
  } catch (err) {
    console.error('[GitBackup] ❌ Erro ao configurar git:', err.message);
    return false;
  }
}

// ─── Baixar backup do GitHub (ao iniciar) ─────────────────────────────────────
async function restaurarBackup() {
  try {
    const token = process.env.GITHUB_TOKEN;
    const repo = process.env.GITHUB_BACKUP_REPO;
    
    if (!token || !repo) return false;

    console.log('[GitBackup] 🔄 Verificando backup no GitHub...');

    // URL do arquivo raw no GitHub
    const url = `https://raw.githubusercontent.com/${repo}/main/database.db`;
    
    const response = await fetch(url, {
      headers: { 'Authorization': `token ${token}` }
    });

    if (!response.ok) {
      if (response.status === 404) {
        console.log('[GitBackup] ℹ️ Nenhum backup encontrado (primeira execução)');
        return false;
      }
      throw new Error(`HTTP ${response.status}`);
    }

    // Garantir que a pasta data/ existe
    const dataDir = path.dirname(DB_PATH);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Salvar o banco
    const buffer = Buffer.from(await response.arrayBuffer());
    
    // Validar se não está corrompido (tamanho mínimo de um SQLite válido)
    if (buffer.length < 4096) {
      console.log('[GitBackup] ⚠️ Backup muito pequeno, pode estar corrompido. Ignorando.');
      return false;
    }
    
    // Verificar header SQLite (começa com "SQLite format 3")
    const header = buffer.toString('utf8', 0, 16);
    if (!header.startsWith('SQLite format 3')) {
      console.log('[GitBackup] ⚠️ Arquivo não é um banco SQLite válido. Ignorando backup.');
      return false;
    }
    
    // VALIDAÇÃO CRÍTICA: Tentar abrir o banco antes de usar
    const tempPath = DB_PATH + '.temp';
    fs.writeFileSync(tempPath, buffer);
    
    try {
      const Database = require('better-sqlite3');
      const testDb = new Database(tempPath, { readonly: true });
      // Tentar fazer uma query simples para garantir que o banco funciona
      testDb.pragma('integrity_check');
      testDb.close();
      
      // Banco válido! Mover para o local definitivo
      fs.renameSync(tempPath, DB_PATH);
      console.log('[GitBackup] ✅ Backup restaurado e validado com sucesso!');
      return true;
    } catch (err) {
      console.error('[GitBackup] ❌ BACKUP CORROMPIDO detectado:', err.message);
      console.log('[GitBackup] 🔄 Criando novo banco limpo ao invés de usar backup corrompido...');
      
      // Deletar arquivo temporário corrompido
      try { fs.unlinkSync(tempPath); } catch {}
      
      return false;
    }
  } catch (err) {
    console.error('[GitBackup] ❌ Erro ao restaurar backup:', err.message);
    return false;
  }
}

// ─── Fazer backup para o GitHub ───────────────────────────────────────────────
async function fazerBackup() {
  try {
    const token = process.env.GITHUB_TOKEN;
    const repo = process.env.GITHUB_BACKUP_REPO;
    
    if (!token || !repo) return false;

    // Verificar se o banco existe
    if (!fs.existsSync(DB_PATH)) {
      console.log('[GitBackup] ⚠️ Banco não existe, pulando backup');
      return false;
    }

    console.log('[GitBackup] 💾 Fazendo backup...');

    // Ler o banco como base64
    const dbContent = fs.readFileSync(DB_PATH).toString('base64');
    
    // Validar tamanho mínimo (prevenir backup de banco vazio/corrompido)
    const dbSize = fs.statSync(DB_PATH).size;
    if (dbSize < 4096) {
      console.log('[GitBackup] ⚠️ Banco muito pequeno, pulando backup (pode estar corrompido)');
      return false;
    }
    
    const timestamp = new Date().toISOString();

    // Verificar se já existe um arquivo no repo (pegar SHA)
    let sha = null;
    try {
      const checkResponse = await fetch(
        `https://api.github.com/repos/${repo}/contents/database.db`,
        {
          headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
          }
        }
      );
      
      if (checkResponse.ok) {
        const data = await checkResponse.json();
        sha = data.sha;
      }
    } catch {}

    // Criar/atualizar o arquivo via API do GitHub
    const response = await fetch(
      `https://api.github.com/repos/${repo}/contents/database.db`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `🔄 Backup automático - ${timestamp}`,
          content: dbContent,
          ...(sha ? { sha } : {}),
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`HTTP ${response.status}: ${error}`);
    }

    console.log('[GitBackup] ✅ Backup enviado para GitHub!');
    return true;
  } catch (err) {
    console.error('[GitBackup] ❌ Erro ao fazer backup:', err.message);
    return false;
  }
}

// ─── Iniciar sistema de backup automático ─────────────────────────────────────
async function iniciar() {
  // Verificar se as variáveis estão configuradas
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_BACKUP_REPO;
  
  if (!token || !repo) {
    console.log('[GitBackup] ⚠️ Sistema desabilitado (GITHUB_TOKEN ou GITHUB_BACKUP_REPO não configurado)');
    return; // Sair silenciosamente se não configurado
  }

  const configurado = configurarGit();
  if (!configurado) return;

  // Restaurar backup ao iniciar
  await restaurarBackup();

  // Fazer backup a cada 30 minutos
  backupTimer = setInterval(async () => {
    await fazerBackup();
  }, BACKUP_INTERVAL);

  console.log('[GitBackup] 🚀 Sistema de backup automático iniciado (a cada 30 min)');

  // Cleanup ao desligar (sem bloquear o shutdown)
  process.on('SIGINT', () => {
    clearInterval(backupTimer);
    console.log('[GitBackup] ⚠️ Bot encerrando (backup será feito no próximo intervalo)');
  });

  process.on('SIGTERM', () => {
    clearInterval(backupTimer);
    console.log('[GitBackup] ⚠️ Bot encerrando (backup será feito no próximo intervalo)');
  });
}

// ─── Comando manual de backup (usar com !backup) ──────────────────────────────
async function backupManual() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_BACKUP_REPO;
  
  if (!token || !repo) {
    return false; // Não configurado
  }
  
  return await fazerBackup();
}

module.exports = { iniciar, backupManual, restaurarBackup, fazerBackup };
