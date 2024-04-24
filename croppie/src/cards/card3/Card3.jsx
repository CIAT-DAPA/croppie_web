import React, { useState, useEffect } from 'react';
import './style.css'
import { useLanguage } from '../../LanguageContext';
import Modal from '../../modal/Modal';

const Card = () => {
  const { language } = useLanguage();
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
      <Modal isOpen={isModalVisible} onClose={closeModal}>
        <h4 className='modal_title'>{language === 'es' ? 'Tablero de instrumentos' : 'Dashboard '}</h4>

        <section className='modal_content content_large'>

          <div className="slider_container">

            <div className={`slider_slide ${currentSlide === 1 ? 'active' : ''}`}>
              <div className='text_slide text_col'>
                <p>
                  <span>{language === 'es' ?
                    'propone recomendaciones y alertas sincronizadas con el calendario de manejo territorial en estos 10 momentos clave de la producción de café.' :
                    'The dashboard proposes recommendations and alerts synchronized with the local cropping calendars in  10 critical moments of coffee production.'
                  }
                  </span>
                  &nbsp;
                  <span>{language === 'es' ?
                    'Identificar el potencial de mejora en cada ciclo es crucial para obtener un café de alta calidad, optimizar el rendimiento de la plantación, fomentar la resiliencia y la sostenibilidad de las prácticas.' :
                    'Identifying the potential for improvement in each cycle is crucial to obtain high quality coffee, improving plantation performance, and increasing the resilience and sustainability of practices.'
                  }</span>
                </p>
              </div>
            </div>

            <div className={`slider_slide  ${currentSlide === 2 ? 'active' : ''}`}>
              <div className='img_slide'>
                {language === 'es' ? <img src="illustrations/dashboardES.png" alt="dashboard-img" /> : <img src="illustrations/dashboardEN.png" alt="dashboard-img" />}
              </div>
            </div>

            <button className="slider-button-left" onClick={prevSlide}>
              <img src="icons/prev.svg" alt="" />
            </button>
            <button className="slider-button-right" onClick={nextSlide}>
              <img src="icons/next (1).svg" alt="" />
            </button>
          </div>

        </section>
        <section className='modal_content content_small'>

          <div className="slider_container">

            <div className={`slider_slide ${currentSlide2 === 1 ? 'active' : ''}`}>
              <div className='text_slide'>
                <p>{language === 'es' ? 'El tablero de instrumentos propone recomendaciones y alertas sincronizadas con el calendario de manejo territorial en estos 10 momentos clave de la producción de café.Identificar el potencial de mejora en cada ciclo es crucial para obtener un café de alta calidad, optimizar el rendimiento de la plantación, fomentar la resiliencia y la sostenibilidad de las prácticas.' : 'The dashboard proposes recommendations and alerts synchronized with the local cropping calendars in  10 critical moments of coffee production. Identifying the potential for improvement in each cycle is crucial to obtain high quality coffee, improving plantation performance, and increasing the resilience and sustainability of practices.'}</p>
              </div>
            </div>
            <div className={`slider_slide ${currentSlide2 === 2 ? 'active' : ''}`}>
              <div className='img_slide'>
                {language === 'es' ? <img src="illustrations/dashboardMobile1ES.png" alt="dashboard-img" /> : <img src="illustrations/dashboardMobile1EN.png" alt="dashboard-img" />}
              </div>
            </div>
            <div className={`slider_slide ${currentSlide2 === 3 ? 'active' : ''}`}>
              <div className='img_slide'>
                {language === 'es' ? <img src="illustrations/dashboardMobile2ES.png" alt="dashboard-img" /> : <img src="illustrations/dashboardMobile2EN.png" alt="dashboard-img" />}
              </div>
            </div>
            <button className="slider-button-left" onClick={prevSlide2}>
              <img src="icons/prev.svg" alt="" />
            </button>
            <button className="slider-button-right" onClick={nextSlide2}>
              <img src="icons/next (1).svg" alt="" />
            </button>
          </div>
        </section>
      </Modal>
      <p className='card_title'>
        {language === 'es' ? 'Tablero de instrumentos' : 'Dashboard '}
      </p>

      <span className='card_btn' onClick={openModal}>
        {language === 'es' ? ' Ver más' : 'View more'}
      </span>

    </div>
  )
}

export default Card