const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Rename vars and classes
content = content.replace(/--sina-orange/g, '--sina-green');
content = content.replace(/sina-orange/g, 'sina-green');

// 2. Replace HEX colors (from Orange back to Teal/Green tones)
content = content.replace(/#EB5B0D/gi, '#0D9488'); // Teal 600
content = content.replace(/#F38446/gi, '#14B8A6'); // Teal 500
content = content.replace(/#C54605/gi, '#0F766E'); // Teal 700

// 3. Replace RGB values
// 235, 91, 13 -> 13, 148, 136 (rgb for #0D9488)
content = content.replace(/235,\s*91,\s*13/g, '13, 148, 136');
// 197, 70, 5 -> 15, 118, 110 (rgb for #0F766E)
content = content.replace(/197,\s*70,\s*5/g, '15, 118, 110');

fs.writeFileSync('index.html', content);
