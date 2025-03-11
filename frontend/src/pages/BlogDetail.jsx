import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { marked } from "marked";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const BlogDetail = () => {
  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer,
    breaks: true,
    gfm: true,
    sanitize: false, // HTML içeriğinin işlenmesini sağlar
  });

  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log(post);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch the post directly by slug
        const { data } = await axios.get(
          `http://localhost:5001/api/blogs/slug/${slug}`
        );
        setPost(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch blog post");
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/blog?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  // Custom renderer for markdown to improve image display
  useEffect(() => {
    marked.use({
      renderer: {
        image(href, title, text) {
          return `<div class="my-6 flex justify-center">
                    <img src="${href}" alt="${text || ""}" title="${
            title || ""
          }" class="rounded-lg shadow-md max-h-[600px] object-contain" />
                  </div>`;
        },
      },
    });
  }, []);

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

  if (!post)
    return (
      <>
        <Navbar />
        <div className="container mx-auto py-8 pt-24 lg:pt-32 px-4">
          <div className="text-center py-10 text-gray-500">
            Blog post not found
          </div>
        </div>
      </>
    );

  const formattedDate = formatDate(post.createdAt);

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen py-8 pt-24 lg:pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              {/* Header with title and metadata */}
              <header className="p-6 md:p-8 border-b border-gray-100">
                <div className="mb-2 text-sm text-gray-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {formattedDate}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="text-sm text-gray-600 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>By mssmachinery</span>
                  </div>
                </div>
              </header>

              {/* Cover image if exists */}
              {post.coverImage && (
                <div className="w-full border-b border-gray-100">
                  <div className="h-[600px] overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 md:p-8">
                <div
                  className="blog-detail-content prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: marked(post.content) }}
                />
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
