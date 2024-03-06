import React, { useEffect, useState } from 'react';
import './style.css';
import { useLanguage } from '../LanguageContext';
import LanguageButton from '../btn-language/LanguageButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Menu() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('banner');
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false); // Cerrar el menú después de hacer clic en un enlace
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='menu'>
      <img src="logos/logoBorder.svg" className="logoCroppie" alt="logo croppie" />
      <ul className='seccionesMenu mobile'>
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
      {/* Icono de hamburguesa para dispositivos de escritorio */}
      <FontAwesomeIcon className='desktop menuHamburguer' icon={faBars} onClick={toggleMenu} />

      {/* Menú hamburguesa para dispositivos móviles */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="#banner" onClick={() => handleLinkClick('banner')}>
                {language === 'en' ? 'Home' : 'Inicio'}
              </a>
            </li>
            <li>
              <a href="#cards" onClick={() => handleLinkClick('cards')}>
                Croppie
              </a>
            </li>
            <li>
              <a href="#about-us" onClick={() => handleLinkClick('about-us')}>
                {language === 'en' ? 'About us' : 'Quienes somos'}
              </a>
            </li>
            <li>
              <a href="#where-we-are" onClick={() => handleLinkClick('where-we-are')}>
                {language === 'en' ? 'Where we are' : 'Donde estamos'}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => handleLinkClick('contact')}>
                {language === 'en' ? 'Contact' : 'Contacto'}
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;
