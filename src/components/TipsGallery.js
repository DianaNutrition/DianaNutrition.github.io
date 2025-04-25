import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts.json";

function BlogGallery() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        My Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            to={`/post/${post.id}`}
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={require(`../data/images/${post.thumbnail}`)}
                alt={post.title}
                className="object-cover w-full h-48"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BlogGallery;
