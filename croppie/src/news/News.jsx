import React from 'react'
import './style.css'

const News = () => {
    return (
        <section className='containerNews'>
        <h2>Noticias y actualizacioness</h2>
        <div className='contaiNews'>
            <div>
                <h3>App CROPPIE </h3>
                <p>Croppie es una aplicación móvil diseñada para ayudar a los pequeños caficultores en sus decisiones clave.</p>
                <button><a href='https://play.google.com/store/search?q=croppie&c=apps' target='_black'>Descargar App</a></button>
                <span></span>
            </div>
            <img src="/icons/phone.svg" alt="" />
        

        </div>
        
    
        </section>
    )
}

export default News