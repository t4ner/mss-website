import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { marked } from "marked";
import Navbar from "../components/Navbar";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5001/api/blogs/${id}`
        );
        setPost(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch blog post");
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  if (!post)
    return <div className="text-center py-10">Blog post not found</div>;

  // Format the date for display
  const formattedDate = formatDate(post.createdAt);
  // Extract day and month/year
  const dateParts = formattedDate.split(" ");
  const day = dateParts[0];
  const monthYear = dateParts.slice(1).join(" ");

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-24 lg:pt-32">
        <Link
          to="/blog"
          className="inline-block mb-6 text-blue-600 hover:underline"
        >
          &larr; Blog'a Dön
        </Link>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header with date and title */}
          <div className="flex flex-col md:flex-row">
            {/* Date display */}
            <div className="bg-blue-500 text-white p-4 text-center md:w-24">
              <div className="text-2xl font-bold">{day}</div>
              <div className="text-sm">{monthYear}</div>
            </div>

            {/* Title */}
            <div className="p-6 md:flex-1">
              <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
              <div className="mt-2 text-sm text-gray-500">
                <span>Yazar: {post.author || "Admin"}</span>
              </div>
            </div>
          </div>

          {/* Cover image if exists */}
          {post.coverImage && (
            <div className="w-full">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full max-h-96 object-cover"
              />
            </div>
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="px-6 py-3 bg-gray-50 border-t border-b border-gray-100">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-6 md:p-8">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: marked(post.content) }}
            />
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogDetail;
