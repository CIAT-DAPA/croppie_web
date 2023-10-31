import React from 'react';
import { useLanguage } from '../LanguageContext';

function LanguageButton() {
  const { language, toggleLanguage } = useLanguage();

  return (
   
     <div  onClick={toggleLanguage} className='idioma'>
     {language === 'es' ?  'Inglés' : 'Español' }
 </div>
  );
}

export default LanguageButton;
