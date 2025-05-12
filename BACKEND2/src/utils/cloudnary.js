import { v2 as cloudnary } from 'cloudinary';
import { error } from 'console';
import fs from 'fs';

const uplodeOnCloudnary = async localFile => {
  if (!localFile) return;
  const response = await cloudnary.uploader
    .upload(localFile, { resource_type: 'auto' })
    .catch(error => {
      fs.unlinkSync(localFile);
      console.log(error);
    });
  console.log(response.url);
  return response;
};

export { uplodeOnCloudnary };
