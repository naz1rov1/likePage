import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ item, onRemove, onSave }) => {
  return (
    <div className="news-card">
      <img src={item.imageUrl} className="news-img" alt={item.title} />

      <div className="news-content">
        <div className="title-row">
          <h3>{item.title}</h3>

       
          {onRemove && (
            <button className="remove-btn" onClick={onRemove}>
              X
            </button>
          )}

          {onSave && (
            <button className="like-btn" onClick={onSave}>
              <i class="fa-regular fa-heart"></i>
            </button>
          )}
        </div>

        <p className="news-date">{item.date}</p>
        <p className="news-desc">{item.description}</p>

        <Link to={`/news/${item.id}`} className="read-more">
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
