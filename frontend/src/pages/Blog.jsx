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
      <div className="container mx-auto py-8 pt-24 lg:pt-32">
        {posts.length === 0 ? (
          <div className="text-center py-10">No blog posts found</div>
        ) : (
          <div className="flex flex-col space-y-6">
            {posts.map((post) => {
              // Format the date for display
              const formattedDate = formatDate(post.createdAt);
              // Extract day and month/year
              const dateParts = formattedDate.split(" ");
              const day = dateParts[0];
              const monthYear = dateParts.slice(1).join(" ");

              return (
                <div
                  key={post._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Date display for mobile */}
                    <div className="md:hidden bg-blue-500 text-white p-4 text-center">
                      <div className="text-2xl font-bold">{day}</div>
                      <div className="text-sm">{monthYear}</div>
                    </div>

                    {/* Left side - Date (desktop) and image */}
                    <div className="md:flex flex-col md:w-1/3">
                      {/* Date display for desktop */}
                      <div className="hidden md:block">
                        <div className="bg-blue-500 text-white p-4 text-center">
                          <div className="text-2xl font-bold">{day}</div>
                          <div className="text-sm">{monthYear}</div>
                        </div>
                      </div>

                      {/* Cover image */}
                      {post.coverImage ? (
                        <div className="flex-grow">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex-grow bg-gray-100 flex items-center justify-center p-6">
                          <span className="text-gray-400">No image</span>
                        </div>
                      )}
                    </div>

                    {/* Right side - Content */}
                    <div className="p-6 md:w-2/3">
                      <div className="flex flex-col h-full">
                        {/* Title and metadata */}
                        <div>
                          <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:text-blue-800">
                            <Link to={`/blog/${post._id}`}>{post.title}</Link>
                          </h2>
                          <div className="text-sm text-gray-500 mb-4">
                            <span>Yazar: {post.author || "Admin"}</span>
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
                        </div>

                        {/* Excerpt */}
                        <p className="text-gray-700 mb-4 flex-grow">
                          {createExcerpt(post.content)}
                        </p>

                        {/* Read more link */}
                        <div className="mt-auto">
                          <Link
                            to={`/blog/${post._id}`}
                            className="inline-block text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            Devamını oku &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
