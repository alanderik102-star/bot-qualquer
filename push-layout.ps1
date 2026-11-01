$env:Path += ";C:\Program Files\Git\bin"

Write-Host "Adicionando mudancas do layout gamer..." -ForegroundColor Cyan
git add src/webhook/landingPage.js

Write-Host "Fazendo commit..." -ForegroundColor Yellow
git commit -m "feat: New GAMER layout - FiveM/FF style with neon effects"

Write-Host "Push..." -ForegroundColor Green
git push origin main

Write-Host ""
Write-Host "Concluido! Aguarde 2-3 min para o Render rebuildar" -ForegroundColor Magenta
Write-Host "Depois acesse: https://www.mrstore.com.br" -ForegroundColor Cyan
