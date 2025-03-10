import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { marked } from "marked";

const BlogEditor = ({ post, onSuccess, onCancel }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setTags(post.tags.join(", "));
      setPublished(post.published);
    }
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const postData = {
        title,
        content,
        tags,
        published,
      };

      let response;

      if (post) {
        // Update existing post
        response = await axios.patch(
          `http://localhost:5001/api/blogs/${post._id}`,
          postData
        );
      } else {
        // Create new post
        response = await axios.post(
          "http://localhost:5001/api/blogs",
          postData
        );
      }

      setLoading(false);

      if (onSuccess) {
        onSuccess(response.data);
      }

      if (!post) {
        // Clear form after creating a new post
        setTitle("");
        setContent("");
        setTags("");
        setPublished(false);
      }
    } catch (error) {
      setLoading(false);
      setError(
        error.response?.data?.message ||
          "An error occurred while saving the post"
      );
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    setUploadingImage(true);

    try {
      const response = await axios.post(
        "http://localhost:5001/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Insert the image markdown at cursor position or at the end
      const imageMarkdown = `\n![${file.name}](${response.data.imageUrl})\n`;

      // Insert at cursor position if possible
      const textarea = document.getElementById("content");
      if (textarea.selectionStart || textarea.selectionStart === 0) {
        const startPos = textarea.selectionStart;
        const endPos = textarea.selectionEnd;

        const newContent =
          content.substring(0, startPos) +
          imageMarkdown +
          content.substring(endPos, content.length);

        setContent(newContent);
      } else {
        // Otherwise append to the end
        setContent(content + imageMarkdown);
      }

      setUploadingImage(false);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      setUploadingImage(false);
      setError("Failed to upload image. Please try again.");
      console.error("Image upload error:", error);
    }
  };

  const handleAddImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">
        {post ? "Edit Blog Post" : "Create New Blog Post"}
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <button
            type="button"
            className={`px-4 py-2 rounded ${
              !preview ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setPreview(false)}
          >
            Edit
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded ${
              preview ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setPreview(true)}
          >
            Preview
          </button>
        </div>
      </div>

      {!preview ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 font-medium mb-2"
            >
              Content (Markdown)
            </label>
            <div className="mb-2">
              <button
                type="button"
                onClick={handleAddImage}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
                disabled={uploadingImage}
              >
                {uploadingImage ? "Uploading..." : "Add Image"}
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
              rows="15"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              You can use Markdown syntax for formatting. Add images using the
              "Add Image" button.
            </p>
          </div>

          <div className="mb-4">
            <label
              htmlFor="tags"
              className="block text-gray-700 font-medium mb-2"
            >
              Tags
            </label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Separate tags with commas"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">Publish immediately</span>
            </label>
          </div>

          <div className="flex justify-end space-x-4">
            {post && (
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                disabled={loading}
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? "Saving..." : post ? "Update Post" : "Create Post"}
            </button>
          </div>
        </form>
      ) : (
        <div className="border rounded-md p-4">
          <h1 className="text-2xl font-bold mb-4">
            {title || "Untitled Post"}
          </h1>

          {tags && (
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.split(",").map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}

          <div className="prose max-w-none">
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
            ) : (
              <p className="text-gray-500 italic">No content to preview</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogEditor;
