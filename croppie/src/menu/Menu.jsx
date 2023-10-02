import { useState } from 'react'
import './style.css'


function Menu() {
  

  return (
    <div className='menu' >
        <img src="/logos/logoBorder.svg" className="logoCroppie" alt="logo croppie" />
        <nav>
            <ul className='seccionesMenu'>
                <li><a href="/">Inicio</a></li>
                <li><a href="/acerca">Croppie</a></li>
                <li><a href="/servicios">Quíenes somos</a></li>
                <li><a href="/contacto">Dónde estamos</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        </nav>
        <div className='idioma'>
            ES/EN
        </div>

    </div>
  )
}

export default Menu