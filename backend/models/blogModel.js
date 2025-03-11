import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    default: "",
  },
  author: {
    type: String,
    default: "Admin",
  },
  tags: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  published: {
    type: Boolean,
    default: true,
  },
});

const BlogPost = mongoose.model("BlogPost", blogSchema);

export default BlogPost;
