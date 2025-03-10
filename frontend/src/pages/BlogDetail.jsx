import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { marked } from "marked";

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

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/blog"
        className="inline-block mb-6 text-blue-600 hover:underline"
      >
        &larr; Back to Blog
      </Link>

      <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

        <div className="text-sm text-gray-500 mb-6">
          <div className="mb-2">Published on {formatDate(post.createdAt)}</div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
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

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(post.content) }}
        />
      </article>
    </div>
  );
};

export default BlogDetail;
