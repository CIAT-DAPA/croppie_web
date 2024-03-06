import React, { useState, useEffect } from 'react';
import './style.css'
import { useLanguage } from '../../LanguageContext';

const Card = () => {
  const { language} = useLanguage();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  const openModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide < 2 ? prevSlide + 1 : 1));
    }, 5000000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < 2 ? prevSlide + 1 : 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 1 ? prevSlide - 1 : 2));
  };


  return (
    <div className='card_container'>
    <div>
      {isModalVisible && (
        <div className='modal'>
            {/* Contenido del modal este deberia pasarse por props */}
            <button className='btn-close' onClick={closeModal}>
                X
            </button>
            <section className='modal-section modal-sectionmb'>
                <h4 className='modal_title'>{language === 'es' ?  '¿Qué es Croppie?' : ' What is it  Croppie?' }</h4>
                <div className='modal_contain'>

                    <article  className='modal_contain1' >
                      <img className='icons_cover' src="illustrations/phonePhotoApp.png" alt="phone-img" />
                      <p className='text_cover'>
                      {language === 'es' ?  'Croppie es una aplicación móvil diseñada para ayudar a los pequeños caficultores en sus decisiones clave. Utiliza IA para estimar el rendimiento de la producción de café, y ofrece recomendaciones basadas en el análisis de las prácticas agrícolas.' : 'Croppie is a mobile app designed to support decision making of smallholder coffee producers. It uses AI to estimate coffee yield and provides recommendations based on the analysis of farmers’ agricultural practices.' }
                      </p>

                    </article>
                    <article  className='modal_contain2'>
                      <div className='container_icons'>
                        <img className='image_icon' src="icons/clockGreen.svg" alt="" />
                        <p className='text_icon'>{language === 'es' ?  '50% más rápido que métodos existentes' : ' 50% faster than existing methods' }</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="icons/phoneGreen.svg" alt="" />
                        <p className='text_icon'> {language === 'es' ?  'Uso offline' : 'Offline use' }</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="icons/cycleGreen.svg" alt="" />
                        <p className='text_icon'> {language === 'es' ?  'Estandarización del muestreos' : 'Standardized sampling' }</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="icons/cameraGreen.svg" alt="" />
                        <p className='text_icon'> {language === 'es' ?  'Evidencia digital' : 'Digital evidence' }</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="icons/pinGreen.svg" alt="" />
                        <p className='text_icon'> {language === 'es' ?  'Información georreferenciada para trazabilidad total' : 'Georeferenced information for full traceability' }</p>
                      </div>
                    </article>
                </div>
              
            </section>
            <section className='modal-section1MB'>
                <h4 className='modal_title'>{language === 'es' ?  '¿Qué es Croppie?' : ' What is it  Croppie?' }</h4>
                <div className="slider-container">
                    <div className={`slider-slide_1mb ${currentSlide === 1 ? 'active' : ''}`}>
                    <div className=' text-slide_1'>
                    <p>
                      {language === 'es' ?  'Croppie es una aplicación móvil diseñada para ayudar a los pequeños caficultores en sus decisiones clave. Utiliza IA para estimar el rendimiento de la producción de café, y ofrece recomendaciones basadas en el análisis de las prácticas agrícolas.' : 'Croppie is a mobile app designed to support decision making of smallholder coffee producers. It uses AI to estimate coffee yield and provides recommendations based on the analysis of farmers’ agricultural practices.' }
                      </p>
                    </div>
                          
                    
                    </div>
                    <div className={`slider-slide ${currentSlide === 2 ? 'active' : ''}`}>
                    <article  className='modal_contain2'>
                      <div className='container_icons'>
                        <img className='image_icon' src="icons/clockGreen.svg" alt="" />
                        <p className='text_icon'>{language === 'es' ?  '50% más rápido que métodos existentes' : ' 50% faster than existing methods' }</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="icons/phoneGreen.svg" alt="" />
                        <p className='text_icon'> {language === 'es' ?  'Uso offline' : 'Offline use' }</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="icons/cycleGreen.svg" alt="" />
                        <p className='text_icon'> {language === 'es' ?  'Estandarización del muestreos' : 'Standardized sampling' }</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="icons/cameraGreen.svg" alt="" />
                        <p className='text_icon'> {language === 'es' ?  'Evidencia digital' : 'Digital evidence' }</p>
                      </div>
                      <div className='container_icons'>
                        <img className='image_icon' src="icons/pinGreen.svg" alt="" />
                        <p className='text_icon'> {language === 'es' ?  'Información georreferenciada para trazabilidad total' : 'Georeferenced information for full traceability' }</p>
                      </div>
                    </article>
                  

                    </div>
                

                    <button className="slider-button-left" onClick={prevSlide}>
                    <img src="icons/prev.svg" alt="" />
                    </button>
                    <button className="slider-button-right" onClick={nextSlide}>
                    <img src="icons/next (1).svg" alt="" />
                    </button>
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