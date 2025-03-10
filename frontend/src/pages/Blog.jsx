import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { marked } from "marked";
import Navbar from "../components/Navbar";
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5001/api/blogs");
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch blog posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to create excerpt from content
  const createExcerpt = (content, maxLength = 150) => {
    // Remove markdown syntax
    const plainText = content.replace(/[#*_~`]/g, "");
    if (plainText.length <= maxLength) return plainText;
    return plainText.substring(0, maxLength) + "...";
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto  py-8 pt-24 lg:pt-32">
        <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>

        {posts.length === 0 ? (
          <div className="text-center py-10">No blog posts found</div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <div className="text-sm text-gray-500 mb-4">
                    <span>{formatDate(post.createdAt)}</span>
                    {post.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-gray-700 mb-4">
                    {createExcerpt(post.content)}
                  </p>
                  <Link
                    to={`/blog/${post._id}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
