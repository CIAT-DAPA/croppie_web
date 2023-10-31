import React, { useEffect, useState } from 'react';
import './style.css';
import { useLanguage } from '../LanguageContext';
import LanguageButton from '../btn-language/LanguageButton';

function Menu() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('banner');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        setActiveSection(section.id);
        break;
      }
    }
  };

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      // Establecer un breve retraso para actualizar la clase activa
      setTimeout(() => setActiveSection(sectionId), 100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='menu'>
      <img src="/logos/logoBorder.svg" className="logoCroppie" alt="logo croppie" />
      <ul className='seccionesMenu'>
        <li>
          <a
            href="#banner"
            className={activeSection === 'banner' ? 'active' : ''}
            onClick={() => handleLinkClick('banner')}
          >
            {language === 'en' ? 'Home' : 'Inicio'}
          </a>
        </li>
        <li>
          <a
            href="#cards"
            className={activeSection === 'cards' ? 'active' : ''}
            onClick={() => handleLinkClick('cards')}
          >
            Croppie
          </a>
        </li>
        <li>
          <a
            href="#about-us"
            className={activeSection === 'about-us' ? 'active' : ''}
            onClick={() => handleLinkClick('about-us')}
          >
            {language === 'en' ? 'About us' : 'Quienes somos'}
          </a>
        </li>
        <li>
          <a
            href="#where-we-are"
            className={activeSection === 'where-we-are' ? 'active' : ''}
            onClick={() => handleLinkClick('where-we-are')}
          >
            {language === 'en' ? 'Where we are' : 'Donde estamos'}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => handleLinkClick('contact')}
          >
            {language === 'en' ? 'Contact' : 'Contacto'}
          </a>
        </li>
      </ul>
      <LanguageButton />
    </div>
  );
}

export default Menu;
