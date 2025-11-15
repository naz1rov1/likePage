import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../pages/NewsCard";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const NewsPage = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState([]);
   

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        console.log(res.data);
        setNews(res.data.posts || []);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSave = (item) => {
    const saved = JSON.parse(localStorage.getItem("savedNews") || "[]");
    if (!saved.find((n) => n.id === item.id)) {
      saved.push(item);
      localStorage.setItem("savedNews", JSON.stringify(saved));
    }
  };

  return (
    <div className="container">
      <h1 className="page-title"> {t("last")} </h1>
      <div className="news-grid">
        {Array.isArray(news) &&
          news.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              onSave={() => handleSave(item)}
            />
          ))}
      </div>
    </div>
  );
};

export default NewsPage;
  