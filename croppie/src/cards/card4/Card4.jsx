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
            <section className='modal-section card4mb'>
                <h4 className='modal_title'>{language === 'es' ?  'Casos de uso ' : 'Use cases' }</h4>
                <section className='modal4_contain'>
                  <article className='contain_art1'>
                  {language === 'es' ? <img className='icons-conet' src="illustrations/useCasesES.png " alt="actors-img" /> :<img className='icons-conet2' src="illustrations/useCasesEN.png " alt="actors-img" /> }
                  
                  </article>

                </section>
                
              
            </section>
            <section className='modal-section1MB'>
              <h4 className='modal_title'>{language === 'es' ?  'Casos de uso ' : 'Use cases' }</h4>
                <div className="slider-container">
                  <div className={`slider-slide_2mb ${currentSlide === 1 ? 'active' : ''}`}>
                  <article>
                    <div>
                      <img src="icons/producerGreen.svg" alt="coffeSeed" />
                      <p>{language === 'es' ?  'Productores: Asesoramiento agronómico personalizado.' : 'Producers: Personalized agronomic advice.' }</p>
                    </div>
                    <div>
                    <img src="icons/handsGreen.svg" alt="coffeSeed" />
                      <p>{language === 'es' ?  'Cooperativas: Las cooperativas aseguran su rendimiento y planifican sus ventas.' : 'Cooperatives: Cooperatives ensure their performance and plan their sales.' }</p>
                    </div>
                    <div>
                    <img src="icons/moneyGreen.svg" alt="coffeSeed" />
                      <p>{language === 'es' ?  ' Financieras: Facilitar a los pequeños productores el acceso a préstamos y créditos.' : 'Financial Institutions: Facilitate access to loans and credit for small-scale producers.' }</p>
                    </div>                   
                  </article>
                  </div>
                  <div className={`slider-slide_2mb ${currentSlide === 2 ? 'active' : ''}`}>
                  <article>
                    <div>
                      <img src="icons/shieldGreen.svg" alt="coffeSeed" />
                      <p>{language === 'es' ?  'Aseguradoras: Mejorar los productos de seguro basados en índices.' : 'Insurers: Enhance index-based insurance products.' }</p>
                    </div>
                    <div>
                    <img src="icons/exportGreen.svg" alt="coffeSeed" />
                      <p>{language === 'es' ?  'Exportadoras: Evitar posible evasión de la ley de deforestación y tener una trazabilidad del café.' : 'Exporters: Prevent potential evasion of the deforestation law and maintain traceability of coffee.' }</p>
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
    {language === 'es' ?  'Casos de uso ' : 'Use cases' }
    </p>

    <span className='card_btn' onClick={openModal}>
    <div className='space'>c</div>
    {language === 'es' ?  ' Ver más' : 'View more' }
    </span>

  </div>
  )
}

export default Card