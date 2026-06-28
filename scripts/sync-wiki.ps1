# sync-wiki.ps1 — run locally to push latest wiki data to GitHub
# Usage: .\scripts\sync-wiki.ps1

$WIKI = "C:\Users\Mike\Documents\Fred\Fred\wiki"
$TASKS_SRC = "C:\Users\Mike\.claude\scheduled-tasks"
$REPO = "C:\Users\Mike\fred-dashboard"

# Copy portfolio files
Write-Host "Syncing portfolios..."
Copy-Item "$WIKI\finance\paper-trading\Paper Trading Portfolio.md" "$REPO\data\portfolios\p1.md" -Force
Copy-Item "$WIKI\finance\paper-trading-vol\portfolio.md"           "$REPO\data\portfolios\p2.md" -Force
Copy-Item "$WIKI\finance\portfolio-overview.md"                    "$REPO\data\portfolios\equity.md" -Force

# Rebuild tasks.json from SKILL.md files
Write-Host "Rebuilding tasks.json..."
$tasks = Get-ChildItem $TASKS_SRC -Directory | ForEach-Object {
  $skill = [System.IO.File]::ReadAllText("$($_.FullName)\SKILL.md")
  $desc = if ($skill -match 'description:\s*(.+)') { $matches[1] -replace '[—–].*','' | ForEach-Object { $_.Trim() } } else { $_.Name }
  [ordered]@{ id = $_.Name; description = $desc; prompt = $skill }
}
$json = ConvertTo-Json -InputObject @($tasks) -Depth 3 -Compress:$false
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText("$REPO\data\tasks.json", $json, $utf8NoBom)

# Commit and push
Set-Location $REPO
git add data/
git diff --staged --quiet
if ($LASTEXITCODE -ne 0) {
  $date = Get-Date -Format "yyyy-MM-dd HH:mm"
  git commit -m "sync: wiki data update $date"
  git push
  Write-Host "Pushed to GitHub — Vercel will redeploy automatically."
} else {
  Write-Host "No changes to sync."
}
