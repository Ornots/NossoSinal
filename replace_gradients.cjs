const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(/background:\s*linear-gradient\(135deg,\s*#EB5B0D,\s*#059669\);/g, 'background: var(--primary);');
content = content.replace(/background:\s*linear-gradient\(135deg,\s*#EB5B0D,\s*#0[fF]766[eE]\);/g, 'background: var(--primary);');
content = content.replace(/background:\s*linear-gradient\(135deg,\s*#1e293b,\s*#0[fF]766[eE]\);/g, 'background: var(--primary);');

// The articles have hero gradients like linear-gradient(120deg, #EB5B0D, #0F766E). 
// The user says "no geral ta espaplhado pelo site", "no caso eu me refiro a esse que vai do laranja pro verde".
content = content.replace(/background:\s*linear-gradient\([^,]+,\s*#EB5B0D,\s*#0[fF]766[eE]\)/g, 'background: linear-gradient(120deg, var(--primary), var(--primary-light))');
content = content.replace(/background:\s*linear-gradient\([^,]+,\s*#14B8A6,\s*#0[fF]766[eE]\)/g, 'background: linear-gradient(120deg, var(--primary-light), var(--primary))');

// One more check in bento-abcde areas:
content = content.replace(/color:\s*#EB5B0D;/g, 'color: var(--sina-orange);');

fs.writeFileSync('index.html', content);
