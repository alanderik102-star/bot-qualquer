module.exports.html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="MrStore - Menus FiveM, Contas FF, Hacks, Cheats e muito mais! Entrega instantânea via PIX.">
  <title>MrStore - Menus, Hacks & Contas Premium 🔥</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #0d0d14;
      --bg-darker: #050508;
      --bg-card: #16161f;
      --accent: #00ff88;
      --accent-glow: #00ffaa;
      --red: #ff0844;
      --red-glow: #ff3366;
      --purple: #b026ff;
      --purple-light: #d055ff;
      --text: #ffffff;
      --text-dim: #8b8b9f;
      --border: #2a2a3a;
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
    
    /* Animated gradient background - GAMER STYLE */
    body::before {
      content: '';
      position: fixed;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(255, 8, 68, 0.12) 0%, transparent 50%),
                  radial-gradient(circle at 40% 90%, rgba(176, 38, 255, 0.1) 0%, transparent 50%);
      animation: gradientShift 15s ease infinite;
      pointer-events: none;
      z-index: 0;
    }
    
    /* Scanlines effect */
    body::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 136, 0.03) 2px, rgba(0, 255, 136, 0.03) 4px);
      pointer-events: none;
      z-index: 999;
      opacity: 0.3;
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
      font-size: 32px;
      font-weight: 900;
      background: linear-gradient(135deg, var(--accent), var(--red), var(--purple));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
      filter: drop-shadow(0 0 10px var(--accent));
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
      background: linear-gradient(135deg, var(--red), var(--red-glow));
      color: white;
      padding: 12px 28px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 15px;
      text-decoration: none;
      transition: all 0.3s;
      box-shadow: 0 0 20px rgba(255, 8, 68, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1);
      text-transform: uppercase;
      letter-spacing: 1px;
      border: 1px solid var(--red-glow);
    }
    
    .cta-button:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 0 40px rgba(255, 8, 68, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.2);
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
      background: linear-gradient(135deg, var(--accent) 0%, var(--red) 50%, var(--purple) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 2s ease-in-out infinite;
      background-size: 200% auto;
      filter: drop-shadow(0 0 20px var(--accent)) drop-shadow(0 0 40px var(--red));
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
      color: #000;
      padding: 18px 40px;
      border-radius: 8px;
      font-weight: 900;
      font-size: 18px;
      text-decoration: none;
      transition: all 0.3s;
      box-shadow: 0 0 30px rgba(0, 255, 136, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2);
      border: 2px solid var(--accent-glow);
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 2px;
      position: relative;
      overflow: hidden;
    }
    
    .btn-primary::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transform: rotate(45deg);
      animation: shine 3s infinite;
    }
    
    @keyframes shine {
      0% { left: -50%; }
      100% { left: 150%; }
    }
    
    .btn-primary:hover {
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 0 50px rgba(0, 255, 136, 1), inset 0 0 30px rgba(255, 255, 255, 0.3);
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
    
    /* Floating Discord Button */
    .discord-float {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #5865F2 0%, #7289DA 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(88, 101, 242, 0.4),
                  0 0 40px rgba(88, 101, 242, 0.2);
      cursor: pointer;
      z-index: 9999;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      animation: floatPulse 3s ease-in-out infinite;
    }
    
    .discord-float:hover {
      transform: scale(1.1) translateY(-5px);
      box-shadow: 0 8px 30px rgba(88, 101, 242, 0.6),
                  0 0 60px rgba(88, 101, 242, 0.4);
    }
    
    .discord-float svg {
      width: 32px;
      height: 32px;
      fill: white;
    }
    
    .discord-float::before {
      content: 'Discord';
      position: absolute;
      right: 70px;
      background: rgba(88, 101, 242, 0.95);
      color: white;
      padding: 8px 16px;
      border-radius: 8px;
      white-space: nowrap;
      font-size: 14px;
      font-weight: 600;
      opacity: 0;
      transform: translateX(10px);
      transition: all 0.3s ease;
      pointer-events: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    
    .discord-float:hover::before {
      opacity: 1;
      transform: translateX(0);
    }
    
    @keyframes floatPulse {
      0%, 100% {
        transform: translateY(0);
        box-shadow: 0 4px 20px rgba(88, 101, 242, 0.4),
                    0 0 40px rgba(88, 101, 242, 0.2);
      }
      50% {
        transform: translateY(-10px);
        box-shadow: 0 8px 30px rgba(88, 101, 242, 0.5),
                    0 0 50px rgba(88, 101, 242, 0.3);
      }
    }
    
    @media (max-width: 768px) {
      .discord-float {
        width: 50px;
        height: 50px;
        bottom: 20px;
        right: 20px;
      }
      
      .discord-float svg {
        width: 26px;
        height: 26px;
      }
      
      .discord-float::before {
        display: none;
      }
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header>
    <nav class="container">
      <div class="logo">⚡ MrStore</div>
      <ul class="nav-links">
        <li><a href="#recursos">Produtos</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="/termos">Termos</a></li>
        <li><a href="/privacidade">Privacidade</a></li>
      </ul>
      <a href="https://discord.gg/mrstore" class="cta-button">🎮 DISCORD</a>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>
        <span class="gradient-text">MENUS, HACKS & CONTAS</span><br>
        Entrega Instantânea 🔥
      </h1>
      <p>
        Os melhores menus para FiveM, contas Free Fire level max, hacks CS2, 
        MODs e cheats. Pagamento via PIX com entrega automática na hora!
      </p>
      <div class="hero-buttons">
        <a href="https://discord.gg/3gbjPs8rmz" class="btn-primary" target="_blank" rel="noopener">⚡ COMPRAR AGORA</a>
        <a href="/painel" class="btn-secondary">🎮 Ver Produtos</a>
      </div>
      
      <!-- Stats -->
      <div class="stats">
        <div class="stat-card fade-in">
          <div class="stat-number">1000+</div>
          <div class="stat-label">Clientes Satisfeitos</div>
        </div>
        <div class="stat-card fade-in" style="animation-delay: 0.1s">
          <div class="stat-number">⚡</div>
          <div class="stat-label">Entrega em Segundos</div>
        </div>
        <div class="stat-card fade-in" style="animation-delay: 0.2s">
          <div class="stat-number">24/7</div>
          <div class="stat-label">Suporte Online</div>
        </div>
        <div class="stat-card fade-in" style="animation-delay: 0.3s">
          <div class="stat-number">🔒</div>
          <div class="stat-label">100% Seguro</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features" id="recursos">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Produtos Disponíveis</h2>
        <p class="section-subtitle">
          Os melhores menus, contas e cheats do mercado com preços imbatíveis
        </p>
      </div>
      
      <div class="feature-grid">
        <div class="feature-card fade-in">
          <span class="feature-icon">🚗</span>
          <h3 class="feature-title">Menus FiveM Premium</h3>
          <p class="feature-description">
            CS2 Mindless, Shark Menu, Eulen e muito mais. Menus completos com todas as funções desbloqueadas. Suporte vitalício incluso!
          </p>
        </div>
        
        <div class="feature-card fade-in">
          <span class="feature-icon">🔫</span>
          <h3 class="feature-title">Contas Free Fire Max</h3>
          <p class="feature-description">
            Contas level alto, skins raras, diamantes, personagens e pets. Contas verificadas e 100% seguras com garantia de reposição.
          </p>
        </div>
        
        <div class="feature-card fade-in">
          <span class="feature-icon">💎</span>
          <h3 class="feature-title">Hacks & Cheats CS2</h3>
          <p class="feature-description">
            Aimbot, Wallhack, ESP, Triggerbot e muito mais. Indetectáveis, atualizados semanalmente. Prime e não Prime disponíveis.
          </p>
        </div>
        
        <div class="feature-card fade-in">
          <span class="feature-icon">🎮</span>
          <h3 class="feature-title">Contas Valorant & LOL</h3>
          <p class="feature-description">
            Contas unranked até Radiante, skins raras, battle pass completo. Riot Games verificado. Mudança de email inclusa.
          </p>
        </div>
        
        <div class="feature-card fade-in">
          <span class="feature-icon">⚡</span>
          <h3 class="feature-title">MODs & Scripts</h3>
          <p class="feature-description">
            Scripts exclusivos para FiveM, GTA V Online, Roblox Executors e muito mais. Sempre atualizados e funcionando perfeitamente.
          </p>
        </div>
        
        <div class="feature-card fade-in">
          <span class="feature-icon">🛡️</span>
          <h3 class="feature-title">VPN & Spoofer</h3>
          <p class="feature-description">
            HWID Spoofer para bypass de ban, VPN premium, contas Netflix, Spotify, Disney+. Assinaturas mensais ou vitalícias.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section" id="sobre">
    <div class="container">
      <h2>Pronto para dominar? 🔥</h2>
      <p>
        Entre no Discord e veja todos os nossos produtos. 
        Pagamento via PIX com entrega INSTANTÂNEA. Suporte 24/7!
      </p>
      <div class="hero-buttons">
        <a href="https://discord.gg/3gbjPs8rmz" class="btn-primary" target="_blank" rel="noopener">🎮 ENTRAR NO DISCORD</a>
        <a href="/painel" class="btn-secondary">👑 Ver Produtos</a>
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
  
  <!-- Floating Discord Button -->
  <a href="https://discord.gg/3gbjPs8rmz" class="discord-float" target="_blank" rel="noopener" aria-label="Entrar no Discord">
    <svg viewBox="0 0 71 55" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="71" height="55" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </a>

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
