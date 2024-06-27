import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

// Fonction de détection de la langue personnalisée pour utiliser localStorage
const languageDetector: any  = {
  type: 'languageDetector',
  async: true,
  detect: (callback: (lng: string) => void) => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    const fallbackLng = 'fr';
    callback(savedLanguage || fallbackLng);
  },
  init: () => {},
  cacheUserLanguage: (lng: string) => {
    localStorage.setItem('i18nextLng', lng);
  }
};

i18n
  .use(HttpApi)
  .use(languageDetector) // Utilisation du détecteur de langue personnalisé
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
