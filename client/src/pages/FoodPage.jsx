import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import foodImage from "../assests/food-image0.png";
import food1Image from "../assests/food1.png";
import food2Image from "../assests/food2.png"; // Update with actual food image paths

const FoodPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foodArticles = [
      {
        id: 1,
        title: "The Best Pasta Recipes",
        body: "Discover how to make the most delicious pasta dishes, from classic to innovative.",
        category: "Food/Cooking",
        cover: foodImage,
        likes: 85,
        createdAt: "2024-11-01T00:00:00Z",
        author: "Chef Antonio",
      },
      {
        id: 2,
        title: "Healthy Meal Prep Ideas",
        body: "Stay fit and energized with these healthy and easy meal prep options.",
        category: "Food/Health",
        cover: food1Image,
        likes: 72,
        createdAt: "2024-11-02T00:00:00Z",
        author: "Nutritionist Maria",
      },
      {
        id: 3,
        title: "5 Quick Breakfast Recipes",
        body: "Start your day right with these quick and tasty breakfast ideas.",
        category: "Food/Breakfast",
        cover: food2Image,
        likes: 110,
        createdAt: "2024-11-03T00:00:00Z",
        author: "Morning Chef",
      },
      // Add more food-related articles as needed
    ];

    setTimeout(() => {
      setData(foodArticles);
      setLoading(false);
    }, 1000);
  }, []);

  const handleLike = (id) => {
    setData((prevData) =>
      prevData.map((article) =>
        article.id === id ? { ...article, likes: article.likes + 1 } : article
      )
    );
  };

  return (
    <Layout>
      <section className="container mx-auto">
        <h1 className="text-2xl font-bold mt-10">Food Articles</h1>
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

export default FoodPage;
