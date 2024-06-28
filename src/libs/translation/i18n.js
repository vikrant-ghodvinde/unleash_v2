import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "../locales/en/translation.json";
import FR from "../locales/fr/translation.json";
import ES from "../locales/es/translation.json";
import DE from "../locales/de/translation.json";
import IT from "../locales/it/translation.json";
import ZH from "../locales/zh/translation.json";
import JA from "../locales/ja/translation.json";
import KO from "../locales/ko/translation.json";
import ID from "../locales/id/translation.json";
import TR from "../locales/tr/translation.json";

const resources = {
  en: {
    translation: EN,
  },
  fr: {
    translation: FR,
  },
  es: {
    translation: ES,
  },
  de: {
    translation: DE,
  },
  it: {
    translation: IT,
  },
  zh: {
    translation: ZH,
  },
  ja: {
    translation: JA,
  },
  ko: {
    translation: KO,
  },
  id: {
    translation: ID,
  },
  tr: {
    translation: TR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("currentLanguage") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
