//in this file we will configure cloudinary and upload local files to cloudinary

import { v2 as cloudinary } from "cloudinary";

const Upload = async (filePath) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.MY_CLOUD_API_KEY,
    api_secret: process.env.MY_CLOUD_API_SECRET,
  });
  try {
    if (!filePath) return null;

    console.log("Uploading file to Cloudinary:", filePath);

    // Use upload_large for all files passing through this flow, as requested by 'production-grade' logic.
    // We enforce resource_type: "raw" to avoid 'image' limits and processing issues for PDFs.
    
    const options = {
       resource_type: "raw",
    };

    console.log("Starting upload_large with resource_type: raw");
    const result = await cloudinary.uploader.upload_large(filePath, options);

    const fileUrl = result.secure_url || result.url;

    if (!fileUrl) {
      throw new Error("Cloudinary upload succeeded but URL missing");
    }

    console.log("File uploaded successfully:", fileUrl);
    
    // Cleanup: Delete local file after upload
    try {
      if (typeof fs === 'undefined') {
        const fs = await import('fs');
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      }
    } catch (cleanupErr) {
      console.error("Error deleting local file:", cleanupErr);
    }

    return fileUrl;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    // Cleanup on error
    try {
       const fs = await import('fs');
       if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    } catch(e) {}
    
    throw error; // Re-throw so controller catches it
  }
};

export { Upload };
