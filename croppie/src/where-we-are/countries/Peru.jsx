import React, { useState, useEffect } from 'react';
import './style.css'
import { useLanguage } from '../../LanguageContext';

const Peru = () => {
  const { language } = useLanguage();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  const openModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }
 
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
                  <div className='text-slide1p_pe'>
                    <h3 className="UgandaTitle" >{language === 'es' ?  ' Durante casi una década, hemos estado trabajando en Perú a través de Croppie. ' : 'From Croppie, we have worked in Peru for almost a decade.'}</h3>
                 
                    <p className="uganda" >{language === 'es' ?  ' Nuestro proyecto se enfoca en colaborar con diez cooperativas cafeteras para brindar apoyo a los pequeños agricultores y a sus organizaciones, permitiéndoles enfrentar de manera más efectiva el cambio climático. En la actualidad, seis cooperativas y más de 1.800 pequeños productores de café, ubicados en las regiones del Noreste y el Centro de Perú, ya están implementando Croppie.' : '  Our project focuses on collaboration with ten smallholder-owned coffee cooperatives to support small farmers and their organizations in order to be more resilient to climate change. Currently, six cooperatives and more than 1,800 small coffee growers, located in the North East and Central regions of Peru, are implementing Croppie. '}</p>
                  </div>
                  <div   className='text-slide1_pe'>
                  <p  className="uganda ">{language === 'es' ?  'Solamente la región Noreste del Perú abarca una producción del 40 % del total de café del país. Las Cooperativas Peruanas que participan en Croppie atienden a más de 9.000 agricultores que producen principalmente café arábica orgánico, además de otros cultivos como cacao, caña de azúcar y aguacate.' : 'Only the North East region of Peru produces 40% of the countrys total coffee production. Peruvian Cooperatives participating in Croppie serve more than 9,000 farmers who mainly produce arabica organic coffee and other crops such as cocoa, sugar cane, and avocado.'}</p>
                  </div>
                  </div>
                  

                </div>                
            </section>
        </div>
      )}
    </div>
            
            
    <button className='btn-country-col' onClick={openModal}>Perú</button>   
    
  </div>
  )
}

export default Peru