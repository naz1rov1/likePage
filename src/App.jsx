import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import NewsPage from "./pages/NewsPage";
import DetailPage from "./pages/DetailPage";
import SavedNewsPage from "./pages/SavedNewsPage";



const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/news/:id" element={<DetailPage />} />
        <Route path="/saved" element={<SavedNewsPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
