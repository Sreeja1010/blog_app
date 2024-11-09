import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import tech1Image from "../assests/5g-img.png"; // Ensure the path is correct
import tech2Image from "../assests/Ai.png"; // Ensure the path is correct
import tech3Image from "../assests/smart-city.png"; // Example additional image
import tech4Image from "../assests/biometric-security.png"; // Example additional image
import tech5Image from "../assests/neural-network-art.png"; // Example additional image

const TechnologyPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const staticData = [
      {
        id: 1,
        title: "Technology News",
        body: "New advancements in artificial intelligence and their implications.",
        category: "Technology",
        cover: tech2Image,
        likes: 120,
        createdAt: "2024-10-05T00:00:00Z",
        author: "Tech Guru",
      },
      {
        id: 2,
        title: "5G Networks",
        body: "The impact of 5G networks on global communication.",
        category: "Technology",
        cover: tech1Image,
        likes: 80,
        createdAt: "2024-10-10T00:00:00Z",
        author: "Network Specialist",
      },
      {
        id: 3,
        title: "Biometric Security: The Future of Authentication",
        body: "How biometric technology is reshaping authentication systems, from facial recognition to fingerprints.",
        category: "Technology",
        cover: tech4Image,
        likes: 50,
        createdAt: "2024-10-12T00:00:00Z",
        author: "Cybersecurity Expert",
      },
      {
        id: 4,
        title: "Smart Cities: The Future of Urban Living",
        body: "Exploring the impact of IoT, smart infrastructure, and sustainability on future cities.",
        category: "Technology",
        cover: tech3Image,
        likes: 75,
        createdAt: "2024-10-15T00:00:00Z",
        author: "Urban Planner",
      },
      {
        id: 5,
        title: "Neural Networks in Art Creation",
        body: "How artificial neural networks are revolutionizing the world of digital art and creativity.",
        category: "Technology",
        cover: tech5Image,
        likes: 100,
        createdAt: "2024-10-18T00:00:00Z",
        author: "AI Artist",
      },
    ];

    setTimeout(() => {
      setData(staticData);
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
        <h1 className="text-2xl font-bold mt-10">Technology Articles</h1>
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

export default TechnologyPage;
