import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import fitness1Image from "../assests/fitness1.png"; // Corrected path
import fitness2Image from "../assests/fitness2..png"; // Corrected path
import fitness3Image from "../assests/fitness3.png"; // Corrected path

const FitnessPage = () => {
  const [fitnessArticles, setFitnessArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fitnessData = [
      {
        id: 1,
        title: "Top 10 Exercises for Beginners",
        body: "Here are some simple exercises to get you started on your fitness journey...",
        category: "Fitness",
        cover: fitness1Image,
        likes: 45,
        createdAt: "2024-11-01T00:00:00Z",
        author: "John Doe",
      },
      {
        id: 2,
        title: "The Importance of Nutrition in Fitness",
        body: "Learn how nutrition plays a crucial role in maintaining your fitness goals...",
        category: "Fitness",
        cover: fitness2Image,
        likes: 30,
        createdAt: "2024-11-05T00:00:00Z",
        author: "Jane Smith",
      },
      {
        id: 3,
        title: "Effective Home Workouts",
        body: "Discover workouts you can do at home with minimal equipment to stay fit...",
        category: "Fitness",
        cover: fitness3Image,
        likes: 70,
        createdAt: "2024-11-07T00:00:00Z",
        author: "Alex Brown",
      },
    ];

    setTimeout(() => {
      setFitnessArticles(fitnessData);
      setLoading(false);
    }, 1000);
  }, [location]);

  const handleLike = (id) => {
    setFitnessArticles((prevData) =>
      prevData.map((article) =>
        article.id === id ? { ...article, likes: article.likes + 1 } : article
      )
    );
  };

  return (
    <Layout>
      <section className="container mx-auto">
        <h1 className="text-2xl font-bold mt-10">Fitness Articles</h1>
        {loading ? (
          <div className="text-center mt-10">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {fitnessArticles.map((article) => (
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

export default FitnessPage;
