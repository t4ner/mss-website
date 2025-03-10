import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
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
    default: false,
  },
});

const BlogPost = mongoose.model("BlogPost", blogSchema);

export default BlogPost;
