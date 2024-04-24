import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../LanguageContext';
import './style.css'
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
      setCurrentSlide((prevSlide) => (prevSlide < 3 ? prevSlide + 1 : 1));
    }, 5000000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < 3 ? prevSlide + 1 : 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 1 ? prevSlide - 1 : 3));
  };
  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentSlide2((prevSlide2) => (prevSlide2 < 7 ? prevSlide2 + 1 : 1));
    }, 500000);

    return () => clearInterval(interval2);
  }, []);

  const nextSlide2 = () => {
    setCurrentSlide2((prevSlide2) => (prevSlide2 < 7 ? prevSlide2 + 1 : 1));
  };

  const prevSlide2 = () => {
    setCurrentSlide2((prevSlide2) => (prevSlide2 > 1 ? prevSlide2 - 1 : 7));
  };


  return (
    <div className='card_container'>
      <Modal isOpen={isModalVisible} onClose={closeModal}>

        <h4 className='modal_title'>{language === 'es' ? '¿Cómo funciona?' : ' How it works?'}</h4>

        <section className='modal_content content_large'>

          <div className="slider_container">
            <div className={`slider_slide ${currentSlide === 1 ? 'active' : ''}`}>
              <div className='text_slide'>
                <p className='text_cover'> {language === 'es' ? 'Proporcionamos un sencillo protocolo de muestreo basado en una aplicación móvil que utiliza inteligencia artificial (IA) para realizar recuentos de cerezas de café y estimar el rendimiento en las parcelas de las fincas cafeteras.' : 'We provide both a simple Android standalone mobile application and chatbot (for Whatsapp, Facebook Messenger and Telegram) which guide the users through a sampling protocol in coffee farm plots to generate coffee yield estimates.'}</p>
              </div>
              <div className='img_slide'>
                {language === 'es' ?
                  <img src="steps/step1.svg" alt="step1-img" />
                  :
                  <img src="steps/step1EN.svg" alt="step1-img" />}
              </div>
            </div>
            <div className={`slider_slide ${currentSlide === 2 ? 'active' : ''}`}>
              <div className='img_slide'>
                {language === 'es' ? <img src="steps/step234ES.svg" alt="step234-img" />
                  : <img src="steps/step234EN.svg" alt="step234-img" />}
              </div>
            </div>
            <div className={`slider_slide ${currentSlide === 3 ? 'active' : ''}`}>
              <div className='img_slide'>
                {language === 'es' ? <img src="steps/calculation.svg" alt="step5-img" />
                  : <img src="steps/step5Yield.svg" alt="step5-img" />}
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
                <p>{language === 'es' ? 'Proporcionamos un sencillo protocolo de muestreo basado en una aplicación móvil que utiliza inteligencia artificial (IA) para realizar recuentos de cerezas de café y estimar el rendimiento en las parcelas de las fincas cafeteras.' : 'We provide both a simple Android standalone mobile application and chatbot (for Whatsapp, Facebook Messenger and Telegram) which guide the users through a sampling protocol in coffee farm plots to generate coffee yield estimates.'}</p>
              </div>
            </div>
            <div className={`slider_slide ${currentSlide2 === 2 ? 'active' : ''}`}>
              <div className='img_slide'>
                {language === 'es' ? <img src="steps/step1.svg" alt="dashboard-img" /> : <img src="steps/step1EN.svg" alt="dashboard-img" />}
              </div>
            </div>
            <div className={`slider_slide ${currentSlide2 === 3 ? 'active' : ''}`}>
              <div className='img_slide'>
                {language === 'es' ? <img src="steps/step2.svg" alt="dashboard-img" /> : <img src="steps/step2EN.svg" alt="dashboard-img" />}
              </div>
            </div>
            <div className={`slider_slide ${currentSlide2 === 4 ? 'active' : ''}`}>
              <div className='img_slide'>
                {language === 'es' ? <img src="steps/step3.svg" alt="dashboard-img" /> : <img src="steps/step3EN.svg" alt="dashboard-img" />}
              </div>
            </div>
            <div className={`slider_slide ${currentSlide2 === 5 ? 'active' : ''}`}>
              <div className='img_slide'>
                {language === 'es' ? <img src="steps/step4.svg" alt="dashboard-img" /> : <img src="steps/step4EN.svg" alt="dashboard-img" />}
              </div>
            </div>
            <div className={`slider_slide ${currentSlide2 === 6 ? 'active' : ''}`}>
              <div className='img_slide'>
                {language === 'es' ? <img src="steps/step5MobileES1.svg" alt="dashboard-img" /> : <img src="steps/step5MobileEN1.svg" alt="dashboard-img" />}
              </div>
            </div>
            <div className={`slider_slide ${currentSlide2 === 7 ? 'active' : ''}`}>
              <div className='img_slide'>
                {language === 'es' ? <img src="steps/step5MobileES2.svg" alt="dashboard-img" /> : <img src="steps/step5MobileEN2.svg" alt="dashboard-img" />}
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
        {language === 'es' ? '¿Cómo funciona?' : ' How it works?'}

      </p>

      <span className='card_btn' onClick={openModal}>
        {language === 'es' ? ' Ver más' : 'View more'}
      </span>

    </div>
  )
}

export default Card