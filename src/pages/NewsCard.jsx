import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/news.webp";

const NewsCard = ({ item, onRemove, onSave }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    if (onSave) onSave();
  };

  return (
    <div className="news-card">
      <img
        src={img}
        className="news-img"
        alt={item.title}
      />

      <div className="news-content">
        <div className="title-row">
          <h3>{item.title}</h3>

          {onRemove && (
            <button className="remove-btn" onClick={onRemove}>
              X
            </button>
          )}

          <button
            className={`like-btn ${liked ? "active" : ""}`}
            onClick={handleLike}
          >
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>

        <div className="news-all">
          <p className="news-date">{item.tags[0]}</p>
         
        </div>
        <p className="news-desc">
          {item.body.slice(0, 100)}
        </p>

        <Link to={`/news/${item.id}`} className="read-more">
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
