module.exports.html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="MrStore - A melhor loja de produtos digitais e serviços do Discord. Pagamento via PIX instantâneo.">
  <title>MrStore - Sua Loja Premium no Discord</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #0a0a0f;
      --bg-darker: #050508;
      --bg-card: #13131a;
      --accent: #e8b840;
      --accent-glow: #f5d060;
      --purple: #9333ea;
      --purple-light: #a855f7;
      --text: #e4e4e7;
      --text-dim: #a1a1aa;
      --border: #27272a;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg-dark);
      color: var(--text);
      overflow-x: hidden;
      line-height: 1.6;
    }
    
    /* Animated gradient background */
    body::before {
      content: '';
      position: fixed;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(232, 184, 64, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 40% 90%, rgba(168, 85, 247, 0.08) 0%, transparent 50%);
      animation: gradientShift 20s ease infinite;
      pointer-events: none;
      z-index: 0;
    }
    
    @keyframes gradientShift {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      33% { transform: translate(-10%, -10%) rotate(120deg); }
      66% { transform: translate(10%, 10%) rotate(240deg); }
    }
    
    .container {
      position: relative;
      z-index: 1;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 24px;
    }
    
    /* Header */
    header {
      position: sticky;
      top: 0;
      backdrop-filter: blur(20px) saturate(180%);
      background: rgba(10, 10, 15, 0.8);
      border-bottom: 1px solid var(--border);
      z-index: 1000;
      padding: 20px 0;
    }
    
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 28px;
      font-weight: 900;
      background: linear-gradient(135deg, var(--accent), var(--accent-glow), var(--purple-light));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.5px;
    }
    
    .nav-links {
      display: flex;
      gap: 32px;
      list-style: none;
    }
    
    .nav-links a {
      color: var(--text-dim);
      text-decoration: none;
      font-weight: 500;
      font-size: 15px;
      transition: color 0.3s, transform 0.2s;
      position: relative;
    }
    
    .nav-links a:hover {
      color: var(--accent);
      transform: translateY(-2px);
    }
    
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent);
      transition: width 0.3s;
    }
    
    .nav-links a:hover::after {
      width: 100%;
    }
    
    .cta-button {
      background: linear-gradient(135deg, var(--purple), var(--purple-light));
      color: white;
      padding: 12px 28px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 15px;
      text-decoration: none;
      transition: all 0.3s;
      box-shadow: 0 4px 20px rgba(147, 51, 234, 0.3);
    }
    
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(147, 51, 234, 0.5);
    }
    
    /* Hero Section */
    .hero {
      padding: 120px 0 80px;
      text-align: center;
      position: relative;
    }
    
    .hero h1 {
      font-size: clamp(48px, 8vw, 92px);
      font-weight: 900;
      line-height: 1.1;
      margin-bottom: 24px;
      letter-spacing: -2px;
    }
    
    .gradient-text {
      background: linear-gradient(135deg, var(--accent) 0%, var(--accent-glow) 40%, var(--purple-light) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s ease-in-out infinite;
      background-size: 200% auto;
    }
    
    @keyframes shimmer {
      0%, 100% { background-position: 0% center; }
      50% { background-position: 100% center; }
    }
    
    .hero p {
      font-size: 22px;
      color: var(--text-dim);
      max-width: 700px;
      margin: 0 auto 48px;
      line-height: 1.7;
    }
    
    .hero-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .btn-primary {
      background: linear-gradient(135deg, var(--accent), var(--accent-glow));
      color: var(--bg-dark);
      padding: 18px 40px;
      border-radius: 14px;
      font-weight: 700;
      font-size: 17px;
      text-decoration: none;
      transition: all 0.3s;
      box-shadow: 0 10px 40px rgba(232, 184, 64, 0.4);
      border: none;
      cursor: pointer;
    }
    
    .btn-primary:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 50px rgba(232, 184, 64, 0.6);
    }
    
    .btn-secondary {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      color: var(--text);
      padding: 18px 40px;
      border-radius: 14px;
      font-weight: 600;
      font-size: 17px;
      text-decoration: none;
      transition: all 0.3s;
      border: 1px solid var(--border);
    }
    
    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--accent);
      transform: translateY(-2px);
    }
    
    /* Stats */
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 24px;
      margin: 80px 0;
    }
    
    .stat-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 32px;
      text-align: center;
      transition: all 0.3s;
    }
    
    .stat-card:hover {
      border-color: var(--accent);
      transform: translateY(-4px);
      box-shadow: 0 10px 40px rgba(232, 184, 64, 0.2);
    }
    
    .stat-number {
      font-size: 48px;
      font-weight: 900;
      background: linear-gradient(135deg, var(--accent), var(--purple-light));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 8px;
    }
    
    .stat-label {
      color: var(--text-dim);
      font-size: 16px;
      font-weight: 500;
    }
    
    /* Features */
    .features {
      padding: 80px 0;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 64px;
    }
    
    .section-title {
      font-size: 48px;
      font-weight: 900;
      margin-bottom: 16px;
      letter-spacing: -1px;
    }
    
    .section-subtitle {
      font-size: 20px;
      color: var(--text-dim);
      max-width: 600px;
      margin: 0 auto;
    }
    
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 32px;
    }
    
    .feature-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 24px;
      padding: 40px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
    
    .feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(232, 184, 64, 0.1), rgba(147, 51, 234, 0.1));
      opacity: 0;
      transition: opacity 0.4s;
    }
    
    .feature-card:hover::before {
      opacity: 1;
    }
    
    .feature-card:hover {
      border-color: var(--accent);
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(232, 184, 64, 0.2);
    }
    
    .feature-icon {
      font-size: 56px;
      margin-bottom: 20px;
      display: block;
      filter: drop-shadow(0 0 20px currentColor);
    }
    
    .feature-title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 12px;
      position: relative;
      z-index: 1;
    }
    
    .feature-description {
      color: var(--text-dim);
      font-size: 16px;
      line-height: 1.7;
      position: relative;
      z-index: 1;
    }
    
    /* CTA Section */
    .cta-section {
      padding: 120px 0;
      text-align: center;
      background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(232, 184, 64, 0.1));
      border-radius: 32px;
      margin: 80px 0;
      border: 1px solid var(--border);
    }
    
    .cta-section h2 {
      font-size: 56px;
      font-weight: 900;
      margin-bottom: 24px;
      letter-spacing: -1px;
    }
    
    .cta-section p {
      font-size: 20px;
      color: var(--text-dim);
      margin-bottom: 40px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    
    /* Footer */
    footer {
      border-top: 1px solid var(--border);
      padding: 60px 0 40px;
      margin-top: 120px;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 48px;
      margin-bottom: 48px;
    }
    
    .footer-section h3 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 20px;
      color: var(--accent);
    }
    
    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .footer-links a {
      color: var(--text-dim);
      text-decoration: none;
      transition: color 0.3s;
    }
    
    .footer-links a:hover {
      color: var(--accent);
    }
    
    .footer-bottom {
      text-align: center;
      padding-top: 32px;
      border-top: 1px solid var(--border);
      color: var(--text-dim);
      font-size: 14px;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      
      .hero h1 {
        font-size: 48px;
      }
      
      .hero p {
        font-size: 18px;
      }
      
      .hero-buttons {
        flex-direction: column;
        align-items: stretch;
      }
      
      .feature-grid {
        grid-template-columns: 1fr;
      }
      
      .cta-section h2 {
        font-size: 36px;
      }
    }
    
    /* Scroll animations */
    .fade-in {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .feature-card:nth-child(1) { animation-delay: 0.1s; }
    .feature-card:nth-child(2) { animation-delay: 0.2s; }
    .feature-card:nth-child(3) { animation-delay: 0.3s; }
    .feature-card:nth-child(4) { animation-delay: 0.4s; }
    .feature-card:nth-child(5) { animation-delay: 0.5s; }
    .feature-card:nth-child(6) { animation-delay: 0.6s; }
  </style>
</head>
<body>
  <!-- Header -->
  <header>
    <nav class="container">
      <div class="logo">⚡ MrStore</div>
      <ul class="nav-links">
        <li><a href="#recursos">Recursos</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="/termos">Termos</a></li>
        <li><a href="/privacidade">Privacidade</a></li>
      </ul>
      <a href="/painel" class="cta-button">🎛️ Painel Admin</a>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>
        Sua <span class="gradient-text">Loja Premium</span><br>
        no Discord
      </h1>
      <p>
        Sistema completo de vendas com PIX instantâneo, dashboard web,
        gestão de produtos, tickets avançados e muito mais. Tudo em um único bot.
      </p>
      <div class="hero-buttons">
        <a href="https://discord.gg/mrstore" class="btn-primary">🚀 Entrar no Discord</a>
        <a href="/painel" class="btn-secondary">📊 Ver Dashboard</a>
      </div>
      
      <!-- Stats -->
      <div class="stats">
        <div class="stat-card fade-in">
          <div class="stat-number">24/7</div>
          <div class="stat-label">Online Sempre</div>
        </div>
        <div class="stat-card fade-in" style="animation-delay: 0.1s">
          <div class="stat-number">⚡</div>
          <div class="stat-label">Entrega Instantânea</div>
        </div>
        <div class="stat-card fade-in" style="animation-delay: 0.2s">
          <div class="stat-number">🔒</div>
          <div class="stat-label">100% Seguro</div>
        </div>
        <div class="stat-card fade-in" style="animation-delay: 0.3s">
          <div class="stat-number">🎯</div>
          <div class="stat-label">Suporte Premium</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features" id="recursos">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Recursos Avançados</h2>
        <p class="section-subtitle">
          Tudo que você precisa para gerenciar sua loja no Discord de forma profissional
        </p>
      </div>
      
      <div class="feature-grid">
        <div class="feature-card fade-in">
          <span class="feature-icon">💳</span>
          <h3 class="feature-title">Pagamento PIX Automático</h3>
          <p class="feature-description">
            Integração com EFI Bank (Gerencianet) para receber pagamentos via PIX com confirmação instantânea e entrega automática.
          </p>
        </div>
        
        <div class="feature-card fade-in">
          <span class="feature-icon">📦</span>
          <h3 class="feature-title">Gestão de Produtos</h3>
          <p class="feature-description">
            Cadastre produtos digitais, defina preços, estoques, categorias e imagens. Sistema completo de caixas misteriosas e flash sales.
          </p>
        </div>
        
        <div class="feature-card fade-in">
          <span class="feature-icon">🎫</span>
          <h3 class="feature-title">Sistema de Tickets Avançado</h3>
          <p class="feature-description">
            Tickets com SLA, prioridades, tags, transcrição HTML, múltiplas categorias (suporte/denúncia/parceria) e auto-close inteligente.
          </p>
        </div>
        
        <div class="feature-card fade-in">
          <span class="feature-icon">🎛️</span>
          <h3 class="feature-title">Dashboard Web Completo</h3>
          <p class="feature-description">
            Painel administrativo web com Socket.IO, gestão de produtos, usuários, vendas, cupons, estatísticas e controle de permissões.
          </p>
        </div>
        
        <div class="feature-card fade-in">
          <span class="feature-icon">🎁</span>
          <h3 class="feature-title">Sistema de Recompensas</h3>
          <p class="feature-description">
            Coins por compras, cupons de desconto, programa de afiliados com 2 níveis, cashback e sistema de ranking de clientes VIP.
          </p>
        </div>
        
        <div class="feature-card fade-in">
          <span class="feature-icon">🛡️</span>
          <h3 class="feature-title">Segurança & Proteção</h3>
          <p class="feature-description">
            Anti-fraude, backup automático, proteção de cargos, logs detalhados, autenticação 2FA e prevenção de chargebacks.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section" id="sobre">
    <div class="container">
      <h2>Pronto para começar?</h2>
      <p>
        Entre no nosso servidor Discord e conheça todos os recursos da MrStore.
        Suporte dedicado, produtos de qualidade e entrega instantânea!
      </p>
      <div class="hero-buttons">
        <a href="https://discord.gg/mrstore" class="btn-primary">🎮 Entrar no Discord</a>
        <a href="/painel" class="btn-secondary">🔐 Acessar Painel</a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>⚡ MrStore</h3>
          <p style="color: var(--text-dim); line-height: 1.8;">
            A loja mais completa e moderna do Discord.
            Sistema integrado de vendas, pagamentos automáticos e dashboard web.
          </p>
        </div>
        
        <div class="footer-section">
          <h3>Links Rápidos</h3>
          <ul class="footer-links">
            <li><a href="https://discord.gg/mrstore">Discord</a></li>
            <li><a href="/painel">Dashboard</a></li>
            <li><a href="#recursos">Recursos</a></li>
            <li><a href="/health">Status</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Legal</h3>
          <ul class="footer-links">
            <li><a href="/termos">Termos de Serviço</a></li>
            <li><a href="/privacidade">Política de Privacidade</a></li>
            <li><a href="https://discord.gg/mrstore">Suporte</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Tecnologias</h3>
          <ul class="footer-links">
            <li>Discord.js v14</li>
            <li>Express + Socket.IO</li>
            <li>SQLite + Better-SQLite3</li>
            <li>EFI Bank PIX</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        © ${new Date().getFullYear()} MrStore Services — Todos os direitos reservados<br>
        Made with ⚡ by MrStore Team
      </div>
    </div>
  </footer>

  <script>
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Intersection Observer para animações
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .feature-card').forEach(el => {
      observer.observe(el);
    });
  </script>
</body>
</html>`;
