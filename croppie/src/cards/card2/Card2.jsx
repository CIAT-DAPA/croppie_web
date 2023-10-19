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
      setCurrentSlide((prevSlide) => (prevSlide < 3 ? prevSlide + 1 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < 3 ? prevSlide + 1 : 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 1 ? prevSlide - 1 : 3));
  };


  return (
    <div className='card_container2'>
    <div>
      {isModalVisible && (
        <div className='modal2'>
            {/* Contenido del modal este deberia pasarse por props */}
            <button className='btn-close' onClick={closeModal}>
                <img src="/icons/x.svg" alt="icono-x" />          
            </button>
            <section className='modal-section'>
                <h4 className='modal_title2'>Cómo  funciona</h4>
                <div className="slider-container">
      <button className="slider-button" onClick={prevSlide}>
      <img src="/icons/prev.svg" alt="" />
      </button>
      <div className={`slider-slide ${currentSlide === 1 ? 'active' : ''}`}>
       <div className='text-slide1'>
        <p>Proporcionamos un sencillo protocolo de muestreo basado en una aplicación móvil que utiliza inteligencia artificial (IA) para realizar recuentos de cerezas de café y estimar el rendimiento en las parcelas de las fincas cafeteras.</p>
       </div>
       <div  className='img-slide1'>
       <img  src="/steps/step1.svg" alt="arboles-img" />
       </div>
      </div>
      <div className={`slider-slide ${currentSlide === 2 ? 'active' : ''}`}>
      <img  className='img-slide2'  src="/steps/step234ES.svg" alt="arboles-img" />
      </div>
      <div className={`slider-slide ${currentSlide === 3 ? 'active' : ''}`}>
      <img  className='img-slide3'  src="/steps/calculation.svg" alt="arboles-img" />
      </div>
      <button className="slider-button" onClick={nextSlide}>
      <img src="/icons/next (1).svg" alt="" />
      </button>
    </div>
              
              
            </section>
        </div>
      )}
    </div>
    <p className='card_title2'>
    cómo funciona
    </p>

    <span className='card_btn2' onClick={openModal}>
      Ver más
    </span>

  </div>
  )
}

export default Card