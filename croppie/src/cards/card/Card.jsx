import React, { useState } from 'react'
import './style.css'

const Card = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }


  return (
    <div className='card_container'>
    <div>
      {isModalVisible && (
        <div className='modal'>
            {/* Contenido del modal este deberia pasarse por props */}
            <button className='btn-close' onClick={closeModal}>
               X
            </button>
            <section className='modal-section'>
                <h4 className='modal_title'>Qué es 
Croppie</h4>
                <div className='modal_contain'>

                    <article  className='modal_contain1' >
                      <img className='icons_cover' src="/illustrations/phonePhotoApp.svg" alt="phone-img" />
                      <p className='text_cover'>Croppie es una aplicación móvil diseñada para ayudar a los pequeños caficultores en sus decisiones clave. Utiliza IA para estimar el rendimiento de la producción de café, y ofrece recomendaciones basadas en el análisis de las prácticas agrícolas.</p>

                    </article>
                    <article  className='modal_contain2'>
                      <div className='container_icons'>
                        <img className='image_icon' src="/icons/clockGreen.svg" alt="" />
                        <p className='text_icon'>50% más rápido que métodos existentes</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="/icons/phoneGreen.svg" alt="" />
                        <p className='text_icon'>Uso offline</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="/icons/cycleGreen.svg" alt="" />
                        <p className='text_icon'>Estandarización del muestreos</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="/icons/cameraGreen.svg" alt="" />
                        <p className='text_icon'>Evidencia digital</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="/icons/pinGreen.svg" alt="" />
                        <p className='text_icon'>Información georreferenciada para trazabilidad total</p>
                      </div>
                    </article>
                </div>
              
            </section>
        </div>
      )}
    </div>
    <p className='card_title'>
    qué es 
croppie
    </p>

    <span className='card_btn' onClick={openModal}>
      Ver más
    </span>

  </div>
  )
}

export default Card