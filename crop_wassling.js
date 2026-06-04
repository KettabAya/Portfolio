import sharp from 'sharp';
import fs from 'fs';

const images = [
  'src/assets/wassling_1.jpg',
  'src/assets/wassling_2.jpg',
  'src/assets/wassling_3.jpg',
  'src/assets/wassling_4.jpg'
];

async function cropImages() {
  for (const imgPath of images) {
    const metadata = await sharp(imgPath).metadata();
    
    // Calculate crop dimensions. 
    // Usually status bars are ~40-100px top, and nav bars ~80-120px bottom.
    // Let's crop 50px from top and 100px from bottom, same as InnerSky.
    const topCrop = 90;
    const bottomCrop = 110;
    
    const cropWidth = metadata.width;
    const cropHeight = metadata.height - topCrop - bottomCrop;
    
    await sharp(imgPath)
      .extract({ left: 0, top: topCrop, width: cropWidth, height: cropHeight })
      .toFile(imgPath.replace('.jpg', '_cropped.jpg'));
      
    fs.renameSync(imgPath.replace('.jpg', '_cropped.jpg'), imgPath);
    console.log(`Cropped ${imgPath}`);
  }
}

cropImages().catch(console.error);
