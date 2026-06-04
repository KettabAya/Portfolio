import sharp from 'sharp';
import fs from 'fs';

const images = [
  'src/assets/innersky_1.jpg',
  'src/assets/innersky_2.jpg',
  'src/assets/innersky_3.jpg',
  'src/assets/innersky_4.jpg'
];

async function cropImages() {
  for (const imgPath of images) {
    if (!fs.existsSync(imgPath)) continue;
    
    const metadata = await sharp(imgPath).metadata();
    const { width, height } = metadata;
    
    // Estimate standard Android status bar and nav bar heights
    // Roughly 4.5% of height for top, 6% for bottom on typical screenshots
    const topCrop = Math.floor(height * 0.045);
    const bottomCrop = Math.floor(height * 0.065);
    
    const newHeight = height - topCrop - bottomCrop;
    
    await sharp(imgPath)
      .extract({ left: 0, top: topCrop, width: width, height: newHeight })
      .toFile(imgPath.replace('.jpg', '_cropped.jpg'));
      
    // Replace original
    fs.renameSync(imgPath.replace('.jpg', '_cropped.jpg'), imgPath);
    console.log(`Cropped ${imgPath}`);
  }
}

cropImages().catch(console.error);
