import React, { useState } from 'react'
import './style.css'

const Card = () => {
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
                <h4 className='modal_title'>Casos de uso</h4>
                <section className='modal4_contain'>
                  <article className='contain_art1'>
                  <img className='icons-conet' src="/illustrations/useCasesES.svg " alt="actors-img" />
                  <img className='icons-conet english' src="/illustrations/useCasesEN.svg " alt="actors-img" />
                  </article>

                </section>
                
              
            </section>
        </div>
      )}
    </div>
    <p className='card_title'>
    casos de uso
    </p>

    <span className='card_btn' onClick={openModal}>
      Ver más
    </span>

  </div>
  )
}

export default Card