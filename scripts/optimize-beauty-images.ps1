$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$workspace = Split-Path $PSScriptRoot -Parent
$source = Join-Path $workspace 'public/images/estetica-beleza/shared'
$destination = Join-Path $workspace 'public/images/estetica-beleza/optimized'
New-Item -ItemType Directory -Path $destination -Force | Out-Null
$codec = [Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
foreach ($file in Get-ChildItem -LiteralPath $source -Filter '*.png') {
  $original = [Drawing.Image]::FromFile($file.FullName)
  try {
    foreach ($width in @(1280, 640)) {
      $height = [int][Math]::Round($original.Height * $width / $original.Width)
      $bitmap = New-Object Drawing.Bitmap($width, $height)
      $graphics = [Drawing.Graphics]::FromImage($bitmap)
      $parameters = New-Object Drawing.Imaging.EncoderParameters(1)
      try {
        $graphics.InterpolationMode = [Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.CompositingQuality = [Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.Clear([Drawing.Color]::White)
        $graphics.DrawImage($original, 0, 0, $width, $height)
        $parameters.Param[0] = New-Object Drawing.Imaging.EncoderParameter([Drawing.Imaging.Encoder]::Quality, [long]82)
        $suffix = if ($width -eq 640) { '-640' } else { '' }
        $target = Join-Path $destination ($file.BaseName + $suffix + '.jpg')
        $bitmap.Save($target, $codec, $parameters)
      } finally { $graphics.Dispose(); $bitmap.Dispose(); $parameters.Dispose() }
    }
  } finally { $original.Dispose() }
}
$before = (Get-ChildItem -LiteralPath $source -Filter '*.png' | Measure-Object Length -Sum).Sum
$after = (Get-ChildItem -LiteralPath $destination -Filter '*.jpg' | Measure-Object Length -Sum).Sum
Write-Output "Beauty assets: $([Math]::Round($before / 1MB, 1)) MB originals -> $([Math]::Round($after / 1MB, 1)) MB responsive JPEGs. Originals preserved."
