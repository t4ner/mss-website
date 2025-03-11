import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import blogRoutes from "./routes/blogRoutes.js";
import BlogPost from "./models/blogModel.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "mss-website",
    allowed_formats: ["jpg", "jpeg", "png", "gif"],
  },
});

const upload = multer({ storage: storage });

// Routes
app.use("/api/blogs", blogRoutes);

// Image upload endpoint
app.post("/api/upload", upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    res.status(200).json({ imageUrl: req.file.path });
  } catch (error) {
    res.status(500).json({ message: "Error uploading image", error });
  }
});

// Helper function to generate a slug from a title
const generateSlug = async (title) => {
  // Convert to lowercase, replace spaces with hyphens, remove special characters
  let slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

  // Check if slug already exists
  const existingPost = await BlogPost.findOne({ slug });

  // If slug exists, append a unique identifier (timestamp)
  if (existingPost) {
    slug = `${slug}-${Date.now().toString().slice(-6)}`;
  }

  return slug;
};

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    // Migration: Add slugs to existing blog posts that don't have them
    const migrateExistingPosts = async () => {
      try {
        // Find all posts without a slug
        const postsWithoutSlug = await BlogPost.find({
          slug: { $exists: false },
        });

        if (postsWithoutSlug.length > 0) {
          console.log(
            `Found ${postsWithoutSlug.length} posts without slugs. Migrating...`
          );

          for (const post of postsWithoutSlug) {
            const slug = await generateSlug(post.title);
            await BlogPost.updateOne({ _id: post._id }, { $set: { slug } });
            console.log(`Added slug "${slug}" to post "${post.title}"`);
          }

          console.log("Migration completed successfully");
        } else {
          console.log("No posts found that need slug migration");
        }
      } catch (error) {
        console.error("Error during migration:", error);
      }
    };

    // Run the migration
    migrateExistingPosts();

    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

// Basic route
app.get("/", (req, res) => {
  res.send("MSS Website API is running");
});
