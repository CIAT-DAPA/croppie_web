import React, { useState, useEffect } from 'react';
import './style.css'

const Card = () => {
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
    }, 500000);

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
            <section className='modal-section'>
              <h4 className='modal_title'>Tablero de instrumentos</h4>
                <div className="slider-container">
                 
                  <div className={`slider-slide ${currentSlide === 1 ? 'active' : ''}`}>
                  <div className='text-slide1'>
                    <p>El tablero de instrumentos propone recomendaciones y alertas sincronizadas con el calendario de manejo territorial en estos 10 momentos clave de la producción de café.</p>
                  </div>
                  <div   className='text-slide1'>
                  <p>Identificar el potencial de mejora en cada ciclo es crucial para obtener un café de alta calidad, optimizar el rendimiento de la plantación, fomentar la resiliencia y la sostenibilidad de las prácticas</p>
                  </div>
                  </div>
                  <div className={`slider-slide ${currentSlide === 2 ? 'active' : ''}`}>
                  <img  className='img-slide2'  src="/illustrations/dashboardES.svg" alt="arboles-img" />
                  </div>
                  <button className="slider-button-left" onClick={prevSlide}>
                    <img src="/icons/prev.svg" alt="" />
                  </button>
                  <button className="slider-button-right" onClick={nextSlide}>
                    <img src="/icons/next (1).svg" alt="" />
                  </button>
                </div>                
            </section>
        </div>
      )}
    </div>
    <p className='card_title'>
    dashboard
    </p>

    <span className='card_btn' onClick={openModal}>
      Ver más
    </span>

  </div>
  )
}

export default Card