import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {t("copyright")}
      </p>
    </footer>
  );
};

export default Footer;
