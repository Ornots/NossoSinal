const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// 1. Rename vars and classes mentioning purple
content = content.replace(/--sina-purple/g, '--sina-orange');
content = content.replace(/sina-purple/g, 'sina-orange');

// 2. Replace HEX colors
content = content.replace(/#8B5CF6/gi, '#EB5B0D');
content = content.replace(/#7C3AED/gi, '#EB5B0D');
content = content.replace(/#A78BFA/gi, '#F38446');
content = content.replace(/#6D28D9/gi, '#C54605');

// 3. Replace RGB values
content = content.replace(/139,\s*92,\s*246/g, '235, 91, 13');
content = content.replace(/124,\s*58,\s*237/g, '235, 91, 13');
content = content.replace(/109,\s*40,\s*217/g, '197, 70, 5');

// 4. Update the background
content = content.replace('<!-- Background Decorativo -->', `<!-- Background Decorativo -->\n  <div class="ethereal-halo"></div>`);

content = content.replace('</style>', `
    .ethereal-halo {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 150vw;
      height: 150vw;
      margin-top: -75vw;
      margin-left: -75vw;
      background: conic-gradient(from 0deg, rgba(13, 148, 136, 0.05) 0%, rgba(235, 91, 13, 0.05) 50%, rgba(13, 148, 136, 0.05) 100%);
      border-radius: 50%;
      filter: blur(100px);
      z-index: 0;
      pointer-events: none;
      animation: rotateHalo 30s linear infinite;
    }
    
    @keyframes rotateHalo {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>`);

fs.writeFileSync('index.html', content);
