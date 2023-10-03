import React from 'react'
import './style.css'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner_contain'> 
            <h2 className='banner_containTex1'>
                Estimado de rendimiento  asistido por IA
            </h2>
            <p className='banner_containTex2'>
                Croppie es una aplicación móvil diseñada para ayudar a los pequeños caficultores en sus decisiones clave.
            </p>
        </div>
        <button className='banner_button'>
           <a href='https://play.google.com/store/search?q=croppie&c=apps'>Descargar App</a> 
        </button>
        
    </div>
  )
}

export default Banner