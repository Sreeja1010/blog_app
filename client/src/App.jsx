import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import FoodPage from "./pages/FoodPage";
import BeautyPage from "./pages/BeautyPage";
import TechnologyPage from "./pages/TechnologyPage";
import NewsPage from "./pages/NewsPage";
import FitnessPage from "./pages/FitnessPage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

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
