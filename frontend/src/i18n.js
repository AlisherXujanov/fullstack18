// locale == language == язык == til
import i18n from "i18next"
import enJSON from './locales/en.json'
import ruJSON from './locales/ru.json'
import uzJSON from './locales/uz.json'

import { useTranslation, initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
    resources: {
        en: enJSON,
        ru: ruJSON,
        uz: uzJSON
    }, // Where we're gonna put translations' files
    lng: "en",     // Set the initial language of the App
    fallbackLng: "en", // If the language detector fails, it will use this language
});

export default i18n;
