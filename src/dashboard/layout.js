/**
 * dashboard/layout.js — Layout base e CSS (tema anime moderno)
 */

const CARGO_LABELS = {
  cliente:    { label: 'Cliente',     color: '#60a5fa', icon: '👤' },
  revendedor: { label: 'Revendedor',  color: '#f97316', icon: '🏪' },
  staff:      { label: 'Staff',       color: '#34d399', icon: '🛡️' },
  resp_staff: { label: 'Resp. Staff', color: '#a78bfa', icon: '⭐' },
  sub_dono:   { label: 'Sub-Dono',    color: '#f59e0b', icon: '👑' },
  dono:       { label: 'Dono',        color: '#f43f5e', icon: '💎' },
};

const ABAS_INFO = {
  overview:     { icon: '📊', label: 'Visão Geral'    },
  loja:         { icon: '🛍️', label: 'Loja'           },
  perfil:       { icon: '👤', label: 'Perfil'          },
  meus_pedidos: { icon: '📦', label: 'Meus Pedidos'    },
  revendedor:   { icon: '🏪', label: 'Revendedor'      },
  carrinhos:    { icon: '🛒', label: 'Carrinhos'        },
  solicitar:    { icon: '📋', label: 'Solicitar Item'  },
  solicitacoes: { icon: '📥', label: 'Solicitações'   },
  usuarios:     { icon: '👥', label: 'Usuários'       },
  produtos:     { icon: '📦', label: 'Produtos'        },
  pedidos:      { icon: '🛒', label: 'Pedidos'         },
  tickets:      { icon: '🎫', label: 'Tickets'         },
  cupons:       { icon: '🎟️', label: 'Cupons'          },
  gerenciar:    { icon: '⚙️', label: 'Gerenciar'       },
  config_mr:    { icon: '🔧', label: 'Config. Mr'      },
  clientes:     { icon: '📥', label: 'Clientes'        },
};

const CSS = `<canvas id="bg-canvas" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none"></canvas>
<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Inter:wght@400;600;700;900&display=swap');
:root{--bg:#0d0d14;--sidebar:#0a0a10;--card:#16161f;--card2:#1a1a25;--border:#00ff8820;--border2:#00ff8830;--text:#ffffff;--text2:#8b8b9f;--accent:#00ff88;--accent2:#00ffaa;--red:#ff0844;--red-glow:#ff3366;--purple:#b026ff;--yellow:#ffd700;--blue:#00d4ff;--pink:#ff2d95;--cyan:#00ffff;--radius:8px;--sidebar-w:260px}
*{box-sizing:border-box;margin:0;padding:0}html,body{height:100%}
body{font-family:'Rajdhani','Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.5;font-weight:600}
body::before{content:'';position:fixed;inset:0;z-index:0;background:radial-gradient(ellipse 80% 60% at 10% 20%,rgba(0,255,136,0.08) 0%,transparent 60%),radial-gradient(ellipse 60% 50% at 90% 80%,rgba(255,8,68,0.06) 0%,transparent 55%),radial-gradient(ellipse 50% 40% at 50% 50%,rgba(176,38,255,0.04) 0%,transparent 50%),linear-gradient(160deg,#0d0d14 0%,#121218 50%,#0d0d14 100%);pointer-events:none}
body::after{content:'';position:fixed;inset:0;z-index:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,255,136,0.02) 2px,rgba(0,255,136,0.02) 4px);pointer-events:none;opacity:0.4}
.layout,.auth-bg{position:relative;z-index:1}
::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(0,255,136,0.3);border-radius:4px}::-webkit-scrollbar-thumb:hover{background:rgba(0,255,136,0.5)}
.layout{display:flex;min-height:100vh}
.sidebar{width:var(--sidebar-w);background:linear-gradient(180deg,rgba(10,10,16,0.95) 0%,rgba(8,8,14,0.98) 100%);border-right:1px solid var(--border2);display:flex;flex-direction:column;position:sticky;top:0;height:100vh;z-index:220;overflow-y:auto;box-shadow:0 0 40px rgba(0,255,136,0.1),inset -1px 0 0 rgba(0,255,136,0.1);flex-shrink:0;transition:width .3s cubic-bezier(.4,0,.2,1),opacity .3s ease;backdrop-filter:blur(20px) saturate(180%)}
.sidebar.hidden{width:0;opacity:0;overflow:hidden;border:none;box-shadow:none}
.sidebar.open{width:var(--sidebar-w);opacity:1}
.sidebar-logo{padding:24px 20px 20px;border-bottom:1px solid var(--border);position:relative;overflow:hidden}
.sidebar-logo::after{content:'';position:absolute;top:-20px;right:-20px;width:80px;height:80px;background:radial-gradient(circle,rgba(0,255,136,0.15),transparent 70%);pointer-events:none;animation:pulse 3s ease-in-out infinite}
@keyframes pulse{0%,100%{transform:scale(1);opacity:0.15}50%{transform:scale(1.1);opacity:0.25}}
.sidebar-logo .brand{font-size:26px;font-weight:900;letter-spacing:4px;text-transform:uppercase;background:linear-gradient(135deg,#00ff88 0%,#00ffaa 30%,#ff0844 70%,#b026ff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;filter:drop-shadow(0 0 15px rgba(0,255,136,0.4));font-family:'Rajdhani',sans-serif}
.sidebar-logo .sub{font-size:9px;color:rgba(139,139,159,0.6);margin-top:6px;letter-spacing:3px;text-transform:uppercase;font-weight:700}
.sidebar-nav{flex:1;padding:16px 12px}
.nav-section{font-size:10px;color:rgba(0,255,136,0.4);text-transform:uppercase;letter-spacing:2px;padding:16px 14px 8px;font-weight:900}
.nav-item{display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:6px;color:var(--text2);text-decoration:none;font-size:14px;font-weight:700;transition:all .2s cubic-bezier(.4,0,.2,1);cursor:pointer;margin-bottom:3px;border:1px solid transparent;position:relative;overflow:hidden;text-transform:uppercase;letter-spacing:0.5px}
.nav-item::before{content:'';position:absolute;left:0;top:0;bottom:0;width:0;background:linear-gradient(90deg,var(--accent),transparent);transition:width .25s;border-radius:6px 0 0 6px}
.nav-item:hover{background:linear-gradient(135deg,rgba(0,255,136,0.08),rgba(255,8,68,0.02));color:var(--accent);border-color:rgba(0,255,136,0.3);transform:translateX(5px);box-shadow:0 0 20px rgba(0,255,136,0.1)}
.nav-item:hover::before{width:3px}
.nav-item.active{background:linear-gradient(135deg,rgba(0,255,136,0.12),rgba(255,8,68,0.04));color:#fff;border-color:rgba(0,255,136,0.5);box-shadow:0 0 25px rgba(0,255,136,0.15),inset 0 0 20px rgba(0,255,136,0.05)}
.nav-item.active::before{width:3px;background:var(--accent)}
.nav-item .icon{font-size:18px;width:22px;text-align:center;flex-shrink:0}
.sidebar-footer{padding:18px 16px;border-top:1px solid var(--border)}
.user-card{background:linear-gradient(135deg,rgba(22,22,31,0.9),rgba(26,26,37,0.9));border:1px solid var(--border2);border-radius:10px;padding:14px;display:flex;align-items:center;gap:12px;position:relative;overflow:hidden}
.user-card::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,255,136,0.04),transparent);pointer-events:none}
.user-avatar{width:42px;height:42px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,var(--accent),var(--red));display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;box-shadow:0 0 20px rgba(0,255,136,0.5);border:2px solid rgba(0,255,136,0.6)}
.user-info{flex:1;min-width:0}
.user-name{font-size:14px;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#fff;text-transform:uppercase;letter-spacing:0.5px}
.user-cargo{font-size:11px;font-weight:700;margin-top:2px;text-transform:uppercase;letter-spacing:0.5px}
.logout-btn{display:block;text-align:center;margin-top:12px;color:var(--text2);font-size:12px;text-decoration:none;padding:8px;border-radius:6px;transition:all .2s;border:1px solid transparent;font-weight:700;text-transform:uppercase;letter-spacing:1px}
.logout-btn:hover{background:rgba(255,8,68,0.12);color:var(--red);border-color:rgba(255,8,68,0.4);box-shadow:0 0 15px rgba(255,8,68,0.2)}
.main{flex:1;padding:32px;min-height:100vh;position:relative;z-index:1;transition:padding .25s ease;min-width:0}
.page-header{margin-bottom:32px;padding-bottom:24px;border-bottom:1px solid var(--border)}
.page-title{font-size:32px;font-weight:900;color:#fff;background:linear-gradient(135deg,#fff 20%,#00ff88 60%,#ff0844);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:2px;text-transform:uppercase;font-family:'Rajdhani',sans-serif;filter:drop-shadow(0 0 10px rgba(0,255,136,0.3))}
.stats-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;margin-bottom:32px}
.stat-card{background:linear-gradient(135deg,var(--card),var(--card2));border:1px solid var(--border);border-radius:var(--radius);padding:24px;position:relative;overflow:hidden;transition:transform .25s cubic-bezier(.4,0,.2,1),border-color .25s,box-shadow .25s}
.stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--glow-a,#00ff88),var(--glow-b,#ff0844));opacity:1;box-shadow:0 0 10px var(--glow-a,#00ff88)}
.stat-card::after{content:'';position:absolute;top:-30px;right:-30px;width:80px;height:80px;background:radial-gradient(circle,rgba(0,255,136,0.08),transparent 70%);pointer-events:none}
.stat-card:hover{transform:translateY(-6px);border-color:var(--accent);box-shadow:0 10px 40px rgba(0,255,136,0.2),0 0 30px rgba(0,255,136,0.1)}
.stat-label{font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:1.5px;font-weight:900;margin-bottom:14px;position:relative;z-index:1}
.stat-value{font-size:36px;font-weight:900;color:#fff;position:relative;z-index:1;line-height:1;letter-spacing:-1px;text-shadow:0 0 20px rgba(0,255,136,0.3)}
.stat-sub{font-size:12px;color:var(--text2);margin-top:10px;position:relative;z-index:1;font-weight:700}
.table-card{background:linear-gradient(135deg,var(--card),var(--card2));border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;margin-bottom:28px;box-shadow:0 4px 30px rgba(0,0,0,0.5),0 0 20px rgba(0,255,136,0.05)}
.table-head{padding:18px 24px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;background:linear-gradient(135deg,rgba(13,13,20,0.9),rgba(10,10,16,0.8));backdrop-filter:blur(10px)}
.table-title{font-size:16px;font-weight:900;color:#fff;letter-spacing:1px;text-transform:uppercase}
table{width:100%;border-collapse:collapse}
th{padding:14px 20px;text-align:left;font-size:11px;color:var(--accent);text-transform:uppercase;letter-spacing:1px;background:rgba(0,0,0,0.3);font-weight:900;border-bottom:1px solid var(--border)}
td{padding:14px 20px;font-size:14px;border-bottom:1px solid rgba(0,255,136,0.08);color:var(--text);transition:background .15s;font-weight:600}
tr:last-child td{border-bottom:none}tr:hover td{background:rgba(0,255,136,0.05)}
.badge{display:inline-flex;align-items:center;gap:5px;padding:4px 12px;border-radius:4px;font-size:11px;font-weight:900;letter-spacing:0.5px;text-transform:uppercase}
.badge-green{background:rgba(0,255,136,0.15);color:#00ff88;border:1px solid rgba(0,255,136,0.4);box-shadow:0 0 10px rgba(0,255,136,0.2)}
.badge-red{background:rgba(255,8,68,0.15);color:#ff3366;border:1px solid rgba(255,8,68,0.4);box-shadow:0 0 10px rgba(255,8,68,0.2)}
.badge-yellow{background:rgba(255,215,0,0.15);color:#ffd700;border:1px solid rgba(255,215,0,0.4)}
.badge-blue{background:rgba(0,212,255,0.15);color:#00d4ff;border:1px solid rgba(0,212,255,0.4)}
.badge-purple{background:rgba(176,38,255,0.15);color:#b026ff;border:1px solid rgba(176,38,255,0.4)}
.badge-gray{background:rgba(139,139,159,0.15);color:#8b8b9f;border:1px solid rgba(139,139,159,0.4)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:10px 20px;border-radius:6px;font-size:14px;font-weight:900;cursor:pointer;text-decoration:none;border:none;transition:all .2s cubic-bezier(.4,0,.2,1);white-space:nowrap;position:relative;overflow:hidden;font-family:inherit;text-transform:uppercase;letter-spacing:1px}
.btn-primary{background:linear-gradient(135deg,#00ff88,#00ffaa);color:#000;box-shadow:0 0 25px rgba(0,255,136,0.4),inset 0 0 20px rgba(255,255,255,0.1);border:1px solid var(--accent)}
.btn-primary:hover{background:linear-gradient(135deg,#00ffaa,#00ff88);box-shadow:0 0 35px rgba(0,255,136,0.6),inset 0 0 30px rgba(255,255,255,0.2);transform:translateY(-2px) scale(1.02)}
.btn-success{background:rgba(0,255,136,0.12);color:#00ff88;border:1px solid rgba(0,255,136,0.4);box-shadow:0 0 15px rgba(0,255,136,0.2)}
.btn-success:hover{background:rgba(0,255,136,0.2);box-shadow:0 0 25px rgba(0,255,136,0.3)}
.btn-danger{background:rgba(255,8,68,0.12);color:#ff3366;border:1px solid rgba(255,8,68,0.4);box-shadow:0 0 15px rgba(255,8,68,0.2)}
.btn-danger:hover{background:rgba(255,8,68,0.2);box-shadow:0 0 25px rgba(255,8,68,0.3)}
.btn-ghost{background:transparent;color:var(--text2);border:1px solid var(--border2);font-weight:700}
.btn-ghost:hover{background:var(--card2);color:var(--accent);border-color:rgba(0,255,136,0.4)}
.btn-sm{padding:6px 14px;font-size:12px;border-radius:5px}
.form-group{margin-bottom:20px}
.form-group label{display:block;font-size:11px;color:var(--accent);font-weight:900;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px}
.form-control{width:100%;padding:12px 16px;background:rgba(10,10,16,0.9);border:1px solid var(--border2);border-radius:6px;color:var(--text);font-size:14px;outline:none;transition:border-color .2s,box-shadow .2s;font-family:inherit;font-weight:600}
.form-control:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(0,255,136,0.15),0 0 20px rgba(0,255,136,0.1);background:rgba(13,13,20,0.95)}
.form-control option{background:#0d0d14;font-weight:600}
.form-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}
.alert{padding:14px 18px;border-radius:8px;margin-bottom:20px;font-size:14px;display:flex;align-items:center;gap:12px;font-weight:700}
.alert-success{background:rgba(0,255,136,0.1);border:1px solid rgba(0,255,136,0.3);color:#00ff88;box-shadow:0 0 15px rgba(0,255,136,0.1)}
.alert-error{background:rgba(255,8,68,0.1);border:1px solid rgba(255,8,68,0.3);color:#ff3366;box-shadow:0 0 15px rgba(255,8,68,0.1)}
.alert-info{background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.3);color:#00d4ff}
.search-row{display:flex;gap:12px;margin-bottom:20px;flex-wrap:wrap}
.search-row .form-control{max-width:300px}
.produtos-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:24px;margin-bottom:28px}
.produto-card{background:linear-gradient(135deg,var(--card),var(--card2));border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;transition:transform .25s cubic-bezier(.4,0,.2,1),border-color .25s,box-shadow .25s;cursor:pointer;position:relative}
.produto-card:hover{transform:translateY(-8px) scale(1.02);border-color:rgba(0,255,136,0.6);box-shadow:0 20px 60px rgba(0,255,136,0.2),0 0 40px rgba(0,255,136,0.15)}
.produto-img{width:100%;height:165px;background:linear-gradient(135deg,#0d0d14,#1a1a25);display:flex;align-items:center;justify-content:center;font-size:52px;overflow:hidden;position:relative}
.produto-img img{width:100%;height:100%;object-fit:cover;transition:transform .4s}
.produto-card:hover .produto-img img{transform:scale(1.15)}
.produto-body{padding:18px}
.produto-nome{font-size:15px;font-weight:900;margin-bottom:8px;color:#fff;line-height:1.3;text-transform:uppercase;letter-spacing:0.5px}
.produto-preco{font-size:24px;font-weight:900;margin-bottom:12px;background:linear-gradient(135deg,#00ff88,#ffd700);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-shadow:0 0 20px rgba(0,255,136,0.3)}
.produto-desc{font-size:12px;color:var(--text2);margin-bottom:14px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:1.6;font-weight:600}
.pagination{display:flex;gap:10px;align-items:center;margin-top:20px}
.pagination a,.pagination span{padding:8px 16px;border-radius:6px;font-size:14px;text-decoration:none;font-weight:700}
.pagination a{background:var(--card2);color:var(--text);border:1px solid var(--border2);transition:all .2s}
.pagination a:hover{background:var(--accent);color:#000;box-shadow:0 0 15px rgba(0,255,136,0.3)}
.pagination .current{background:linear-gradient(135deg,var(--accent),#00ffaa);color:#000;font-weight:900;border:none;box-shadow:0 0 20px rgba(0,255,136,0.4)}
@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.main > *{animation:fadeInUp .3s ease-out both}
.main > *:nth-child(2){animation-delay:.05s}
.main > *:nth-child(3){animation-delay:.1s}
.main > *:nth-child(4){animation-delay:.15s}
@media(max-width:900px){
  .sidebar{position:fixed;top:0;left:0;bottom:0;width:260px!important;opacity:1!important;overflow-y:auto;transform:translateX(-100%);transition:transform .3s ease;z-index:999}
  .sidebar.open{transform:translateX(0)}
  .sidebar.hidden{transform:translateX(-100%)}
  .main{margin-left:0;padding:16px}
  .stats-grid{grid-template-columns:repeat(2,1fr)}
  .produtos-grid{grid-template-columns:repeat(2,1fr)}
  [style*="grid-template-columns"]{grid-template-columns:1fr!important}
}
@media(max-width:600px){
  .stats-grid,.produtos-grid{grid-template-columns:1fr}
  .main{padding:12px}
  .page-title{font-size:22px}
  th,td{padding:8px 10px;font-size:12px}
  table{display:block;overflow-x:auto;-webkit-overflow-scrolling:touch}
}
</style>
<script>
(function(){
  const canvas = document.getElementById('bg-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize(){ W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  function initParticles(){
    particles = [];
    const n = Math.floor(W * H / 12000);
    for(let i=0;i<n;i++){
      particles.push({ x:Math.random()*W, y:Math.random()*H, size:Math.random()*2+0.5, vx:(Math.random()-.5)*.3, vy:-Math.random()*.4-.1, alpha:Math.random()*.6+.2, color:['0,255,136','255,8,68','176,38,255','0,212,255'][Math.floor(Math.random()*4)], pulse:Math.random()*Math.PI*2, ps:Math.random()*.02+.005 });
    }
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    particles.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy; p.pulse+=p.ps;
      if(p.y<-10)p.y=H+10; if(p.x<-10)p.x=W+10; if(p.x>W+10)p.x=-10;
      const a=p.alpha*(0.5+0.5*Math.sin(p.pulse));
      ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
      ctx.fillStyle='rgba('+p.color+','+a+')'; ctx.fill();
      const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size*5);
      g.addColorStop(0,'rgba('+p.color+','+(a*.2)+')'); g.addColorStop(1,'rgba('+p.color+',0)');
      ctx.fillStyle=g; ctx.beginPath(); ctx.arc(p.x,p.y,p.size*5,0,Math.PI*2); ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize(); initParticles(); window.addEventListener('resize',()=>{resize();initParticles();}); draw();
})();
</script>`;

function layout(user, title, body, activePage = '') {
  const { podeVer } = require('./db');
  const cargo = user?.cargo || 'cliente';
  const ci    = CARGO_LABELS[cargo] || CARGO_LABELS.cliente;
  const isVisitante = user?.__visitante;

  const navItems = Object.entries(ABAS_INFO)
    .filter(([aba]) => {
      if (isVisitante) return aba === 'loja' || aba === 'perfil';
      return aba === 'perfil' || podeVer(cargo, aba);
    })
    .map(([aba, info]) => `
      <a href="/painel/${aba === 'overview' ? 'overview' : aba.replace(/_/g, '-')}" class="nav-item${activePage === aba ? ' active' : ''}">
        <span class="icon">${info.icon}</span>
        <span>${info.label}</span>
      </a>
    `).join('');

  const inicial = (user?.username || 'V')[0].toUpperCase();

  const footerHtml = isVisitante ? `
    <div style="padding:16px;border-top:1px solid var(--border)">
      <a href="/painel/login" class="btn btn-primary" style="width:100%;margin-bottom:8px;justify-content:center">🔑 Entrar</a>
      <a href="/painel/cadastro" class="btn btn-ghost" style="width:100%;justify-content:center">✨ Criar conta</a>
    </div>` : `
    <div class="sidebar-footer">
      <div class="user-card">
        <div class="user-avatar">${inicial}</div>
        <div class="user-info">
          <div class="user-name">${user?.username || 'Usuário'}</div>
          <div class="user-cargo" style="color:${ci.color}">${ci.icon} ${ci.label}</div>
        </div>
      </div>
      <a href="/painel/logout" class="logout-btn">🚪 Sair da conta</a>
    </div>`;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title} — MrStore</title>
${CSS}
<style>
.hamburger{display:flex;position:fixed;top:14px;left:14px;z-index:1000;background:linear-gradient(135deg,#6d28d9,#4f1d96);border:none;border-radius:10px;width:42px;height:42px;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 18px rgba(109,40,217,0.5);color:#fff;font-size:20px;transition:all .2s}
.hamburger:hover{background:linear-gradient(135deg,#9333ea,#6d28d9);transform:scale(1.08)}
.main{padding-top:64px!important}
</style>
</head>
<body>
<button class="hamburger" onclick="toggleMenu()" id="ham-btn">☰</button>
<div class="layout">
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-logo">
      <div class="brand">MrStore</div>
      <div class="sub">Painel de Controle</div>
    </div>
    <nav class="sidebar-nav">${navItems}</nav>
    ${footerHtml}
  </aside>
  <div id="sb-backdrop" onclick="fecharMenu()" style="display:none;position:fixed;inset:0;z-index:998;background:rgba(0,0,0,0.6);backdrop-filter:blur(3px);-webkit-tap-highlight-color:transparent"></div>
  <main class="main">
    <div class="page-header"><div class="page-title">${title}</div></div>
    ${body}
  </main>
</div>
<script>
var _desktop = window.innerWidth > 900;
function toggleMenu(){
  _desktop = window.innerWidth > 900;
  var sb = document.getElementById('sidebar');
  sb.classList.contains('open') ? fecharMenu() : abrirMenu();
}
function abrirMenu(){
  var sb = document.getElementById('sidebar');
  sb.classList.remove('hidden'); sb.classList.add('open');
  document.getElementById('ham-btn').textContent = '✕';
  if(window.innerWidth <= 900) document.getElementById('sb-backdrop').style.display = 'block';
}
function fecharMenu(){
  var sb = document.getElementById('sidebar');
  sb.classList.add('hidden'); sb.classList.remove('open');
  document.getElementById('sb-backdrop').style.display = 'none';
  document.getElementById('ham-btn').textContent = '☰';
}
window.addEventListener('DOMContentLoaded', function(){
  var sb = document.getElementById('sidebar');
  if(window.innerWidth > 900){ sb.classList.add('open'); sb.classList.remove('hidden'); document.getElementById('ham-btn').textContent = '✕'; }
  else { sb.classList.add('hidden'); }
});
window.addEventListener('resize', function(){
  if(window.innerWidth > 900) document.getElementById('sb-backdrop').style.display = 'none';
});
</script>
</body>
</html>`;
}

function loginLayout(title, body) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title} — MrStore</title>
${CSS}
<style>
.auth-bg{min-height:100vh;display:grid;place-items:center;padding:20px}
.auth-card{background:linear-gradient(135deg,rgba(11,9,24,0.95),rgba(14,11,30,0.95));border:1px solid rgba(109,40,217,0.3);border-radius:20px;padding:44px;width:min(440px,95vw);box-shadow:0 30px 70px rgba(0,0,0,0.7),0 0 80px rgba(109,40,217,0.12);backdrop-filter:blur(20px);position:relative;z-index:1}
.auth-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#9333ea,transparent);border-radius:20px 20px 0 0}
.auth-logo{text-align:center;margin-bottom:32px}
.auth-logo .brand{font-size:32px;font-weight:900;background:linear-gradient(135deg,#e8b840,#f5d060,#c084fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;filter:drop-shadow(0 0 15px rgba(232,184,64,0.3))}
.auth-logo .sub{font-size:12px;color:#40406080;margin-top:5px;letter-spacing:2px;text-transform:uppercase;font-weight:600}
.auth-title{font-size:20px;font-weight:800;margin-bottom:6px;color:#fff}
.auth-sub{font-size:13px;color:#5a5a90;margin-bottom:24px}
.auth-switch{text-align:center;margin-top:20px;font-size:13px;color:#5a5a90}
.auth-switch a{color:#c084fc;text-decoration:none;font-weight:700}
.auth-switch a:hover{color:#e879f9}
</style>
</head>
<body>
<div class="auth-bg">
  <div class="auth-card">
    <div class="auth-logo">
      <div class="brand">MrStore</div>
      <div class="sub">Painel de Controle</div>
    </div>
    ${body}
  </div>
</div>
</body>
</html>`;
}

function badge(status) {
  const map = {
    pago:'badge-green',entregue:'badge-green',pendente:'badge-yellow',
    cancelado:'badge-red',aberto:'badge-blue',open:'badge-blue',
    fechado:'badge-gray',closed:'badge-gray',ativo:'badge-green',
    aprovado:'badge-green',recusado:'badge-red',cliente:'badge-blue',
    revendedor:'badge-yellow',
    staff:'badge-green',resp_staff:'badge-purple',sub_dono:'badge-yellow',
    dono:'badge-red',inativo:'badge-gray',expirado:'badge-red',bloqueado:'badge-red',
  };
  return `<span class="badge ${map[status] || 'badge-gray'}">${status}</span>`;
}

function fmtDate(ts) {
  if (!ts) return '—';
  return new Date(ts * 1000).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function fmtMoeda(v) { return `R$ ${Number(v || 0).toFixed(2)}`; }

function pagination(page, total, limit, base) {
  const pages = Math.ceil(total / limit);
  if (pages <= 1) return '';
  const sep = base.includes('?') ? '&' : '?';
  let html = `<div class="pagination">`;
  if (page > 1) html += `<a href="${base}${sep}page=${page - 1}">← Anterior</a>`;
  html += `<span class="current">Página ${page} de ${pages}</span>`;
  if (page < pages) html += `<a href="${base}${sep}page=${page + 1}">Próxima →</a>`;
  html += `</div>`;
  return html;
}

module.exports = { layout, loginLayout, badge, fmtDate, fmtMoeda, pagination, CARGO_LABELS, ABAS_INFO };
