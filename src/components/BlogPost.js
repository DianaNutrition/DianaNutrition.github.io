import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "../data/posts.json";

function BlogPost() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const post = posts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (post) {
      console.error(`${process.env.PUBLIC_URL}/data/blogPosts/${post.content}`);
      // Fetch from public folder
      fetch(`${process.env.PUBLIC_URL}/blogPosts/${post.content}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then((text) => {
          setContent(text);
        })
        .catch((error) => {
          console.error("Error loading blog post:", error);
          setContent("Failed to load blog post content.");
        });
    }
  }, [post]);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Post not found</h2>
        <Link
          to="/"
          className="text-primary hover:text-primary-dark mt-4 inline-block"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to All Posts
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <div className="mb-8 text-gray-500">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
