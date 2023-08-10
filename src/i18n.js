// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { bookingpage } from "./translations/bookingpage"; // Import bookingpage translations
import aboutme from "./translations/aboutme";
import loginpage from "./translations/loginpage";
import signuppage from "./translations/signuppage";
import homepageTranslations from "./translations/homepageTranslations";

const resources = {
  en: {
    translation: {
      home: "Home",
      login: "Login",
      signup: "Signup",
      blog: "Blog",
      book: "Book",
      faq: "FAQ",
      aboutMe: "About Me",
      logOut: "Log Out",
      ...bookingpage.en,// Include English translations for BookingPage
      ...aboutme.en,
      ...loginpage.en,
      ...signuppage.en,
      ...homepageTranslations.en,
    },
  },
  pt: {
    translation: {
      home: "INTJ Growth",
      login: "Entrar",
      signup: "Cadastrar",
      blog: "Blog",
      book: "Agendament de Consultas",
      faq: "Perguntas Frequentes",
      aboutMe: "Sobre Mim",
      logOut: "Sair",
      ...bookingpage.pt, // Include Portuguese translations for BookingPage
      ...aboutme.pt, // Include Portuguese translations for AboutMe
      ...loginpage.pt,
      ...signuppage.pt,
      ...homepageTranslations.pt,
    },
  },
  es: {
    translation: {
      home: "INTJ Growth",
      login: "Iniciar Sesión",
      signup: "Registrarse",
      blog: "Blog",
      book: "Pedir una Consulta",
      faq: "Preguntas Frecuentes",
      aboutMe: "Sobre Mí",
      logOut: "Cerrar Sesión",
      ...bookingpage.es, // Include Spanish translations for BookingPage
      ...aboutme.es, 
      ...loginpage.es,
      ...signuppage.es,
      ...homepageTranslations.es,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
