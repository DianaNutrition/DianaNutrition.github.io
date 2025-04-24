import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./components/About";
import BlogGallery from "./components/BlogGallery";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link
              to="/"
              className="text-3xl font-bold text-gray-900 hover:text-primary"
            >
              Diana Chávez's Nutrition Blog and Recipes
            </Link>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <BlogGallery />
                </>
              }
            />
            <Route path="/post/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center">
              © 2025 Diana Chávez's Nutrition Blog and Recipes. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
