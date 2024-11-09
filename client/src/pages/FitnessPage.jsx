import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { backend_url } from "../config";
import axios from 'axios'

const FitnessPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log("Fetching data...");
        const response = await axios.get(`${backend_url}/api/v1/blogs`);
        console.log(response.data);
        
        // Assuming response.data.getBlog is an array of blogs
        const filteredData = response.data.getBlog.filter((blog) => blog.category === "fitness");
  
        setData(filteredData); // Update the state with the filtered data
      } catch (err) {
        console.log("Catch block");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  const handleLike = async (id) => {
    try {
      const response = await axios.patch(`${backend_url}/api/v1/blogs/${id}`);
      if (response.status === 200) {
        alert("Liked.");
        window.location.reload();  // Reload the page after liking the blog
      }
    } catch (err) {
      console.log(err);
      alert("Could not like the blog.");
    }
  };

  return (
    <Layout>
      <section className="container mx-auto">
        <h1 className="text-2xl font-bold mt-10">Fitness Articles</h1>
        {loading ? (
          <div className="text-center mt-10">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {data.map((article, key) => (
              <article
                key={article._id}
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
                      onClick={() => handleLike(article._id)}
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
