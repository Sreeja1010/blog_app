import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Blog from "./pages/Blog.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import FoodPage from "./pages/FoodPage.jsx";
import BeautyPage from "./pages/BeautyPage.jsx";
import TechnologyPage from "./pages/TechnologyPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import FitnessPage from "./pages/FitnessPage.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const [user, setUser] = useState(null); // State to store logged-in user

  return (
    <Router>
      <Routes>
        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate replace to="/home" />} />

        {/* Homepage Route */}
        <Route path="/home" element={<Homepage />} />

        {/* Content Routes */}
        <Route path="/food" element={<FoodPage />} />
        <Route path="/beauty" element={<BeautyPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/fitness" element={<FitnessPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<SingleBlog />} />

        {/* Profile Route - Redirect to login if user is not logged in */}
        <Route
          path="/profile"
          element={user ? <Profile user={user} setUser={setUser} /> : <Navigate to="/login" />}
        />

        {/* Login Route */}
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
