import React from 'react'
import './style.css'
import { useLanguage } from '../LanguageContext';

const Banner = () => {
  const { language } = useLanguage();
  return (
    <section id="banner" className='banner'>
        <div className='banner_contain'> 
            <h2 className='banner_containTex1'>
                {language === 'es' ?  ' Estimado de rendimiento  asistido por IA' : 'AI-assisted coffee yield estimation' }
                
            </h2>
            <p className='banner_containTex2 '>
            {language === 'es' ?  ' Croppie es una solución tecnológica basada en fotos y diseñada para ayudar a los pequeños caficultores en sus decisiones claves.' : 'Croppie is a picture-based technological solution designed to support decision making of smallholder coffee producers.' }
            </p>
        </div>
        <button className='banner_button'>
            <a href='https://play.google.com/store/search?q=croppie&c=apps' target='_black'>   {language === 'es' ?  'Descargar App' : 'Download App' }</a> 
        </button>
        
    </section>
  )
}

export default Banner