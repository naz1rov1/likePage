import React, { useState, useEffect } from "react";
import NewsCard from "../pages/NewsCard"; 

const SavedNewsPage = () => {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const savedNews = JSON.parse(localStorage.getItem("savedNews") || "[]");
    setSaved(savedNews);
  }, []);

  const handleRemove = (id) => {
    const filtered = saved.filter((item) => item.id !== id);
    setSaved(filtered);
    localStorage.setItem("savedNews", JSON.stringify(filtered));
  };

  return (
    <div className="container">
      <h1 className="page-title">Saved News</h1>

      {saved.length === 0 && <p>No saved news.</p>}

      <div className="news-grid">
        {saved.map((item) => (
          <NewsCard
            key={item.id}
            item={item}
            onRemove={() => handleRemove(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedNewsPage;
