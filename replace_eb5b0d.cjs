const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// The only gradients we want are for Sina (if at all), but user said 
// "esses gradientes que tem no botao de triagem e nas letras no abcde que no geral ta espaplhado pelo site retire ele por favor no caso eu me refiro a esse que vai do laranja pro verde".

// Make sure that everywhere we had #EB5B0D it becomes #F97330 (which is the new Sina orange)
content = content.replace(/#EB5B0D/gi, '#F97330');

// Make sure other gradients that are orange to purple be replaced with standard primary
content = content.replace(/background:\s*linear-gradient\([^,]+,\s*#[a-zA-Z0-9]+,\s*#4C1D95\)/ig, 'background: linear-gradient(120deg, var(--primary), var(--primary-light))');

fs.writeFileSync('index.html', content);
