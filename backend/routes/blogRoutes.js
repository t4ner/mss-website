import express from "express";
import BlogPost from "../models/blogModel.js";
import { marked } from "marked";

const router = express.Router();

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

// Helper function to validate and ensure slug uniqueness
const validateAndEnsureUniqueSlug = async (slug, postId = null) => {
  // Normalize slug
  let normalizedSlug = slug
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

  // Check if slug already exists (excluding the current post if updating)
  let query = { slug: normalizedSlug };
  if (postId) {
    query._id = { $ne: postId }; // Exclude current post when checking
  }

  const existingPost = await BlogPost.findOne(query);

  // If slug exists, append a unique identifier (timestamp)
  if (existingPost) {
    normalizedSlug = `${normalizedSlug}-${Date.now().toString().slice(-6)}`;
  }

  return normalizedSlug;
};

// Get all published blog posts
router.get("/", async (req, res) => {
  try {
    const blogPosts = await BlogPost.find({ published: true }).sort({
      createdAt: -1,
    });
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Get all blog posts (including unpublished) for admin
router.get("/admin", async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().sort({ createdAt: -1 });
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Get a single blog post by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await BlogPost.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Get a single blog post by slug
router.get("/slug/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await BlogPost.findOne({ slug });

    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Create a new blog post
router.post("/", async (req, res) => {
  try {
    const { title, content, coverImage, slug: providedSlug } = req.body;

    // Use provided slug or generate one from title
    let slug;
    if (providedSlug) {
      slug = await validateAndEnsureUniqueSlug(providedSlug);
    } else {
      slug = await generateSlug(title);
    }

    // Parse markdown to HTML for storage
    const htmlContent = marked(content);

    const newPost = new BlogPost({
      title,
      slug,
      content: content, // Store original markdown
      coverImage: coverImage || "",
      tags: [], // Always set empty tags array
      published: true, // Always publish posts
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

// Update a blog post
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, coverImage, slug: providedSlug } = req.body;

    // Get the existing post
    const existingPost = await BlogPost.findById(id);
    if (!existingPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Handle slug update
    let slug = existingPost.slug;
    if (providedSlug && providedSlug !== existingPost.slug) {
      slug = await validateAndEnsureUniqueSlug(providedSlug, id);
    } else if (title && title !== existingPost.title && !providedSlug) {
      // If title changed but slug not provided, generate new slug
      slug = await generateSlug(title);
    }

    // Parse markdown to HTML if content is updated
    const updatedData = {
      ...(title && { title }),
      ...(slug !== existingPost.slug && { slug }),
      ...(content && { content }),
      ...(coverImage !== undefined && { coverImage }),
      published: true, // Always ensure posts are published
      updatedAt: new Date(),
    };

    const updatedPost = await BlogPost.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a blog post
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Delete request received for ID:", id);

    // Validate if id is a valid MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      console.error("Invalid MongoDB ObjectId format:", id);
      return res.status(400).json({ message: "Invalid ID format" });
    }

    // Check if the post exists before attempting to delete
    const post = await BlogPost.findById(id);
    if (!post) {
      console.error("Post not found with ID:", id);
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Delete the post
    const result = await BlogPost.findByIdAndRemove(id);
    console.log("Delete result:", result);

    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Delete a blog post by title
router.delete("/title/:title", async (req, res) => {
  try {
    const { title } = req.params;
    console.log("Delete request received for title:", title);

    if (!title) {
      console.error("No title provided");
      return res.status(400).json({ message: "No title provided" });
    }

    // Check if the post exists before attempting to delete
    const post = await BlogPost.findOne({ title: title });
    if (!post) {
      console.error("Post not found with title:", title);
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Delete the post
    const result = await BlogPost.findOneAndDelete({ title: title });
    console.log("Delete result:", result);

    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error.message);
    res.status(400).json({ message: error.message });
  }
});

export default router;
