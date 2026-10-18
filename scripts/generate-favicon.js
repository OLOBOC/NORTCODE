const fs = require('fs');
const path = require('path');

const svgRawPath = path.join(__dirname, '..', 'public', 'logo.svg');
const faviconPath = path.join(__dirname, '..', 'public', 'favicon.svg');

if (fs.existsSync(svgRawPath)) {
  const raw = fs.readFileSync(svgRawPath, 'utf8');
  // strip outer svg tag
  const match = raw.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  const innerPaths = match ? match[1] : '';

  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none">
  <rect width="256" height="256" rx="56" fill="#08090A"/>
  <rect x="2" y="2" width="252" height="252" rx="54" stroke="#202530" stroke-width="4"/>
  <g transform="translate(22.5, 17.5)" fill="#00F0FF">
    ${innerPaths}
  </g>
</svg>
`;
  fs.writeFileSync(faviconPath, faviconSvg, 'utf8');
  console.log('Successfully written official favicon.svg');
} else {
  console.log('logo.svg does not exist yet');
}
