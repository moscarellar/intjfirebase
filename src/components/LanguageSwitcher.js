import React from 'react';
import i18n from 'i18next';

const LanguageSwitcher = () => {
  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pt')}>Português</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;
