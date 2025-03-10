import express from "express";
import BlogPost from "../models/blogModel.js";
import { marked } from "marked";

const router = express.Router();

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

// Create a new blog post
router.post("/", async (req, res) => {
  try {
    const { title, content, tags, published } = req.body;

    // Parse markdown to HTML for storage
    const htmlContent = marked(content);

    const newPost = new BlogPost({
      title,
      content: content, // Store original markdown
      tags: tags?.split(",").map((tag) => tag.trim()) || [],
      published: published || false,
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
    const { title, content, tags, published } = req.body;

    // Parse markdown to HTML if content is updated
    const updatedData = {
      ...(title && { title }),
      ...(content && { content }),
      ...(tags && { tags: tags.split(",").map((tag) => tag.trim()) }),
      ...(published !== undefined && { published }),
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
    await BlogPost.findByIdAndRemove(id);
    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
