// src/pages/Homepage.js

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";
import bgimage from "../assests/689-800x500.jpg";
import foodImage from "../assests/food-image.jpg";
import beautyImage from "../assests/beauty.jpg";
import techImage from "../assests/technology.jpg";
import movieImage from "../assests/movie.jpg";
import newsImage from "../assests/news.jpg";
import flowerGif1 from "../assests/flower1.gif"; // Example flower GIF import

export default function Homepage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const staticData = [
      {
        id: 1,
        title: "FOOD",
        body: "Learn how to cook some delicious recipes that are both easy and satisfying.",
        cover: foodImage,
        category: "Food/cooking",
        likes: 23,
        createdAt: "2024-10-01T00:00:00Z",
        author: "Sreeja Gorantla",
      },
      {
        id: 2,
        title: "Beauty",
        body: "The Art of Beauty: Embracing Your Unique Radiance",
        cover: beautyImage,
        category: "Beauty/cosmetics",
        likes: 30,
        createdAt: "2024-09-25T00:00:00Z",
        author: "Gayathri",
      },
      {
        id: 3,
        title: "Movie updates",
        body: "OG was scheduled to release on September 27, 2024, but was postponed due to production delays. It was teased to be released in Summer 2025.",
        cover: movieImage,
        category: "Movies",
        likes: 295,
        createdAt: "2024-09-20T00:00:00Z",
        author: "Manasa Kamineni",
      },
      {
        id: 4,
        title: "News",
        body: "Latest updates on global news and current events.",
        cover: newsImage,
        category: "News",
        likes: 50,
        createdAt: "2024-10-05T00:00:00Z",
        author: "John Doe",
      },
    ];

    setLoading(true);
    setTimeout(() => {
      setData(staticData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout>
      {/* Header Section */}
      <header className="flex justify-center items-center p-4 bg-blue-500">
        <NavLink to="/home" className="text-white text-lg">Home</NavLink>
      </header>

      {/* Main Section */}
      <section className="container mx-auto md:flex md:mt-14">
        <article
          className="md:w-4/6 rounded-b-xl md:rounded-md pt-20 md:mx-5 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: "cover",
            height: "400px",
          }}
        >
     <h1 className="text-white font-bold text-center py-32 text-2xl font-mont">
  <span className="bg-blue-700 bg-opacity-40 px-1">Every story matters..Then What's yours?</span>
</h1>








          <p className="text-black font-bold text-center">Author: REACT</p>
        </article>

        <div className="hidden md:block md:w-2/6">
          <NavLink to="/food">
            <article
              className="w-full rounded-lg mb-4"
              style={{
                background: `url(${foodImage})`,
                backgroundSize: "cover",
                height: "250px",
              }}
            >
              <h1 className="text-white text-center py-20 text-2xl font-mont font-bold">
                Food Recipes
              </h1>
            </article>
          </NavLink>

          <NavLink to="/technology">
            <article
              className="w-full rounded-lg mb-4"
              style={{
                background: `url(${techImage})`,
                backgroundSize: "cover",
                height: "250px",
              }}
            >
              <h1 className="text-white text-center py-20 text-2xl font-mont font-bold">
                Technology
              </h1>
            </article>
          </NavLink>
        </div>
      </section>

      {/* Flower GIF animation */}
      <div className="flowers-container flex justify-center mt-4">
        <img 
          src={flowerGif1} 
          alt="flower 1" 
          className="flower" 
          style={{ width: "100px", height: "100px" }} 
        />
      </div>

      {/* Latest Articles */}
      <div className="container md:mx-auto md:mt-10 mb-10 md:mb-10">
        <main className="container px-4">
          <h1 className="font-mont font-medium text-2xl md:text-3xl mt-10 pb-4 border-orange-600 border-b-2 inline-block">
            The Latest
          </h1>
          {loading && (
            <div className="flex px-5 w-min mx-auto py-20 md:pt-24">
              <div className="loader">Loading...</div>
            </div>
          )}
          <div className="articles-list mt-6 md:mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {!loading && data.map((article) => (
              <article key={article.id} className="p-4 bg-gray-200 rounded-lg">
                <img src={article.cover} alt={article.title} className="w-full h-32 object-cover rounded-md" />
                <h2 className="text-lg font-bold mt-2">{article.title}</h2>
                <p className="text-sm mt-1">{article.body}</p>
                <p className="text-xs mt-1 text-gray-500">Author: {article.author}</p>
              </article>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
