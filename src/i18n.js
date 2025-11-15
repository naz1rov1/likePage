import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uzJson from "../src/locaid/uz.json";
import enJson from "../src/locaid/en.json";
import ruJson from "../src/locaid/ru.json";

const resources = {
  en: {
    translation: enJson,
  },
  uz: {
    translation: uzJson,
  },
  ru: {
    translation: ruJson,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
