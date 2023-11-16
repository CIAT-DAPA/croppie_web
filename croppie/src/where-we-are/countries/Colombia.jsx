import React, { useState, useEffect } from 'react';
import './style.css'
import { useLanguage } from '../../LanguageContext';

const Colombia = () => {
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
                    <h3>{language === 'es' ?  ' Colombia: caficultoras del departamento del Cauca' : ' Colombia: Coffee Farmers from Cauca'}</h3>
                 
                    <p>{language === 'es' ?  'Las caficultoras hacen parte de la Asociación de Mujeres Caficultoras del Cauca, AMUCC, una organización de base, sin ánimo de lucro, con enfoque de género, que está integrada por 487 mujeres productoras de café.' : 'The Association of Women Coffee Farmers of Cauca, AMUCC by its acronym in Spanish, is a non-profit grassroots organization that has a gender focus. It is made up of 487 women coffee farmers.'}</p>
                  </div>
                  <div   className='text-slide1_pe'>
                  <p>{language === 'es' ?  'En Croppie participan 323 caficultoras de esta organización de los municipios de Cajibio, Corinto, Morales, Piendamó, Popayán, El Tambo y Timbío. Las caficultoras se encuentran en su mayoría en un rango etario entre los 46 y 55 años de edad, con un nivel de educación en su mayoría de primaria incompleta.' : 'Currently, 323 coffee farmers from this organization participate in Croppie, women from the municipalities of Cajibío, Corinto, Morales, Piendamó, Popayán, El Tambo and Timbío. Most of the coffee farmers are between 46 and 55 years old, and their educational level, in most cases, does not exceed primary school.'}</p>
                  </div>
                  </div>
                  <div className={`slider-slide-pe ${currentSlide === 2 ? 'active' : ''}`}>
                  <div className='text-slide1_pe'>
                  <h3>{language === 'es' ?  ' Colombia: caficultoras del departamento del Quindío' : ' Colombia: Coffee Farmers from Quindío'}</h3>
                  <p>{language === 'es' ?  ' Los caficultores en su mayoría se encuentran en un rango etario entre los 46 y 55 años de edad, con un nivel de educación en su mayoría de primaria completa.' : 'The majority of coffee farmers are in the age range between 46 and 55 years old, and their educational level is, for the most part, completed primary school.' }</p>
                 
                  </div>
                  <div   className='text-slide1_pe'>
                  <p>{language === 'es' ?  'En Croppie participan 250 caficultores, todos ubicados geográficamente, en el municipio de Génova, un municipio caficultor cuya actividad cafetera se concentra entre los 1700 a 1850 msnm, siendo el primer municipio caficultor en el departamento de Quindío. De los 250 productores, 184 son mujeres y 66 son hombres, principalmente las mujeres caficultoras hacen parte de la Asociación Aromas del Campo, hoy con marca propia registrada como Asociación de Chapoleras del municipio de Génova en el departamento de Quindío.' : 'Nowadays, 250 coffee farmers participate in Croppie, all geographically located in Génova. This is the first coffee-growing municipality in the department of Quindío, since its coffee activities are concentrated between 1,700 and 1,800 meters above sea level.Of the 250 coffee producers, 184 are women and 66 are men. Mainly, women coffee farmers are part of the Aromas del Campo Association, an organization with its own brand registered as the Association of Chapoleras of the municipality of Génova, in the department of Quindío.'}
                   </p>
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
            
            
    <button className='btn-country-col' onClick={openModal}>Colombia</button>   
    
  </div>
  )
}

export default Colombia