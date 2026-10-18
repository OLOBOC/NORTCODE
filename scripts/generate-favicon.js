const fs = require('fs');
const path = require('path');

const whitePngPath = path.join(__dirname, '..', 'public', 'logo-white.png');
const darkPngPath = path.join(__dirname, '..', 'public', 'logo-dark.png');
const faviconPath = path.join(__dirname, '..', 'public', 'favicon.svg');
const logoSvgPath = path.join(__dirname, '..', 'public', 'logo.svg');

if (fs.existsSync(whitePngPath)) {
  const whiteBase64 = fs.readFileSync(whitePngPath).toString('base64');
  const darkBase64 = fs.existsSync(darkPngPath) ? fs.readFileSync(darkPngPath).toString('base64') : whiteBase64;

  // Favicon: Dark rounded badge with clean white logo centered
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <rect width="256" height="256" rx="56" fill="#08090A"/>
  <rect x="2" y="2" width="252" height="252" rx="54" stroke="#202530" stroke-width="4" fill="none"/>
  <image href="data:image/png;base64,${whiteBase64}" x="36" y="36" width="184" height="184"/>
</svg>
`;

  // Logo SVG: Clean transparent SVG embedding the official white mark
  const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <image href="data:image/png;base64,${whiteBase64}" x="0" y="0" width="256" height="256"/>
</svg>
`;

  fs.writeFileSync(faviconPath, faviconSvg, 'utf8');
  fs.writeFileSync(logoSvgPath, logoSvg, 'utf8');
  console.log('Successfully generated valid favicon.svg and logo.svg');
} else {
  console.error('logo-white.png not found');
}
