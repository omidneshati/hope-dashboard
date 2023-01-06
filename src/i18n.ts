import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend, { HttpBackendOptions } from 'i18next-http-backend';

i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init<HttpBackendOptions>({
    debug: true,
    fallbackLng: 'en',
    // resources: {
    //   en: {
    //     translation: {
    //       // here we will place our translations...
    //     }
    //   }
    // },
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: '/locales/{{lng}}/translation.json'
    }
  });

export default i18n;
