import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <h2 className="logo">News</h2>
      <nav>
        <Link to="/">{t("uzbekistan")}</Link>
        <Link to="/">{t("world")}</Link>
        <Link to="/">{t("economy")}</Link>
        <Link to="/">{t("society")}</Link>
        <Link to="/">{t("sport")}</Link>
        <Link to="/">{t("technology")}</Link>
        <Link to="/">{t("news")}</Link>
        <Link to="/saved">{t("saved")}</Link>
      </nav>
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="uz">O‘zbekcha</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </header>
  );
};

export default Header;
