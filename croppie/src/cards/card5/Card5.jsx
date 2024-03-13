import React, { useState } from 'react'
import './style.css'
import { useLanguage } from '../../LanguageContext';

const Card = () => {
  const { language} = useLanguage();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }


  return (
    <div className='card_container' >
    <div>
      {isModalVisible && (
        <div className='modal'>
            {/* Contenido del modal este deberia pasarse por props */}
            <button className='btn-close' onClick={closeModal}>
              X     
            </button>
            <section className='modal-section'>
                <h4 className='modal_title'>Open data</h4>
                <section className='modal5_contain'>
                  <article>
                    <div>
                      <img src="icons/coffeeSeed.svg" alt="coffeSeed" />
                      <p>{language === 'es' ?  'Conjunto de datos fotográficos de entrenamiento de cerezas etiquetadas.' : 'Photo training data set of labelled cherries' }</p>
                    </div>
                    <div>
                    <img src="icons/coffeeSeed.svg" alt="coffeSeed" />
                      <p>{language === 'es' ?  'Modelo de IA entrenado y validado.' : 'Trained and validated AI model' }</p>
                    </div>           
                    <div>
                    <img src="icons/coffeeSeed.svg" alt="coffeSeed" />
                      <p>{language === 'es' ?  ' Publicaciones científicas y técnicas.' : 'Scientific and Technical Publications' }</p>
                    </div>        
                    {/* <div>
                    <img src="icons/coffeeSeed.svg" alt="coffeSeed" />
                      <p>{language === 'es' ?  '2200 agricultores que reciben asesoramiento digital.' : '2200 farmers received digital advisory.' }</p>
                    </div> */}
                    <div>
                    <img src="icons/coffeeSeed.svg" alt="coffeSeed" />
                      <p> {language === 'es' ?  'API para terceros.' : 'API for external access and collaboration.' }</p>
                    </div>
                    <div>
                    </div>
                  </article>
                </section>
            </section>
        </div>
      )}
    </div>
    <p className='card_title'>

    Open data

    </p>

    <span className='card_btn' onClick={openModal} >
      <div className='space'>  c </div>
      {language === 'es' ?  ' Ver más' : 'View more' }
    </span>

  </div>
  )
}

export default Card