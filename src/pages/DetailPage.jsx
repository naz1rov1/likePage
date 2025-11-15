import React from "react";
import { useParams } from "react-router-dom";
import newsData from "../newsData";

const DetailPage = () => {
  const { id } = useParams();
  const item = newsData.find((n) => n.id === Number(id));

  const handleSave = () => {
    const saved = JSON.parse(localStorage.getItem("savedNews") || "[]");

    if (!saved.find((n) => n.id === item.id)) {
      saved.push(item);
      localStorage.setItem("savedNews", JSON.stringify(saved));
      alert("Saved successfully ");
    }
  };

  if (!item) return <h2>News Not Found</h2>;

  return (
    <div className="detail-container">
      <img src={item.imageUrl} className="detail-img" alt={item.title} />

      <h1>{item.title}</h1>
      <p className="news-date">{item.date}</p>

      <p className="full-text">{item.fullText}</p>

      <button className="save-btn" onClick={handleSave}>
        Save ⭐
      </button>
    </div> 
  );
};

export default DetailPage;
