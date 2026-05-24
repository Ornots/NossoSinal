const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(
  'max-width: 420px; aspect-ratio: 4/3; background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius: 24px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05); border: 1px solid rgba(255, 255, 255, 0.5);',
  'max-width: 420px; aspect-ratio: 4/3; background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius: 24px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05); border: 2px dashed var(--primary-light);'
);

fs.writeFileSync('index.html', content);
