import { useState } from 'react'
import './style.css'


function Menu() {
  

  return (
    <div className='menu' >
        <img src="/logos/logoBorder.svg" className="logoCroppie" alt="logo croppie" />
        <nav>
            <ul className='seccionesMenu'>
                <li><a href="#banner">Inicio</a></li>
                <li><a href="#cards">Croppie</a></li>
                <li><a href="#about-us">Quíenes somos</a></li>
                <li><a href="#where-we-are">Dónde estamos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
        <div className='idioma'>
            ES/EN
        </div>

    </div>
  )
}

export default Menu