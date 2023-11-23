import React, { useState, useEffect } from 'react';
import './style.css'
import { useLanguage } from '../../LanguageContext';

const Card = () => {
  const { language} = useLanguage();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentSlide2, setCurrentSlide2] = useState(1);

  const openModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide < 2 ? prevSlide + 1 : 1));
    }, 500000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < 2 ? prevSlide + 1 : 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 1 ? prevSlide - 1 : 2));
  };

  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentSlide2((prevSlide2) => (prevSlide2 < 3 ? prevSlide2 + 1 : 1));
    }, 500000);

    return () => clearInterval(interval2);
  }, []);

  const nextSlide2 = () => {
    setCurrentSlide2((prevSlide2) => (prevSlide2 < 3 ? prevSlide2 + 1 : 1));
  };

  const prevSlide2 = () => {
    setCurrentSlide2((prevSlide2) => (prevSlide2 > 1 ? prevSlide2 - 1 : 3));
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
            <section className='modal-section card3mb'>
              <h4 className='modal_title'>{language === 'es' ?  'Tablero de instrumentos' : 'Dashboard ' }</h4>
                <div className="slider-container">
                 
                  <div className={`slider-slide ${currentSlide === 1 ? 'active' : ''}`}>
                      <div className='text-slide1'>
                        <p>{language === 'es' ?  'propone recomendaciones y alertas sincronizadas con el calendario de manejo territorial en estos 10 momentos clave de la producción de café.' : 'The dashboard proposes recommendations and alerts synchronized with the local cropping calendars in  10 critical moments of coffee production.' }</p>
                      </div>
                      <div   className='text-slide1'>
                      <p>{language === 'es' ?  'Identificar el potencial de mejora en cada ciclo es crucial para obtener un café de alta calidad, optimizar el rendimiento de la plantación, fomentar la resiliencia y la sostenibilidad de las prácticas.' : 'Identifying the potential for improvement in each cycle is crucial to obtain high quality coffee, improving plantation performance, and increasing the resilience and sustainability of practices.' }</p>
                      </div>
                  </div>
                  <div className={`slider-slide ${currentSlide === 2 ? 'active' : ''}`}>
                  {language === 'es' ?  <img  className='img-slide2'  src="/illustrations/dashboardES.svg" alt="dashboard-img" /> :<img  className='img-slide2'  src="/illustrations/dashboardEN.svg" alt="dashboard-img" /> }
                
                  </div>
                  <button className="slider-button-left" onClick={prevSlide}>
                    <img src="/icons/prev.svg" alt="" />
                  </button>
                  <button className="slider-button-right" onClick={nextSlide}>
                    <img src="/icons/next (1).svg" alt="" />
                  </button>
                </div>                
            </section>
            <section className='modal-section1MB card3dt'>
              <h4 className='modal_title'>{language === 'es' ?  'Tablero de instrumentos' : 'Dashboard ' }</h4>
                <div className="slider-container">
                 
                  <div className={`slider-slide ${currentSlide2 === 1 ? 'active' : ''}`}>
                      <div className='text-slide1'>
                        <p>{language === 'es' ?  'El tablero de instrumentos propone recomendaciones y alertas sincronizadas con el calendario de manejo territorial en estos 10 momentos clave de la producción de café.Identificar el potencial de mejora en cada ciclo es crucial para obtener un café de alta calidad, optimizar el rendimiento de la plantación, fomentar la resiliencia y la sostenibilidad de las prácticas.' : 'The dashboard proposes recommendations and alerts synchronized with the local cropping calendars in  10 critical moments of coffee production.Identifying the potential for improvement in each cycle is crucial to obtain high quality coffee, improving plantation performance, and increasing the resilience and sustainability of practices.' }</p>
                      </div>
                  </div>
                  <div className={`slider-slide ${currentSlide2 === 2 ? 'active' : ''}`}>
                  {language === 'es' ?  <img  className='img-slide2'  src="/illustrations/dashboardMobile1ES.svg" alt="dashboard-img" /> :<img  className='img-slide2'  src="/illustrations/dashboardMobile1EN.svg" alt="dashboard-img" /> }
                  </div>

                  <div className={`slider-slide ${currentSlide2 === 3 ? 'active' : ''}`}>
                  {language === 'es' ?  <img  className='img-slide2'  src="/illustrations/dashboardMobile2ES.svg" alt="dashboard-img" /> :<img  className='img-slide2'  src="/illustrations/dashboardMobile2EN.svg" alt="dashboard-img" /> }
                
                  </div>
                  <button className="slider-button-left" onClick={prevSlide2}>
                    <img src="/icons/prev.svg" alt="" />
                  </button>
                  <button className="slider-button-right" onClick={nextSlide2}>
                    <img src="/icons/next (1).svg" alt="" />
                  </button>
                </div>                
            </section>
        </div>
      )}
    </div>
    <p className='card_title'>
    {language === 'es' ?  'Tablero de instrumentos' : 'Dashboard ' }
    </p>

    <span className='card_btn' onClick={openModal}>
      <div className='space'>c</div>
     
      {language === 'es' ?  ' Ver más' : 'View more' }
    </span>

  </div>
  )
}

export default Card