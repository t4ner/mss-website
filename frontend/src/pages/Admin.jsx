import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BlogEditor from "../components/BlogEditor";
import BlogList from "../components/BlogList";

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("create");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5001/api/blogs/admin");
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch blog posts");
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const handleEditPost = (post) => {
    setSelectedPost(post);
    setActiveTab("edit");
  };

  const handleDeletePost = async (id, title) => {
    // If title is provided, use title-based deletion instead of ID-based
    if (title) {
      return handleDeletePostByTitle(title);
    }

    if (!id) {
      console.error("Delete error: No post ID provided");
      setError("Failed to delete post: No post ID provided");
      return;
    }

    // Check if ID is a valid MongoDB ObjectId (24 hex characters)
    const isValidObjectId = /^[0-9a-fA-F]{24}$/.test(id);
    if (!isValidObjectId) {
      console.error("Delete error: Invalid MongoDB ObjectId format", id);
      setError("Failed to delete post: Invalid ID format");
      return;
    }

    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        console.log("Deleting post with ID:", id);

        // Ensure the URL is correctly formatted
        const deleteUrl = `http://localhost:5001/api/blogs/${id}`;
        console.log("Delete URL:", deleteUrl);

        const response = await axios({
          method: "DELETE",
          url: deleteUrl,
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Delete response:", response);

        if (response.status === 200) {
          // Update the posts state to remove the deleted post
          setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
          setError(""); // Clear any previous errors
        } else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      } catch (error) {
        console.error("Delete error:", error);
        console.error("Error details:", {
          message: error.message,
          response: error.response
            ? {
                status: error.response.status,
                statusText: error.response.statusText,
                data: error.response.data,
              }
            : "No response data",
          request: error.request ? "Request exists" : "No request data",
        });
        setError(`Failed to delete post: ${error.message || "Unknown error"}`);
      }
    }
  };

  const handleDeletePostByTitle = async (title) => {
    if (!title) {
      console.error("Delete error: No post title provided");
      setError("Failed to delete post: No post title provided");
      return;
    }

    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        console.log("Deleting post with title:", title);

        // Ensure the URL is correctly formatted and encoded
        const encodedTitle = encodeURIComponent(title);
        const deleteUrl = `http://localhost:5001/api/blogs/title/${encodedTitle}`;
        console.log("Delete URL:", deleteUrl);

        const response = await axios({
          method: "DELETE",
          url: deleteUrl,
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Delete response:", response);

        if (response.status === 200) {
          // Update the posts state to remove the deleted post
          setPosts((prevPosts) =>
            prevPosts.filter((post) => post.title !== title)
          );
          setError(""); // Clear any previous errors
        } else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      } catch (error) {
        console.error("Delete error:", error);
        console.error("Error details:", {
          message: error.message,
          response: error.response
            ? {
                status: error.response.status,
                statusText: error.response.statusText,
                data: error.response.data,
              }
            : "No response data",
          request: error.request ? "Request exists" : "No request data",
        });
        setError(`Failed to delete post: ${error.message || "Unknown error"}`);
      }
    }
  };

  const handleCreateSuccess = () => {
    fetchPosts();
    setActiveTab("list");
  };

  const handleUpdateSuccess = () => {
    fetchPosts();
    setSelectedPost(null);
    setActiveTab("list");
  };

  const handleCancelEdit = () => {
    setSelectedPost(null);
    setActiveTab("list");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              className={`mr-8 py-4 px-1 border-b-2 font-medium  ${
                activeTab === "create"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => {
                setActiveTab("create");
                setSelectedPost(null);
              }}
            >
              Create New Post
            </button>
            <button
              className={`mr-8 py-4 px-1 border-b-2 font-medium ${
                activeTab === "list" || activeTab === "edit"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("list")}
            >
              Manage Posts
            </button>
          </nav>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {activeTab === "create" && (
          <BlogEditor onSuccess={handleCreateSuccess} />
        )}

        {activeTab === "edit" && selectedPost && (
          <BlogEditor
            post={selectedPost}
            onSuccess={handleUpdateSuccess}
            onCancel={handleCancelEdit}
          />
        )}

        {activeTab === "list" && (
          <BlogList
            posts={posts}
            loading={loading}
            onEdit={handleEditPost}
            onDelete={handleDeletePost}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
