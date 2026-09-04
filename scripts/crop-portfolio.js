const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputDir = path.join(__dirname, '../public/portfolio');
const outputDir = path.join(__dirname, '../public/portfolio/crops');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const images = [
  {
    file: 'novastep-brand-kit.png',
    name: 'novastep',
    crops: [
      { name: 'novastep-logo', top: 0, left: 0, width: 0.5, height: 0.35 },
      { name: 'novastep-typography', top: 0, left: 0.5, width: 0.5, height: 0.35 },
      { name: 'novastep-palette', top: 0.35, left: 0, width: 0.5, height: 0.35 },
      { name: 'novastep-ad', top: 0, left: 0.5, width: 0.5, height: 0.5 },
      { name: 'novastep-packaging', top: 0.5, left: 0, width: 0.5, height: 0.5 },
      { name: 'novastep-mockups', top: 0.35, left: 0.5, width: 0.5, height: 0.65 },
    ],
  },
  {
    file: 'youtube-thumbnails.png',
    name: 'youtube',
    crops: [
      { name: 'yt-beast-mode', top: 0, left: 0, width: 0.5, height: 0.45 },
      { name: 'yt-spicy-burger', top: 0, left: 0.5, width: 0.5, height: 0.45 },
      { name: 'yt-summer-haul', top: 0.3, left: 0, width: 0.5, height: 0.4 },
      { name: 'yt-win-or-die', top: 0.45, left: 0.5, width: 0.5, height: 0.55 },
      { name: 'yt-grow-channel', top: 0.6, left: 0, width: 0.5, height: 0.4 },
    ],
  },
  {
    file: 'logo-collection.png',
    name: 'logos',
    crops: [
      { name: 'logo-aura-royale', top: 0, left: 0, width: 0.5, height: 0.35 },
      { name: 'logo-belora', top: 0, left: 0.5, width: 0.5, height: 0.35 },
      { name: 'logo-royaluxe', top: 0.33, left: 0, width: 0.5, height: 0.34 },
      { name: 'logo-pizzaio', top: 0.33, left: 0.5, width: 0.5, height: 0.34 },
      { name: 'logo-altivia', top: 0.65, left: 0, width: 0.5, height: 0.35 },
      { name: 'logo-natura', top: 0.65, left: 0.5, width: 0.5, height: 0.35 },
    ],
  },
  {
    file: 'noor-sweets-brand-kit.png',
    name: 'noor',
    crops: [
      { name: 'noor-overview', top: 0, left: 0, width: 0.5, height: 0.4 },
      { name: 'noor-logo-close', top: 0, left: 0.5, width: 0.5, height: 0.4 },
      { name: 'noor-bags', top: 0.35, left: 0, width: 0.35, height: 0.35 },
      { name: 'noor-apron', top: 0.35, left: 0.35, width: 0.35, height: 0.35 },
      { name: 'noor-box', top: 0.35, left: 0.65, width: 0.35, height: 0.35 },
      { name: 'noor-social', top: 0.65, left: 0, width: 0.5, height: 0.35 },
    ],
  },
  {
    file: 'before-after-redesigns.png',
    name: 'before-after',
    crops: [
      { name: 'ba-coffee', top: 0, left: 0, width: 0.5, height: 0.35 },
      { name: 'ba-shoes', top: 0, left: 0.5, width: 0.5, height: 0.35 },
      { name: 'ba-food', top: 0.32, left: 0, width: 0.5, height: 0.36 },
      { name: 'ba-perfume', top: 0.32, left: 0.5, width: 0.5, height: 0.36 },
      { name: 'ba-milkshake', top: 0.65, left: 0, width: 0.5, height: 0.35 },
      { name: 'ba-tea', top: 0.65, left: 0.5, width: 0.5, height: 0.35 },
    ],
  },
  {
    file: 'product-ads.png',
    name: 'ads',
    crops: [
      { name: 'ad-iphone', top: 0, left: 0, width: 0.34, height: 0.5 },
      { name: 'ad-lambo', top: 0, left: 0.33, width: 0.34, height: 0.5 },
      { name: 'ad-toyota', top: 0, left: 0.66, width: 0.34, height: 0.5 },
      { name: 'ad-mcdonalds', top: 0.45, left: 0.2, width: 0.6, height: 0.55 },
      { name: 'ad-nike', top: 0.5, left: 0, width: 0.34, height: 0.5 },
      { name: 'ad-dior-rolex', top: 0.5, left: 0.66, width: 0.34, height: 0.5 },
    ],
  },
  {
    file: 'social-media-grid.png',
    name: 'social',
    crops: [
      { name: 'social-rayban', top: 0, left: 0, width: 0.34, height: 0.35 },
      { name: 'social-mccafe', top: 0, left: 0.33, width: 0.34, height: 0.35 },
      { name: 'social-apple', top: 0, left: 0.66, width: 0.34, height: 0.35 },
      { name: 'social-cocacola', top: 0.33, left: 0, width: 0.34, height: 0.34 },
      { name: 'social-lv', top: 0.33, left: 0.66, width: 0.34, height: 0.34 },
      { name: 'social-oreo', top: 0.55, left: 0.2, width: 0.6, height: 0.45 },
    ],
  },
  {
    file: 'food-menus.png',
    name: 'food',
    crops: [
      { name: 'food-pizza', top: 0, left: 0, width: 0.34, height: 0.4 },
      { name: 'food-chicken', top: 0, left: 0.33, width: 0.34, height: 0.4 },
      { name: 'food-catering', top: 0, left: 0.66, width: 0.34, height: 0.4 },
      { name: 'food-menu', top: 0.35, left: 0, width: 0.5, height: 0.35 },
      { name: 'food-shawarma', top: 0.5, left: 0.3, width: 0.4, height: 0.5 },
      { name: 'food-yogurt', top: 0.65, left: 0.6, width: 0.4, height: 0.35 },
    ],
  },
  {
    file: 'client-testimonials.png',
    name: 'testimonials',
    crops: [
      { name: 'test-chat', top: 0, left: 0, width: 0.55, height: 0.6 },
      { name: 'test-quote', top: 0.35, left: 0.4, width: 0.6, height: 0.65 },
      { name: 'test-profile', top: 0, left: 0.5, width: 0.5, height: 0.4 },
    ],
  },
];

async function crop() {
  let count = 0;
  for (const img of images) {
    const inputPath = path.join(inputDir, img.file);
    if (!fs.existsSync(inputPath)) {
      console.log(`SKIP: ${img.file} not found`);
      continue;
    }
    const metadata = await sharp(inputPath).metadata();
    const w = metadata.width;
    const h = metadata.height;

    for (const c of img.crops) {
      const cropLeft = Math.round(c.left * w);
      const cropTop = Math.round(c.top * h);
      const cropWidth = Math.round(c.width * w);
      const cropHeight = Math.round(c.height * h);

      await sharp(inputPath)
        .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
        .resize(800, null, { withoutEnlargement: true })
        .png({ quality: 90 })
        .toFile(path.join(outputDir, `${c.name}.png`));

      count++;
      console.log(`✓ ${c.name}.png (${cropWidth}x${cropHeight})`);
    }
  }
  console.log(`\nDone — ${count} crops created`);
}

crop().catch(console.error);