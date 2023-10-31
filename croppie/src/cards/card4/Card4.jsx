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
  /*   */


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
                <h4 className='modal_title'>{language === 'es' ?  'Casos de uso ' : 'Use cases' }</h4>
                <section className='modal4_contain'>
                  <article className='contain_art1'>
                  {language === 'es' ? <img className='icons-conet' src="/illustrations/useCasesES.svg " alt="actors-img" /> :<img className='icons-conet2' src="/illustrations/useCasesEN.svg " alt="actors-img" /> }
                  
                  </article>

                </section>
                
              
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