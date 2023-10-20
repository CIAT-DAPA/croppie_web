import React from 'react'
import './style.css'



const AboutUs = () => {
  
  
  return (
    <div id="about-us" className='containerAbout'>
      
    <h2>Quiénes somos</h2> 
    <section className='articles' >
      <article>
        <div className='img-logo'>
          <a href='https://alliancebioversityciat.org/es' target="_blank">
            <img src="/logos/logoCiatEs.png" alt="logo-ciat" />
            <img className= "english" src="/logos/logoCiatEN.png" alt="logo-ciat" />
          </a>
        </div>
        <div>
            <p>
            La Alianza de Bioversity International y el Centro Internacional de Agricultura Tropical (CIAT) brinda soluciones científicas que aprovechan la biodiversidad agrícola y transforman los sistemas alimentarios de manera sostenible con el objetivo de preservar y proteger el medio ambiente.
            </p>
        </div>
      </article>
      <article>
      <div className='img-logo'>
      <a href='https://producersdirect.org/' target="_blank"><img className='img-producers' src="/logos/logoProducersDirect.png" alt="logo-producers-direct" /></a>
        </div>
        <div>
            <p>
            Producers Direct es fundada y dirigida por agricultores, tiene como objetivo crear nuevas oportunidades para el desarrollo de pequeños agricultores, en las que asuman el liderazgo y el desarrollo de soluciones innovadoras para enfrentar los desafíos del día a día en su labor.            </p>
        </div>
      </article>
      <article>
      <div className='img-logo'>
      <a href='https://tecnicafe.co/' target="_blank"><img src="/logos/logoTecnicafe.png" alt="logo-tecniafe" /></a></div>
        <div>
            <p>
            Tecnicafé, es una corporación mixta sin animo de lucro que ha sido creada como el Primer Parque Tecnológico abierto y global, ubicado en el departamento del Cauca en Colombia. Con el objetivo de realizar innovación transformativa en el mundo del café a través de la sostenibilidad.            </p>
        </div>
      </article>
    
    </section>
  
    </div>
  )
}

export default AboutUs