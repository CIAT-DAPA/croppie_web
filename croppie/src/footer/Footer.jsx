import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <section id="contact" className='containerFooter'>
        <div className='containerFooter_One'>
            <img src="/logos/logoBorder.svg" className="logoCroppie" alt="logo croppie" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugit, eaque cupiditate ad neque aspernatur maxime mollitia aperiam exercitationem delectus harum est, hic suscipit iste aut pariatur consequatur vel velit?</p>
            <div className='socialMedia'>
                <img src="/icons/Facebook - Original.svg" alt="" />
                <img src="/icons/Twitter - Original.svg" alt="" />
                <img src="/icons/Instagram - Original.svg"  alt="" />
                <img src="/icons/LinkedIn - Original.svg"  alt="" />
            </div>
            <small>© 2021 . All rights reserved.</small>
        </div>
        <div className='containerFooter_Tow'>
            <span className='footerTitle'>Take a tour</span>
            <span>Home</span>
            <span>Croppie</span>
            <span>Quienes somos</span>
            <span>Donde estamos</span>
        </div>
        <div className='containerFooter_Three'>
            <span className='footerTitle'>Our Companies</span>
            <span>CIAT</span>
            <span>Tecnicafé</span>
            <span>Producer Direct</span>
            <span className='btn-hiden'>Producer Direct</span>
        </div>
        <div className='containerFooter_Four'>
            <span className='footerTitle'>Contacto</span>
            <p>
                Romain Gauteon
                nombre@ciat.org
                (+57)3238494
            </p>
            <p>
                Comunicaciones Ciat
                comunicaciones@ciat-org
                (+57)3238494
            </p>
        </div>
    </section>
  )
}

export default Footer