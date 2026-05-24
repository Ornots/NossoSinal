const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 3. Fix Report Button Background
content = content.replace(
  /\.report-btn\s*\{\s*background:\s*#F97330;/g,
  '.report-btn {\n          background: var(--primary);'
);
content = content.replace(
  /box-shadow:\s*0\s*10px\s*25px\s*rgba\(235,\s*91,\s*13,\s*0\.4\);\s*background:\s*#F97330;/g,
  'box-shadow: 0 10px 25px rgba(20, 184, 166, 0.4); background: var(--primary);'
);

fs.writeFileSync('index.html', content);
