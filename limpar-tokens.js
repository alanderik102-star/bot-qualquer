const Database = require('better-sqlite3');
const db = new Database('./data/database.db');

console.log('🔍 Procurando tokens no banco...');

// Verificar todas as tabelas
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
console.log(`📊 Tabelas encontradas: ${tables.map(t => t.name).join(', ')}`);

// Limpar tokens da tabela bot_sessions (se existir)
try {
  db.prepare("DELETE FROM bot_sessions WHERE 1=1").run();
  console.log('✅ Tokens removidos de bot_sessions');
} catch (e) {
  console.log('ℹ️ Tabela bot_sessions não existe');
}

// Limpar qualquer coluna que contenha "token"
for (const table of tables) {
  try {
    const info = db.prepare(`PRAGMA table_info(${table.name})`).all();
    const tokenCols = info.filter(col => col.name.toLowerCase().includes('token'));
    
    if (tokenCols.length > 0) {
      console.log(`⚠️ Encontrado coluna com token em ${table.name}: ${tokenCols.map(c => c.name).join(', ')}`);
      
      for (const col of tokenCols) {
        db.prepare(`UPDATE ${table.name} SET ${col.name} = NULL`).run();
        console.log(`✅ Coluna ${col.name} limpa em ${table.name}`);
      }
    }
  } catch (e) {
    console.log(`⚠️ Erro ao processar ${table.name}: ${e.message}`);
  }
}

db.close();
console.log('✅ Limpeza concluída! Banco seguro para upload.');
