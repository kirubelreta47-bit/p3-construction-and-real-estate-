const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  const rootDir = path.resolve(__dirname, '..');
  
  // 1. Process Hero Image to WebP (under 200KB)
  const heroSrc = path.join(rootDir, 'src/assets/hero-bg.jpg');
  const heroDestAsset = path.join(rootDir, 'src/assets/hero-bg.webp');
  const heroDestPublic = path.join(rootDir, 'public/hero-bg.webp');

  if (fs.existsSync(heroSrc)) {
    const heroBuffer = await sharp(heroSrc)
      .webp({ quality: 82, effort: 6 })
      .toBuffer();
    
    fs.writeFileSync(heroDestAsset, heroBuffer);
    fs.writeFileSync(heroDestPublic, heroBuffer);
    console.log(`Hero WebP generated: ${heroBuffer.length} bytes (${(heroBuffer.length / 1024).toFixed(1)} KB) - Target: < 200KB`);
  }

  // 2. Generate 1200x630 OG Image (strictly under 100KB)
  const ogSrc = path.join(rootDir, 'public/og-image.jpg');
  if (fs.existsSync(ogSrc)) {
    const inputBuffer = fs.readFileSync(ogSrc);
    const ogBuffer = await sharp(inputBuffer)
      .resize(1200, 630, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 58, mozjpeg: true })
      .toBuffer();
    
    fs.writeFileSync(path.join(rootDir, 'public/og-image.jpg'), ogBuffer);
    console.log(`OG Image 1200x630 generated: ${ogBuffer.length} bytes (${(ogBuffer.length / 1024).toFixed(1)} KB) - Target: < 100KB`);

    // Also generate WebP version
    const ogWebp = await sharp(inputBuffer)
      .resize(1200, 630, { fit: 'cover', position: 'center' })
      .webp({ quality: 62, effort: 6 })
      .toBuffer();
    fs.writeFileSync(path.join(rootDir, 'public/og-image.webp'), ogWebp);
    console.log(`OG WebP 1200x630 generated: ${ogWebp.length} bytes (${(ogWebp.length / 1024).toFixed(1)} KB) - Target: < 100KB`);
  }

  // 3. Generate Apple Touch Icon 180x180 PNG (< 100KB)
  const iconSrc = path.join(rootDir, 'public/apple-touch-icon.png');
  if (fs.existsSync(iconSrc)) {
    const inputIconBuffer = fs.readFileSync(iconSrc);
    const iconBuffer = await sharp(inputIconBuffer)
      .resize(180, 180, { fit: 'cover' })
      .png({ compressionLevel: 9 })
      .toBuffer();
    
    fs.writeFileSync(path.join(rootDir, 'public/apple-touch-icon.png'), iconBuffer);
    console.log(`Apple Touch Icon 180x180 generated: ${iconBuffer.length} bytes (${(iconBuffer.length / 1024).toFixed(1)} KB) - Target: < 100KB`);

    // 4. Generate 32x32 Favicon PNG / ICO fallback
    const favBuffer = await sharp(inputIconBuffer)
      .resize(32, 32)
      .png()
      .toBuffer();
    fs.writeFileSync(path.join(rootDir, 'public/favicon.png'), favBuffer);
    fs.writeFileSync(path.join(rootDir, 'public/favicon.ico'), favBuffer);
    console.log('Favicon 32x32 generated');
  }
}

run().catch(err => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
