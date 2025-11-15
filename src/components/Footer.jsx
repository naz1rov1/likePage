import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} NewsPortal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
