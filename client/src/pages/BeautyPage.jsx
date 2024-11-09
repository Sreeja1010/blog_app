import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import beauty1Image from "../assests/skincare.png"; // Update with actual image paths
import beauty2Image from "../assests/makeup-trends.png"; // Update with actual image paths
import beauty3Image from "../assests/skincare1.png";
import beauty4Image from "../assests/skincare2.png";
import beauty5Image from "../assests/skincare3.png";

const BeautyPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const beautyArticles = [
      {
        id: 1,
        title: "The Latest Skincare Trends",
        body: "Discover what's hot in the world of skincare, from new serums to clean beauty brands.",
        category: "Beauty",
        cover: beauty1Image,
        likes: 95,
        createdAt: "2024-10-20T00:00:00Z",
        author: "Beauty Expert",
      },
      {
        id: 2,
        title: "Makeup Trends for 2024",
        body: "Bold colors and minimalist looks are taking over the beauty scene.",
        category: "Beauty",
        cover: beauty2Image,
        likes: 65,
        createdAt: "2024-10-25T00:00:00Z",
        author: "Makeup Artist",
      },
      {
        id: 3,
        title: "How to Achieve the Perfect Glow",
        body: "10 skincare tips inspired by Bollywood celebs.",
        category: "Beauty",
        cover: beauty3Image,
        likes: 120,
        createdAt: "2024-11-01T00:00:00Z",
        author: "Glow Specialist",
      },
      {
        id: 4,
        title: "Top Haircare Tips for Every Season",
        body: "Keep your hair healthy and shiny no matter the weather.",
        category: "Beauty",
        cover: beauty4Image,
        likes: 80,
        createdAt: "2024-11-03T00:00:00Z",
        author: "Hair Stylist",
      },
      {
        id: 5,
        title: "Natural Beauty Remedies",
        body: "Explore the benefits of using natural ingredients for beauty treatments.",
        category: "Beauty",
        cover: beauty5Image,
        likes: 105,
        createdAt: "2024-11-05T00:00:00Z",
        author: "Wellness Coach",
      },
    ];
  
    setTimeout(() => {
      setData(beautyArticles);
      setLoading(false);
    }, 1000);
  }, [location]);
  

  const handleLike = (id) => {
    setData((prevData) =>
      prevData.map((article) =>
        article.id === id
          ? { ...article, likes: article.likes + 1 }
          : article
      )
    );
  };

  return (
    <Layout>
      <section className="container mx-auto">
        <h1 className="text-2xl font-bold mt-10">Beauty Articles</h1>
        {loading ? (
          <div className="text-center mt-10">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {data.map((article) => (
              <article
                key={article.id}
                className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={article.cover}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{article.title}</h2>
                  <p className="text-gray-600 text-sm mt-2">{article.body}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-gray-500">
                      By {article.author}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(article.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <button
                      className="flex items-center text-pink-500 font-bold mr-2"
                      onClick={() => handleLike(article.id)}
                    >
                      ♥
                    </button>
                    <span className="text-sm">{article.likes} likes</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default BeautyPage;
