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
                <img src="/icons/x.svg" alt="icono-x" />          
            </button>
            <section className='modal-section'>
                <h4 className='modal_title'>Casos de uso</h4>
                <section className='modal4_contain'>
                  <article className='contain_art1'>
                    <span> Productores</span>
                    <span>Cooperativas</span>
                    <span>Financieras</span>
                    <span>Aseguradoras</span>
                    <span>Exportadoras</span>
                  </article>
                  
                    <img className='icons-conet' src="/illustrations/actorConnections.png " alt="actors-img" />
                 
                  <article className='contain_art2'>
                    <p>Las cooperativas aseguran su rendimiento y planifican sus ventas.</p>
                    <p>Facilitar a los pequeños productores el acceso a préstamos y créditos.</p>
                    <p>Mejorar los productos de seguro basados en índices.</p>
                    <p>Evitar posible evasión de la ley de deforestación y tener una trazabilidad del café.</p>
                    <p>Asesoramiento agronómico personalizado.

                    </p>
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