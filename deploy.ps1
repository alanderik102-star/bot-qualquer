$env:Path += ";C:\Program Files\Git\bin"

Write-Host "Fazendo deploy das mudancas..." -ForegroundColor Cyan

git add src/webhook/server.js src/webhook/landingPage.js
git status
git commit -m "feat: Add ultra-modern landing page with animations and 404 page"
git push origin main

Write-Host "Deploy concluido!" -ForegroundColor Green
Write-Host "Aguarde 1-2 minutos para o Render fazer o rebuild" -ForegroundColor Yellow
Write-Host "Depois acesse: https://www.mrstore.com.br" -ForegroundColor Magenta
