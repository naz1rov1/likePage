import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import img from "../assets/news.webp";

const DetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/${id}`)
      .then((res) => setItem(res.data))
      .catch(() => setItem(null));
  }, [id]);

  const handleSave = () => {
    const saved = JSON.parse(localStorage.getItem("savedNews") || "[]");
    if (!saved.find((n) => n.id === item.id)) {
      saved.push(item);
      localStorage.setItem("savedNews", JSON.stringify(saved));
      alert("Saved successfully");
    }
  };

  if (!item) return <h2>News Not Found </h2>;

  return (
    <div className="detail-container">
      <img src={img} className="detail-img" alt={item.title} />
      <h1>{item.title}</h1>
      <p className="news-date">{item.date || item.tags?.join(", ")}</p>
      <p className="full-text">{item.body || item.description}</p>

      <button className="save-btn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default DetailPage;
