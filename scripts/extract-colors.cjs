const { createCanvas, loadImage } = require('canvas');

async function main() {
  const image = await loadImage('public/split_frames/frame_000_delay-0.05s.webp');
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
  
  // Sample pixels in a grid
  const data = ctx.getImageData(0, 0, image.width, image.height).data;
  const colors = new Map();
  
  for (let y = 0; y < image.height; y += 20) {
    for (let x = 0; x < image.width; x += 20) {
      const i = (y * image.width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      // Quantize to reduce noise
      const key = `${Math.round(r/20)*20},${Math.round(g/20)*20},${Math.round(b/20)*20}`;
      colors.set(key, (colors.get(key) || 0) + 1);
    }
  }
  
  // Sort by frequency
  const sorted = [...colors.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([key]) => {
      const [r, g, b] = key.split(',').map(Number);
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    });
  
  console.log('Top 10 colors:');
  sorted.forEach(c => console.log(c));
}

main().catch(console.error);