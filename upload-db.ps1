$env:Path += ";C:\Program Files\Git\bin"

Write-Host "Copiando banco de dados..." -ForegroundColor Cyan
Copy-Item "backup-2026-11-01.db" -Destination "data/database.db" -Force

Write-Host "Adicionando ao Git (forcado)..." -ForegroundColor Yellow
git add -f data/database.db

Write-Host "Fazendo commit..." -ForegroundColor Green
git commit -m "Add initial database with products and data"

Write-Host "Fazendo push..." -ForegroundColor Magenta
git push origin main

Write-Host ""
Write-Host "Concluido! Aguarde 2-3 minutos para o Render fazer rebuild" -ForegroundColor Green
Write-Host "Depois teste /loja no Discord" -ForegroundColor Cyan
