import React, { useState } from 'react'
import './style.css'
import { useLanguage } from '../../LanguageContext';

const Card = () => {
  const { language} = useLanguage();
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
                <h4 className='modal_title'>{language === 'es' ?  '¿Qué es Croppie?' : ' What is it  Croppie?' }</h4>
                <div className='modal_contain'>

                    <article  className='modal_contain1' >
                      <img className='icons_cover' src="/illustrations/phonePhotoApp.svg" alt="phone-img" />
                      <p className='text_cover'>
                      {language === 'es' ?  'Croppie es una aplicación móvil diseñada para ayudar a los pequeños caficultores en sus decisiones clave. Utiliza IA para estimar el rendimiento de la producción de café, y ofrece recomendaciones basadas en el análisis de las prácticas agrícolas.' : 'Croppie is a mobile app designed to support decision making of smallholder coffee producers. It uses AI to estimate coffee yield and provides recommendations based on the analysis of farmers’ agricultural practices.' }
                      </p>

                    </article>
                    <article  className='modal_contain2'>
                      <div className='container_icons'>
                        <img className='image_icon' src="/icons/clockGreen.svg" alt="" />
                        <p className='text_icon'>{language === 'es' ?  '50% más rápido que métodos existentes' : ' 50% faster than existing methods' }</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="/icons/phoneGreen.svg" alt="" />
                        <p className='text_icon'> {language === 'es' ?  'Uso offline' : 'Offline use' }</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="/icons/cycleGreen.svg" alt="" />
                        <p className='text_icon'> {language === 'es' ?  'Estandarización del muestreos' : 'Standardized sampling' }</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="/icons/cameraGreen.svg" alt="" />
                        <p className='text_icon'> {language === 'es' ?  'Evidencia digital' : 'Digital evidence' }</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="/icons/pinGreen.svg" alt="" />
                        <p className='text_icon'> {language === 'es' ?  'Información georreferenciada para trazabilidad total' : 'Georeferenced information for full traceability' }</p>
                      </div>
                    </article>
                </div>
              
            </section>
        </div>
      )}
    </div>
    <p className='card_title'>
    {language === 'es' ?  '¿Qué es Croppie?' : ' What is it  Croppie?' }
    </p>

    <span className='card_btn' onClick={openModal}>
    {language === 'es' ?  ' Ver más' : 'View more' }
    </span>

  </div>
  )
}

export default Card