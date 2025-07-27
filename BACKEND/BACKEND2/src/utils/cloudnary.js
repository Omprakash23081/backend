import { v2 as cloudnary } from 'cloudinary';
import fs from 'fs';

cloudnary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uplodeOnCloudnary = async localFilePath => {
  try {
    if (!localFilePath) return null;
    //uplode file on cloudnary
    const responce = await cloudnary.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });
    console.log('file is uplode sussefully', responce.url);
    return responce;
  } catch (errer) {
    fs.unlink(localFilePath);
    return null;
  }
};

export { uplodeOnCloudnary };
