import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Inglés como idioma predeterminado

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en'); // Cambiar entre inglés y español
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
