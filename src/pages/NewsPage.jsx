import React from "react";
import newsData from "../newsData"; 
import NewsCard from "../pages/NewsCard"; 

const NewsPage = () => {
  return (
    <div className="container">
      <h1 className="page-title">Latest News</h1>

      <div className="news-grid">
        {newsData.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
