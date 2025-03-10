import cloudinary from "../config/cloudinary.js";
import { Readable } from "stream";

// Helper function to convert buffer to stream
const bufferToStream = (buffer) => {
  const readable = new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });
  return readable;
};

// Controller for handling image uploads with Cloudinary
export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Create a promise to handle the Cloudinary upload
    const cloudinaryUpload = new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "mss-blog",
          resource_type: "image",
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      // Convert buffer to stream and pipe to Cloudinary
      bufferToStream(req.file.buffer).pipe(stream);
    });

    // Wait for the upload to complete
    const result = await cloudinaryUpload;

    // Return the Cloudinary URL
    res.status(200).json({
      message: "Image uploaded successfully",
      imageUrl: result.secure_url,
    });
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    res.status(500).json({
      message: "Error uploading image",
      error: error.message,
    });
  }
};
