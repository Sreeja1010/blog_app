import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginOrSignUp = (e) => {
    e.preventDefault();
    const user = { name, email }; // Mock user data for demonstration
    setUser(user); // Update user state in App
    navigate("/profile"); // Redirect to Profile page after login
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-500 to-teal-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transform transition duration-500 ease-in-out hover:scale-105">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6 animate__animated animate__fadeIn">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleLoginOrSignUp} className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 ml-2 underline font-semibold"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
