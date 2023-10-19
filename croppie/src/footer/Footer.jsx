import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <section id="contact" className='containerFooter'>
        <div className='containerFooter_One'>
            <img src="/logos/logoBorder.svg" className="logoCroppie" alt="logo croppie" />
            <p>Croppie es una aplicación móvil diseñada para ayudar a los pequeños caficultores en sus decisiones clave.
</p>
            <div className='socialMedia'>
                <img src="/icons/Facebook - Original.svg" alt="" />
                <img src="/icons/Twitter - Original.svg" alt="" />
                <img src="/icons/Instagram - Original.svg"  alt="" />
           </div>
            <small>© 2023. All rights reserved.</small>
        </div>
        <div className='containerFooter_Tow'>
            <span className='footerTitle'>Menú</span>
            <span><a href="#banner">Inicio</a></span>
            <span><a href="#cards">Croppie</a></span>
            <span><a href="#about-us">Quíenes somos</a></span>
            <span><a href="#where-we-are">Dónde estamos</a></span>
        </div>
        <div className='containerFooter_Three'>
            <span className='footerTitle'>Nosotros</span>
            <span><a href='https://alliancebioversityciat.org/es' target="_blank">CIAT</a></span>
            <span><a href='https://tecnicafe.co/' target="_blank">Tecnicafé</a></span>
            <span><a href='https://producersdirect.org/' target="_blank">Producer Direct</a></span>
            <span className='btn-hiden'>Producer Direct</span>
        </div>
        <div className='containerFooter_Three'>
            <span className='footerTitle'>Contacto</span>
            <span>Romain Gauteon
                nombre@ciat.org
                (+57)3238494
            </span>
            <span>
                Comunicaciones Ciat
                comunicaciones@ciat-org
                (+57)3238494
            </span>
            <span></span>
        </div>
    </section>
  )
}

export default Footer