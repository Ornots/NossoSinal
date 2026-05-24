const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// replace variables
content = content.replace(/--sina-green:\s*#[a-zA-Z0-9]+;/g, '--sina-orange: #EB5B0D;');
content = content.replace(/--sina-green-light:\s*#[a-zA-Z0-9]+;/g, '--sina-orange-light: #F38446;');
content = content.replace(/--sina-bg:\s*rgba\([^)]+\);/g, '--sina-bg: rgba(235, 91, 13, 0.15);');

// replace references
content = content.replace(/--sina-green/g, '--sina-orange');

// Replace explicit static colors in Sina-related places
// Sina glow box-shadow etc
content = content.replace(/rgba\(13,\s*148,\s*136/g, 'rgba(235, 91, 13');
// #0D9488 was used for Sina
content = content.replace(/#0D9488/gi, '#EB5B0D');

// We also used #0F766E in Sina gradient. We want an orange tone for gradient: #C54605
// Wait, replacing all #0F766E is bad because it's the primary teal color. Instead:
// background: linear-gradient(135deg, var(--sina-orange), #0F766E); -> #C54605
content = content.replace(/background: linear-gradient\(135deg, var\(--sina-orange\), #0F766E\);/g, 'background: linear-gradient(135deg, var(--sina-orange), #C54605);');

fs.writeFileSync('index.html', content);
