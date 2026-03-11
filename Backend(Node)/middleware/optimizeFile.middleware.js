import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import os from "os";

const MAX_SIZE_MB = 10;

const optimizeFile = async (req, res, next) => {
  if (!req.file) return next();

  // Temp upload directory (Render-safe)
  const uploadDir = path.join(os.tmpdir(), "uploads");
  await fs.mkdir(uploadDir, { recursive: true });

  const originalName = req.file.originalname.replace(/\s+/g, "-");
  const baseName = path.basename(originalName, path.extname(originalName));

  let finalExt = path.extname(originalName);
  if (req.file.mimetype.startsWith("image/")) {
    finalExt = req.file.mimetype === "image/png" ? ".png" : ".jpg";
  }

  const filename = `${Date.now()}-${baseName}${finalExt}`;
  const outputPath = path.join(uploadDir, filename);
  
  console.log(`DEBUG: Processing file: ${originalName}, Size: ${(req.file.size / 1024 / 1024).toFixed(2)} MB`);

  try {
    /* ---------- IMAGE ---------- */
    if (req.file.mimetype.startsWith("image/")) {
      await sharp(req.file.buffer)
        .resize({ width: 1200, fit: "inside", withoutEnlargement: true })
        .toFormat(finalExt === ".png" ? "png" : "jpeg", {
          quality: 80,
          mozjpeg: true,
        })
        .toFile(outputPath);
    }
    /* ---------- OTHER FILES (PDF, ETC) ---------- */
    else {
      // No platform-dependent compression available.
      // Just write the buffer.
      await fs.writeFile(outputPath, req.file.buffer);
    }

    /* ---------- SIZE CHECK ---------- */
    const stats = await fs.stat(outputPath);
    const sizeMB = stats.size / (1024 * 1024);
    console.log(`DEBUG: Final file size: ${sizeMB.toFixed(2)} MB`);

    if (sizeMB > MAX_SIZE_MB) {
      console.log("DEBUG: File exceeds limit. Deleting...");
      await fs.unlink(outputPath);
      return res.status(400).json({
        message: `File size (${sizeMB.toFixed(2)} MB) exceeds the 10MB limit. Please compress it manually and try again.`,
      });
    }

    /* ---------- PREPARE FOR CLOUDINARY ---------- */
    req.file.path = outputPath;
    req.file.filename = filename;
    delete req.file.buffer;

    next();
  } catch (error) {
    console.error("Optimize file error:", error);
    return res.status(500).json({
      message: "Error processing uploaded file",
    });
  }
};

export default optimizeFile;
