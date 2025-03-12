import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { marked } from "marked";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Blog = () => {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get search query from URL if exists
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
  }, [location.search]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5001/api/blogs");
        setPosts(data);
        setFilteredPosts(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch blog posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts when search term changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, posts]);

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Function to create excerpt from content
  const createExcerpt = (content, maxLength = 500) => {
    // Remove Cloudinary links and markdown syntax
    const plainText = content
      .replace(/\!\[.*?\]\(https:\/\/res\.cloudinary\.com\/.*?\)/g, "") // Replace image markdown with [Image]
      .replace(/https:\/\/res\.cloudinary\.com\/[^\s)]+/g, "") // Remove any remaining Cloudinary URLs
      .replace(/\[.*?\]\(.*?\)/g, "") // Remove any other markdown links
      .replace(/[#*_~`]/g, ""); // Remove other markdown syntax

    // Trim whitespace and normalize spaces
    const trimmedText = plainText.replace(/\s+/g, " ").trim();

    if (trimmedText.length <= maxLength) return trimmedText;
    return trimmedText.substring(0, maxLength) + "...";
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // URL update operation can be done here, but not necessary for now
    // because search results are already displayed in real-time
  };

  if (loading)
    return (
      <>
        <Navbar />
        <div className="container mx-auto py-8 pt-24 lg:pt-32 px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-700"></div>
          </div>
        </div>
      </>
    );

  if (error)
    return (
      <>
        <Navbar />
        <div className="container mx-auto py-8 pt-24 lg:pt-32 px-4">
          <div className="text-center py-10 text-red-500 font-medium">
            {error}
          </div>
        </div>
      </>
    );

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen px-2 md:px-0 mt-4 md:mt-0 py-8 pt-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            {/* Search Box */}
            <form
              onSubmit={handleSearchSubmit}
              className="relative w-full md:w-96 mx-auto md:ml-auto md:mr-0 bg-white rounded-lg overflow-hidden"
            >
              <input
                type="text"
                placeholder="Search blog title..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-4 py-3 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-10 text-gray-500 bg-white rounded-lg shadow-md">
              {searchTerm
                ? "No search results found"
                : "No blog posts available yet"}
            </div>
          ) : (
            <div className="flex flex-col space-y-8 md:space-y-12 lg:space-y-16 max-w-7xl mx-auto">
              {filteredPosts.map((post, index) => {
                const formattedDate = formatDate(post.createdAt);

                return (
                  <div
                    key={post._id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                  >
                    <div className="flex flex-col md:flex-row md:h-[400px]">
                      {/* Image section */}
                      <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="block h-full"
                        >
                          <div className="h-full flex items-center justify-center bg-gray-50 transition-all duration-300 hover:opacity-90">
                            {post.coverImage ? (
                              <div className="w-full h-full overflow-hidden">
                                <img
                                  src={post.coverImage}
                                  alt={post.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                <span className="text-gray-400">No image</span>
                              </div>
                            )}
                          </div>
                        </Link>
                      </div>
                      {/* Content section */}
                      <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                        <div>
                          <div className="mb-2 md:mb-3 text-sm text-gray-500">
                            {formattedDate}
                          </div>

                          <h2 className="text-lg  md:text-3xl font-semibold md:font-bold mb-3 md:mb-4 leading-tight">
                            <Link
                              to={`/blog/${post.slug}`}
                              className="text-[#0C4A79] hover:text-[#0A3D66] transition-colors duration-200"
                            >
                              {post.title}
                            </Link>
                          </h2>

                          <p className="text-gray-500 text-sm md:text-base mb-4 md:mb-6 blog-excerpt line-clamp-3 md:line-clamp-4">
                            {createExcerpt(post.content, 200)}
                          </p>
                        </div>

                        <div className="text-sm md:text-base mt-2 md:mt-auto">
                          <Link
                            to={`/blog/${post.slug}`}
                            className="inline-block bg-[#0C4A79] text-white py-2 px-4 rounded font-medium hover:bg-[#0A3D66] transition-colors duration-200"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="-mt-6">
        <Footer />
      </div>
    </>
  );
};

export default Blog;
