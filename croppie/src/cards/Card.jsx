import React, { useState } from 'react'
import './style.css'

const Card = ({ title}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }


  return (
    <div>     
    <div className='card_container'>
      <div>
        {isModalVisible && (
          <div className='modal'>
              {/* M0DAL 1 Contenido del modal este deberia pasarse por props */}
              <button onClick={closeModal}>
                  <img src="/icons/x.svg" alt="icono-x" />          
              </button>
              <section className='modal-section'>
                  <h4 className='modal_title'>{title}</h4>
                  <div className='modal_contain'>

                      <article  className='modal_contain1' >
                        <img className='icons_cover' src="/illustrations/phonePhotoApp.svg" alt="phone-img" />
                        <p className='text_cover'>Croppie es una aplicación móvil diseñada para ayudar a los pequeños caficultores en sus decisiones clave. Utiliza IA para estimar el rendimiento de la producción de café, y ofrece recomendaciones basadas en el análisis de las prácticas agrícolas.</p>

                      </article>
                      <article  className='modal_contain2'>
                        <div className='container_icons'>
                          <img className='image_icon' src="/icons/clockGreen.svg" alt="" />
                          <p className='text_icon'>50% más rápido que métodos existentes</p>
                        </div>
                        <div className='container_icons'>
                          <img className='image_icon' src="/icons/phoneGreen.svg" alt="" />
                          <p className='text_icon'>Uso offline</p>
                        </div>
                        <div className='container_icons'>
                          <img className='image_icon' src="/icons/cycleGreen.svg" alt="" />
                          <p className='text_icon'>Estandarización del muestreo</p>
                        </div>
                        <div className='container_icons'>
                          <img className='image_icon' src="/icons/cameraGreen.svg" alt="" />
                          <p className='text_icon'>Estandarización del muestreoEvidencia digital</p>
                        </div>
                        <div className='container_icons'>
                          <img className='image_icon' src="/icons/pinGreen.svg" alt="" />
                          <p className='text_icon'>Información georreferenciada para trazabilidad total</p>
                        </div>                  
                      </article>
                  </div>              
              </section>
              <section className='modal-section'>
                  <h4 className='modal_title'>{title}</h4>
                  <div className='modal_contain'>

                  </div>              
              </section>
          </div>
        )}
      </div>

      <p className='card_title'>
        {title}
      </p>

      <span className='card_btn' onClick={openModal}>
        Ver más
     </span>

      <div>
      {isModalVisible && (
          <div className='modal'>
              {/* MODAL 2 Contenido del modal este deberia pasarse por props */}
              <button onClick={closeModal}>
                  <img src="/icons/x.svg" alt="icono-x" />          
              </button>
              <section className='modal-section'>
                  <h4 className='modal_title'>{title}</h4>
                  <div className='modal_contain'>
                  
                      <article  className='modal_contain1' >
                        <p className='text_cover'>Proporcionamos un sencillo protocolo de muestreo basado en una aplicación móvil que utiliza inteligencia artificial (IA) para realizar recuentos de cerezas de café y estimar el rendimiento en las parcelas de las fincas cafeteras.</p>
                      </article>

                      <article  className='modal_contain2'>
                        <img className='icons_cover' src="/steps/step1.svg" alt="step1-img" />              
                      </article>

                      <article  className='modal_contain1'>
                        <img className='icons_cover' src="/steps/step2.svg" alt="step2-img" />                              
                      </article>

                      <article  className='modal_contain2'>
                        <img className='icons_cover' src="/steps/step3.svg" alt="step3-img" />          
                      </article>

                      <article  className='modal_contain1'>
                        <img className='icons_cover' src="/steps/step4.svg" alt="step4-img" />          
                      </article>

                      <article  className='modal_contain2'>
                        <img  src="/steps/yieldCalculationES.svg" alt="step5-img" />          
                      </article>
                  </div>         
              </section>
            </div>
        )}
      </div>

      <div>
      {isModalVisible && (
          <div className='modal'>
              {/*  MODAL 3 Contenido del modal este deberia pasarse por props */}
              <button onClick={closeModal}>
                  <img src="/icons/x.svg" alt="icono-x" />          
              </button>
              <section className='modal-section'>
                  <h4 className='modal_title'>{title}</h4>
                  <div className='modal_contain'>
                  
                      <article  className='modal_contain1' >
                        <p className='text_cover'>El tablero de instrumentos propone recomendaciones y alertas sincronizadas con el calendario de manejo territorial en estos 10 momentos clave de la producción de café.<br/> <br/>Identificar el potencial de mejora en cada ciclo es crucial para obtener un café de alta calidad, optimizar el rendimiento de la plantación, fomentar la resiliencia y la sostenibilidad de las prácticas </p>
                      </article>

                      <article  className='modal_contain2'>
                        <img className='icons_cover' src="/illustrations/dashboardES.svg" alt="step1-img" />              
                      </article>

                  </div>         
              </section>
            </div>
        )}
      </div>

      <div>
      {isModalVisible && (
          <div className='modal'>
              {/*  MODAL 4 Contenido del modal este deberia pasarse por props */}
              <button onClick={closeModal}>
                  <img src="/icons/x.svg" alt="icono-x" />          
              </button>
              <section className='modal-section'>
                  <h4 className='modal_title'>{title}</h4>
                  <div className='modal_contain'>
                      <article  className='modal_contain2'>
                        <img className='icons_cover' src="/illustrations/actorsConnectionsText.svg" alt="actors-img" />              
                      </article>

                  </div>         
              </section>
            </div>
        )}
      </div>

      <div>
      {isModalVisible && (
          <div className='modal'>
              {/*  MODAL 5 Contenido del modal este deberia pasarse por props */}
              <button onClick={closeModal}>
                  <img src="/icons/x.svg" alt="icono-x" />          
              </button>
              <section className='modal-section'>
                  <h4 className='modal_title'>{title}</h4>
                  <div className='modal_contain'>     
                  
                      <article  className='modal_contain2' >
                          <div className='container_icons'>
                            <img className='image_icon' src="/icons/coffeeSeed.svg" alt="coffee-img" />
                            <p className='text_icon'>50% más rápido que métodos existentesConjunto de datos fotográficos de entrenamiento de cerezas etiquetadas</p>
                          </div>
                          <div className='container_icons'>
                            <img className='image_icon' src="/icons/coffeeSeed.svg" alt="coffee-img" />
                            <p className='text_icon'>Modelo de IA entrenado y validado</p>
                          </div>
                      </article>

                      <article  className='modal_contain2' >
                          <div className='container_icons'>
                            <img className='image_icon' src="/icons/coffeeSeed.svg" alt="coffee-img" />
                            <p className='text_icon'>2200 agricultores que reciben asesoramiento digital</p>
                          </div>
                          <div className='container_icons'>
                            <img className='image_icon' src="/icons/coffeeSeed.svg" alt="coffee-img" />
                            <p className='text_icon'>Publicaciones científicas y técnicas</p>
                          </div>
                          <div className='container_icons'>
                            <img className='image_icon' src="/icons/coffeeSeed.svg" alt="coffee-img" />
                            <p className='text_icon'>API para terceros</p>
                          </div>    
                      </article>

                     
                  </div>         
              </section>
            </div>
        )}
      </div>
      
    </div>
  </div>
  )
}

export default Card