// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { bookingpage } from "./translations/bookingpage"; // Import bookingpage translations
import aboutme from "./translations/aboutme";
import loginpage from "./translations/loginpage";
import signuppage from "./translations/signuppage";

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
    },
  },
  pt: {
    translation: {
      home: "Início",
      login: "Entrar",
      signup: "Cadastrar",
      blog: "Blog",
      book: "Livro",
      faq: "Perguntas Frequentes",
      aboutMe: "Sobre Mim",
      logOut: "Sair",
      ...bookingpage.pt, // Include Portuguese translations for BookingPage
      ...aboutme.pt, // Include Portuguese translations for AboutMe
      ...loginpage.pt,
      ...signuppage.pt,
    },
  },
  es: {
    translation: {
      home: "Inicio",
      login: "Iniciar Sesión",
      signup: "Registrarse",
      blog: "Blog",
      book: "Libro",
      faq: "Preguntas Frecuentes",
      aboutMe: "Sobre Mí",
      logOut: "Cerrar Sesión",
      ...bookingpage.es, // Include Spanish translations for BookingPage
      ...aboutme.es, 
      ...loginpage.es,
      ...signuppage.es,
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
