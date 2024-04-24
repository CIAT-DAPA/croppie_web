import React, { useState, useEffect } from 'react';
import './style.css'
import { useLanguage } from '../../LanguageContext';
import Modal from "../../modal/Modal.jsx";


const Card = () => {
  const { language } = useLanguage();
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


      <Modal isOpen={isModalVisible} onClose={closeModal}>

        <h4 className='modal_title'>{language === 'es' ? '¿Qué es Croppie?' : ' What is Croppie?'}</h4>

        <section className='modal_content content_large'>

          <article className='modal_detail' >
            <img className='icons_cover' src="illustrations/phonePhotoApp.png" alt="phone-img" />
            <div className='text_slide'>
              <p >
                {language === 'es' ? 'Croppie es una solución tecnológica basada en fotos y diseñada para ayudar a los pequeños caficultores en sus decisiones claves. Utiliza IA para estimar de manera rápida el rendimiento de la producción de café, y ofrece recomendaciones basadas en el análisis de las prácticas agrícolas.' : "Croppie is a picture-based yield estimate technological solution designed to support decision making of smallholder coffee producers. It leverages AI to quickly estimate coffee yield and provides tailored recommendations based on the analysis of farmers’ practices."}
              </p>
            </div>
          </article>

          <article className='modal_detail'>
            <div className='list_entry'>
              <img src="icons/clockGreen.svg" alt="" />
              <p >{language === 'es' ? '50% más rápido que métodos existentes' : ' 50% faster than existing methods'}</p>
            </div>
            <div className='list_entry'>
              <img src="icons/phoneGreen.svg" alt="" />
              <p > {language === 'es' ? 'Uso offline' : 'Offline use'}</p>
            </div>
            <div className='list_entry'>
              <img src="icons/cycleGreen.svg" alt="" />
              <p > {language === 'es' ? 'Estandarización del muestreos' : 'Standardized sampling'}</p>
            </div>
            <div className='list_entry'>
              <img src="icons/cameraGreen.svg" alt="" />
              <p > {language === 'es' ? 'Evidencia digital' : 'Digital evidence'}</p>
            </div>
            <div className='list_entry'>
              <img src="icons/pinGreen.svg" alt="" />
              <p > {language === 'es' ? 'Información georreferenciada para trazabilidad total' : 'Georeferenced information for full traceability'}</p>
            </div>
          </article>

        </section>


        <section className='modal_content content_small'>

          <div className="slider_container">
            <div className={`slider_slide ${currentSlide === 1 ? 'active' : ''}`}>
              <div className=' text_slide'>
                <p>
                  {language === 'es' ? 'Croppie es una aplicación móvil diseñada para ayudar a los pequeños caficultores en sus decisiones clave. Utiliza IA para estimar el rendimiento de la producción de café, y ofrece recomendaciones basadas en el análisis de las prácticas agrícolas.' : 'Croppie  is a picture-based yield estimate tech solution designed to support decision making of smallholder coffee producers. By leveraging AI technology, Croppie estimates coffee yield and provides recommendations based on the analysis of farmers’ agricultural practices to provide targeted recommendations, enabling them to optimise profitability and resilience amidst the challenges posed by climate change.'}
                </p>
              </div>


            </div>
            <div className={`slider_slide ${currentSlide === 2 ? 'active' : ''}`}>
              <article className='modal_detail'>
                <div className='list_entry'>
                  <img src="icons/clockGreen.svg" alt="" />
                  <p >{language === 'es' ? '50% más rápido que métodos existentes' : ' 50% faster than existing methods'}</p>
                </div>
                <div className='list_entry'>
                  <img src="icons/phoneGreen.svg" alt="" />
                  <p > {language === 'es' ? 'Uso offline' : 'Offline use'}</p>
                </div>
                <div className='list_entry'>
                  <img src="icons/cycleGreen.svg" alt="" />
                  <p > {language === 'es' ? 'Estandarización del muestreos' : 'Standardized sampling'}</p>
                </div>
                <div className='list_entry'>
                  <img src="icons/cameraGreen.svg" alt="" />
                  <p > {language === 'es' ? 'Evidencia digital' : 'Digital evidence'}</p>
                </div>
                <div className='list_entry'>
                  <img src="icons/pinGreen.svg" alt="" />
                  <p > {language === 'es' ? 'Información georreferenciada para trazabilidad total' : 'Georeferenced information for full traceability'}</p>
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


      </Modal>

      <p className='card_title'>
        {language === 'es' ? '¿Qué es Croppie?' : ' What is Croppie?'}
      </p>

      <span className='card_btn' onClick={openModal}>
        {language === 'es' ? ' Ver más' : 'View more'}
      </span>

    </div>
  )
}

export default Card