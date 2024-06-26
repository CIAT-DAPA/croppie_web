import React, { useState, useEffect } from 'react';
import './style.css'
import { useLanguage } from '../../LanguageContext';
import Modal from '../../modal/Modal';

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
      <Modal isOpen={isModalVisible} onClose={closeModal}>
        <h4 className='modal_title'>{language === 'es' ? 'Casos de uso ' : 'Use cases'}</h4>
        <section className='modal_content content_large'>

          <section className='modal_section'>
            <div className='img_slide'>
              {language === 'es' ? <img src="illustrations/useCasesES.png " alt="actors-img" /> : <img src="illustrations/useCasesEN.png " alt="actors-img" />}
            </div>


          </section>


        </section>
        <section className='modal_content content_small'>

          <div className="slider_container">
            <div className={`slider_slide ${currentSlide === 1 ? 'active' : ''}`}>
              <article>
                <div className='list_entry'>
                  <img src="icons/producerGreen.svg" alt="coffeSeed" />
                  <p>{language === 'es' ? 'Productores: Asesoramiento agronómico personalizado.' : 'Producers: Personalized agronomic advice.'}</p>
                </div>
                <div className='list_entry'>
                  <img src="icons/handsGreen.svg" alt="coffeSeed" />
                  <p>{language === 'es' ? 'Cooperativas: Las cooperativas aseguran su rendimiento y planifican sus ventas.' : 'Cooperatives: Cooperatives ensure their performance and plan their sales.'}</p>
                </div>
                <div className='list_entry'>
                  <img src="icons/moneyGreen.svg" alt="coffeSeed" />
                  <p>{language === 'es' ? ' Financieras: Facilitar a los pequeños productores el acceso a préstamos y créditos.' : 'Financial Institutions: Facilitate access to loans and credit for small-scale producers.'}</p>
                </div>
              </article>
            </div>
            <div className={`slider_slide ${currentSlide === 2 ? 'active' : ''}`}>
              <article>
                <div className='list_entry'>
                  <img src="icons/shieldGreen.svg" alt="coffeSeed" />
                  <p>{language === 'es' ? 'Aseguradoras: Mejorar los productos de seguro basados en índices.' : 'Insurers: Enhance index-based insurance products.'}</p>
                </div>
                <div className='list_entry'>
                  <img src="icons/exportGreen.svg" alt="coffeSeed" />
                  <p>{language === 'es' ? 'Exportadoras: Evitar posible evasión de la regulación europea de deforestación (EUDR) y tener una trazabilidad del café (incluyendo huellas carbono/ambiental).' : 'Exporters: Prevent potential evasion of the European deforestation regulation (EUDR) and support traceability of coffee (carbon/environmental footprints).'}</p>
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
        {language === 'es' ? 'Casos de uso ' : 'Use cases'}
      </p>

      <span className='card_btn' onClick={openModal}>

        {language === 'es' ? ' Ver más' : 'View more'}
      </span>

    </div>
  )
}

export default Card