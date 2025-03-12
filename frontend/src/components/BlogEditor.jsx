import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

// Initialize a markdown parser
const mdParser = new MarkdownIt();

const BlogEditor = ({ post, onSuccess, onCancel }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [coverImage, setCoverImage] = useState("");
  const [uploadingCover, setUploadingCover] = useState(false);
  const fileInputRef = useRef(null);
  const coverInputRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setSlug(post.slug || "");
      setContent(post.content);
      setCoverImage(post.coverImage || "");
    }
  }, [post]);

  // Başlık değiştiğinde otomatik slug oluştur (kullanıcı manuel değiştirmediği sürece)
  const generateSlugFromTitle = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  };

  // Başlık değiştiğinde ve slug manuel değiştirilmediyse otomatik slug oluştur
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);

    // Eğer slug boşsa veya daha önce otomatik oluşturulmuşsa, yeni slug oluştur
    if (!slug || slug === generateSlugFromTitle(title)) {
      setSlug(generateSlugFromTitle(newTitle));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!slug.trim()) {
      setError("Slug alanı boş olamaz");
      setLoading(false);
      return;
    }

    try {
      const postData = {
        title,
        slug,
        content,
        published: true, // Always set published to true
        coverImage,
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
        setSlug("");
        setContent("");
        setCoverImage("");
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

      // Insert the image markdown at the end of the content
      const imageMarkdown = `![${file.name}](${response.data.imageUrl})`;

      // If editor is available, insert at cursor position
      if (editorRef.current) {
        editorRef.current.insertText(imageMarkdown);
      } else {
        // Otherwise append to the end
        setContent((prevContent) => prevContent + imageMarkdown);
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

  const handleCoverImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    setUploadingCover(true);

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

      setCoverImage(response.data.imageUrl);
      setUploadingCover(false);

      // Reset file input
      if (coverInputRef.current) {
        coverInputRef.current.value = "";
      }
    } catch (error) {
      setUploadingCover(false);
      setError("Failed to upload cover image. Please try again.");
      console.error("Cover image upload error:", error);
    }
  };

  const handleAddImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleAddCoverImage = () => {
    if (coverInputRef.current) {
      coverInputRef.current.click();
    }
  };

  // Handle editor change
  const handleEditorChange = ({ text }) => {
    setContent(text);
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
              onChange={handleTitleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="slug"
              className="block text-gray-700 font-medium mb-2"
            >
              Slug (URL)
            </label>
            <input
              type="text"
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
             
            />
            <p className="mt-1 text-sm text-gray-500">
              This field will be used in the blog post URL. Do not use spaces or
              special characters.
            </p>
          </div>

          <div className="mb-4">
            <label
              htmlFor="coverImage"
              className="block text-gray-700 font-medium mb-2"
            >
              Cover Image
            </label>
            <div className="flex items-center space-x-4 mb-2">
              <button
                type="button"
                onClick={handleAddCoverImage}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
                disabled={uploadingCover}
              >
                {uploadingCover ? "Uploading..." : "Upload Cover Image"}
              </button>
              <input
                type="file"
                ref={coverInputRef}
                onChange={handleCoverImageUpload}
                accept="image/*"
                className="hidden"
              />
              {coverImage && (
                <span className="text-sm text-green-600">
                  Cover image uploaded successfully
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1 mb-2">
              The ideal cover image size is <strong>1200 x 800 pixels</strong>{" "}
              (3:2 ratio). High quality, landscape images work best.
            </p>
            {coverImage && (
              <div className="mt-2 mb-4">
                <img
                  src={coverImage}
                  alt="Cover Preview"
                  className="max-h-40 rounded border border-gray-300"
                />
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 font-medium mb-2"
            >
              Content
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
            <div className="markdown-editor-container">
              <MdEditor
                ref={editorRef}
                value={content}
                style={{ height: "400px" }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
                view={{ menu: true, md: true, html: true }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              You can format your content using the toolbar above. Add images
              using the image button or the "Add Image" button.
            </p>
          </div>

          <div className="flex justify-end space-x-4">
            {post && (
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Saving..." : post ? "Update Post" : "Create Post"}
            </button>
          </div>
        </form>
      ) : (
        <div className="preview-container">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          {coverImage && (
            <div className="mb-6">
              <img
                src={coverImage}
                alt="Cover"
                className="w-full max-h-80 object-cover rounded-lg"
              />
            </div>
          )}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: mdParser.render(content) }}
          />
        </div>
      )}
    </div>
  );
};

export default BlogEditor;
