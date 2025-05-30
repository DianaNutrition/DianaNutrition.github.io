import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts.json";

function BlogGallery() {
  return (
    <section className="py-8 w-full">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        My Latest Blog Posts
      </h2>
      <div className="flex overflow-x-auto space-x-6 pb-4 w-full">
        {posts.map((post) => (
          <Link
            to={`/post/${post.id}`}
            key={post.id}
            className="bg-white rounded-lg shadow-lg flex-shrink-0 w-80 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BlogGallery;
