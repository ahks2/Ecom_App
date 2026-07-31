import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import ar from "./ar.json";

import de from "./de.json";

import fa from "./fa.json";

const LANGUAGES = {
  ar: {
    translation: ar,
  },
  de: {
    translation: de,
  },
  fa: {
    translation: fa,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources: LANGUAGES,
  fallbackLng: "ar",
  defaultNS: "translation",
  ns: ["translation"],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
