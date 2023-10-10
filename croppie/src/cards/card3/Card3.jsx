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
    <div className='card_container'>
    <div>
      {isModalVisible && (
        <div className='modal'>
            {/* Contenido del modal este deberia pasarse por props */}
            <button onClick={closeModal}>
                <img src="/icons/x.svg" alt="icono-x" />          
            </button>
            <section className='modal-section'>
                <h4 className='modal_title'>tablero de
instrumentos</h4>
                
            </section>
        </div>
      )}
    </div>
    <p className='card_title'>
    tablero de
instrumentos
    </p>

    <span className='card_btn' onClick={openModal}>
      Ver más
    </span>

  </div>
  )
}

export default Card