import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend"
import translationEN from "../src/locales/en/translationEN.json"
import translationPT from "../src/locales/pt/translationPT.json"

const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  }
};


i18next
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .use(Backend)
    .init({
      resources,
      fallbackLng: "en",
      debug:true, 
      lng:"en",
});
