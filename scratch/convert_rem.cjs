const fs = require('fs');
let css = fs.readFileSync('src/styles/global.css', 'utf-8');
css = css.replace(/font-size:\s*(\d+(?:\.\d+)?)px;/g, (m, val) => {
  const rem = parseFloat(val) / 16;
  return `font-size: ${rem}rem; /* ${val}px */`;
});
fs.writeFileSync('src/styles/global.css', css);
console.log('Done');
