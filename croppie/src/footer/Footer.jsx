import React from 'react'
import './style.css'
import { useLanguage } from '../LanguageContext';

const Footer = () => {
    const { language } = useLanguage();
  return (
    <section id="contact" className='containerFooter'>
        <div className='containerFooter_One'>
            <img src="logos/logoBorder.svg" className="logoCroppie" alt="logo croppie" />
            <p className='mobile'> {language === 'es' ?  ' Croppie es una aplicación móvil diseñada para ayudar a los pequeños caficultores en sus decisiones clave.' : '     Croppie is a mobile app designed to support decision making of smallholder coffee producers.' }</p>
            <div className='socialMedia'>
                <img src="icons/Facebook - Original.svg" alt="" />
                <img src="icons/Twitter - Original.svg" alt="" />
                <img src="icons/Instagram - Original.svg"  alt="" />
           </div>
            <small>© 2023. All rights reserved.</small>
        </div>
        <div className='containerFooter_Tow footermb'>
            <span className='footerTitle'>Menú</span>
            <span><a href="#banner">{language === 'en' ? 'Home' : 'Inicio'}</a></span>
            <span><a href="#cards">Croppie</a></span>
            <span><a href="#about-us">{language === 'en' ? 'About us' : 'Quienes somos'}</a></span>
            <span><a href="#where-we-are">{language === 'en' ? 'Where we are' : 'Donde estamos'}</a></span>
        </div>
        <div className='containerFooter_Three footermb'>
            <span className='footerTitle'> {language === 'es' ?  'Quiénes somos' : ' About us' }</span>
            <span><a href='https://alliancebioversityciat.org/es' target="_blank">CIAT</a></span>
            <span><a href='https://tecnicafe.co/' target="_blank">Tecnicafé</a></span>
            <span><a href='https://producersdirect.org/' target="_blank">Producer Direct</a></span>
            <span className='btn-hiden'>Producer Direct</span>
        </div>
        <div className='containerFooter_Three'>
            <span className='footerTitle'>{language === 'en' ? 'Contact' : 'Contacto'}</span>
            <span>Romain Gautron
            r.gautron@cgiar.org
            </span>
        </div>
    </section>
  )
}

export default Footer