import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./components/About";
import BlogGallery from "./components/BlogGallery";
import BlogPost from "./components/BlogPost";
import NutritionTips from "./components/NutritionTips";
import Recipes from "./components/Recipes";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <Link
                to="/"
                className="text-3xl font-bold text-gray-900 hover:text-primary mb-4 sm:mb-0"
              >
                Diana Chávez's Nutrition Blog and Recipes
              </Link>
              <nav className="flex space-x-6">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/nutrition-tips"
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Nutrition Tips
                </Link>
                <Link
                  to="/recipes"
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Recipes
                </Link>
              </nav>
            </div>
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
            <Route path="/nutrition-tips" element={<NutritionTips />} />
            <Route path="/recipes" element={<Recipes />} />
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
