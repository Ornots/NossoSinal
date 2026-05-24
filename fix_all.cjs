const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Fix .split-right (remove the background and border so only the inner div shows)
content = content.replace(
  /\.split-right\s*\{\s*flex:\s*1;\s*width:\s*100%;\s*aspect-ratio:\s*4\/3;\s*max-height:\s*480px;\s*background:\s*rgba\(255,\s*255,\s*255,\s*0\.5\);\s*backdrop-filter:\s*var\(--glass-blur\);\s*border-radius:\s*var\(--radius-lg\);\s*border:\s*2px\s*dashed\s*var\(--primary-light\);/g,
  '.split-right {\n      flex: 1;\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: relative;\n'
);

// 2. Fix inner div of Análise Dermatológica so the dashed line forms correctly.
// Currently it doesn't have dashed line. Actually, the user wants the dashed line. I will add the dashed line to the inner div!
content = content.replace(
  /border:\s*1px\s*solid\s*rgba\(255,\s*255,\s*255,\s*0\.5\);/,
  'border: 2px dashed var(--primary-light);'
);

// 3. Fix Report Button Background
content = content.replace(
  /\.report-btn\s*\{\s*background:\s*#EB5B0D;/g,
  '.report-btn {\n          background: var(--primary);'
);
content = content.replace(
  /box-shadow:\s*0\s*10px\s*25px\s*rgba\(235,\s*91,\s*13,\s*0\.4\);\s*background:\s*#EB5B0D;/g,
  'box-shadow: 0 10px 25px rgba(20, 184, 166, 0.4); background: var(--primary);'
);
content = content.replace(
  /box-shadow:\s*0\s*15px\s*40px\s*rgba\(235,\s*91,\s*13,\s*0\.1\);\s*color:\s*#0f172a;\s*border:\s*2px\s*solid\s*#EB5B0D;/g,
  'box-shadow: 0 15px 40px rgba(15, 118, 110, 0.1); color: #0f172a; border: 2px solid var(--primary-light);'
);

// 4. Mark important parts visibly
const strongCSS = `
    .article-body strong {
      color: var(--primary);
      font-weight: 800;
      background: rgba(18, 146, 134, 0.1);
      padding: 0px 6px;
      border-radius: 6px;
      border-bottom: 2px solid var(--primary-light);
    }
`;
if (!content.includes('.article-body strong')) {
  // Inject before Article styles
  content = content.replace(/\/\* Artigos Internos \*\//, `/* Artigos Internos */\n${strongCSS}`);
}

// 5. Alternate Colors in bancoDeArtigos
const colorPalette = [
  '#0F766E', // dark primary
  '#F97330', // Sina orange
  '#1D4ED8', // blue
  '#059669', // emerald
  '#854D0E', // brown
  '#BE185D', // pink-dark
  '#4338CA', // indigo
];
const articlesRe = /const\s+bancoDeArtigos\s*=\s*\[([\s\S]*?)\];/;
const match = content.match(articlesRe);
if (match) {
  let lines = match[1].split('\n');
  let validIndex = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('cor:')) {
      const cor = colorPalette[validIndex % colorPalette.length];
      lines[i] = lines[i].replace(/cor:\s*'[^']+'/, `cor: '${cor}'`);
      validIndex++;
    }
  }
  content = content.replace(articlesRe, `const bancoDeArtigos = [${lines.join('\n')}];`);
}

fs.writeFileSync('index.html', content);
