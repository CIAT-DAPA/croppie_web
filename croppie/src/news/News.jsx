import React from 'react'
import './style.css'
import { useLanguage } from '../LanguageContext';

const News = () => {
    const { language } = useLanguage();
    return (
        <section id='contact' className='containerNews'>
        <h2> {language === 'es' ?  'Noticias y actualizaciones' : 'News and updates' }</h2>
        <div className='contaiNews'>
            <div>
                <h3>App CROPPIE </h3>
                <p> {language === 'es' ?  'Croppie es una aplicación móvil diseñada para ayudar a los pequeños caficultores en sus decisiones clave.' : 'Croppie is a mobile application designed to help small coffee growers in their.' }    
                </p>
                <button><a href='https://play.google.com/store/search?q=croppie&c=apps' target='_black'>{language === 'es' ?  'Descargar App' : 'Download App' }</a></button>
                <span></span>
            </div>
            <img src="/icons/phone.svg" alt="" />
        

        </div>
        
    
        </section>
    )
}

export default News