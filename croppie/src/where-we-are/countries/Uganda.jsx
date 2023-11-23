import React, { useState, useEffect } from 'react';
import './style.css'
import { useLanguage } from '../../LanguageContext';

const Uganda = () => {
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
    <div>
    <div>
      {isModalVisible && (
        <div className='modal_pe'>
            <button className='btn-close-pe' onClick={closeModal}>
             X
            </button>
            <section className='modal-section-pe'>
             
                <div className="slider-container-pe">
                 
                  <div className={`slider-slide-pe ${currentSlide === 1 ? 'active' : ''}`}> 
                  <div className='text-slide1_pe'>
                    <h3 className="UgandaTitle" >{language === 'es' ?  ' El equipo de Cropppie se ha asociado con otras organizaciones e instituciones de productores que se encuentran en el este y el oeste de Uganda con el fin de desarrollar y probar la aplicación de Croppie' : 'The Croppie team has partnered with producer organizations and institutions based in Eastern and Western Uganda in the development and testing of the Croppie application.'}</h3>
                 
                    <p className="uganda" >{language === 'es' ?  'En el este de Uganda nos hemos asociado con M-Omulimisa Innovative Agriculture Services (MO), una empresa de tecnología agrícola que aprovecha la tecnología móvil, las redes de agricultores y las asociaciones para brindar a los pequeños agricultores un conjunto de servicios relacionados con su labor. A través de MO, estamos colaborando con Bushika Intergrated Area Cooperative Enterprise (BIACE, por sus siglas en inglés), una organización de productores en el este de Uganda ubicada en el sub-condado de Bushika. En MO, cuentan con una membresía de 3.040 productores de café arábica.' : ' In Eastern Uganda we have partnered with M- Omulimisa Innovative Agricultural Services (MO), which is an agriculture technology company that leverages mobile technology, farmer networks, and partnerships to provide a bundle of agriculture- related services to smallholder farmers. Through MO, we are collaborating with a producer organization in Eastern Uganda called Bushika Integrated Area Cooperative Enterprise (BIACE), which is located in Bushika sub-county.'}</p>
                  </div>
                  <div   className='text-slide1_pe'>
                  <p  className="uganda noneU">{language === 'es' ?  'Actualmente, estamos trabajando en conjunto con 100 agricultores de BIACE en el desarrollo de la aplicación Croppie; este trabajo incluye actividades de recopilación de datos para ayudar a alimentar el algoritmo y mejorar la precisión de la IA, además de involucrar a estos agricultores en el desarrollo y prueba de los consejos agronómicos del café. BIACE también cuenta con la certificación de comercio justo (Fairtrade) y está en proceso de evaluación para la certificación orgánica.' : 'They have a farmer membership of 3040 arabica coffee farmers. Currently, we are working with 100 BIACE farmers in the development of the Croppie application which includes data collection activities to help feed the algorithm and improve the AI accuracy and also engaging these farmers in the development and testing of the agronomic coffee tips. BIACE is also Fair trade certified and in the process of being assessed for organic certification. '}</p>
                  </div>
                  </div>
                  <div className={`slider-slide-pe ${currentSlide === 2 ? 'active' : ''}`}>
                  <div   className='text-slide1_pe noneUM'>
                  <p  className="uganda noneUM">{language === 'es' ?  'Actualmente, estamos trabajando en conjunto con 100 agricultores de BIACE en el desarrollo de la aplicación Croppie; este trabajo incluye actividades de recopilación de datos para ayudar a alimentar el algoritmo y mejorar la precisión de la IA, además de involucrar a estos agricultores en el desarrollo y prueba de los consejos agronómicos del café. BIACE también cuenta con la certificación de comercio justo (Fairtrade) y está en proceso de evaluación para la certificación orgánica.' : 'They have a farmer membership of 3040 arabica coffee farmers. Currently, we are working with 100 BIACE farmers in the development of the Croppie application which includes data collection activities to help feed the algorithm and improve the AI accuracy and also engaging these farmers in the development and testing of the agronomic coffee tips. BIACE is also Fair trade certified and in the process of being assessed for organic certification. '}</p>
                  </div>
                  <div className='text-slide1_pe'>
                  <p  className="uganda">{language === 'en' ?  ' In Western Uganda we have partnered with Ankole Coffee Producers Cooperative Union (ACPCU) which is located at Kabwohe, Bushenyi District, and has a total of 16,000 robusta coffee farmers. We are collaborating with ACPCU to implement similar Croppie development activities in Western Uganda, and have engaged a total of 150 ACPCU farmer members for these activities. Additionally, ACPCU has obtained the following coffee certifications: Fairtrade, Rainforest alliance, ISO22000, UNBS, JAS, NOP, and Naturland.' : 'En Uganda occidental nos hemos asociado con la Unión Cooperativa de Productores de Café Ankole (ACPCU, por sus siglas en inglés), que está ubicada en Kabwohe, distrito de Bushenyi, y cuenta con un total de 16.000 productores de café robusta. El objetivo de esta colaboración es implementar actividades de desarrollo similares a las de Croppie en el oeste de Uganda. Para el desarrollo de estas actividades hemos involucrado a un total de 150 agricultores miembros de la ACPCU. Adicionalmente, la ACPCU ha obtenido certificaciones de café como la de Fairtrade, Rainforest Alliance, ISO22000, UNBS, JAS, NOP y Naturland.' }</p>
                 
                  </div>
                  
                  </div>
                  <button className="slider-button-left-pe" onClick={prevSlide}>
                    <img src="/icons/prev.svg" alt="" />
                  </button>
                  <button className="slider-button-right-pe" onClick={nextSlide}>
                    <img src="/icons/next (1).svg" alt="" />
                  </button>
                </div>                
            </section>
        </div>
      )}
    </div>
            
            
    <button className='btn-country-col' onClick={openModal}>Uganda</button>   
    
  </div>
  )
}

export default Uganda