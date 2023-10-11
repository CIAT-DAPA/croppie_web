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


  return (
    <div className='card_container2'>
    <div>
      {isModalVisible && (
        <div className='modal2'>
            {/* Contenido del modal este deberia pasarse por props */}
            <button onClick={closeModal}>
                <img src="/icons/x.svg" alt="icono-x" />          
            </button>
            <section className='modal-section'>
                <h4 className='modal_title2'>cómo 
funciona</h4>
               
              
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