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
            <button className='btn-close' onClick={closeModal}>
                <img src="/icons/x.svg" alt="icono-x" />          
            </button>
            <section className='modal-section'>
                <h4 className='modal_title'>Open data</h4>
                <section className='modal5_contain'>
                  <article>
                    <div>
                      <img src="/icons/coffeeSeed.svg" alt="coffeSeed" />
                      <p>Conjunto de datos fotográficos de entrenamiento de cerezas etiquetadas</p>
                    </div>
                    <div>
                    <img src="/icons/coffeeSeed.svg" alt="coffeSeed" />
                      <p>Modelo de IA entrenado y validado</p>
                    </div>
                    <div>
                    <img src="/icons/coffeeSeed.svg" alt="coffeSeed" />
                      <p>  Publicaciones científicas y técnicas</p>
                    </div>                   
                  </article>

                  <article >
                    <div>
                    <img src="/icons/coffeeSeed.svg" alt="coffeSeed" />
                      <p>2200 agricultores que reciben asesoramiento digital</p>
                    </div>
                    <div>
                    <img src="/icons/coffeeSeed.svg" alt="coffeSeed" />
                      <p> API para terceros</p>
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

    <span className='card_btn' onClick={openModal}>
      Ver más
    </span>

  </div>
  )
}

export default Card