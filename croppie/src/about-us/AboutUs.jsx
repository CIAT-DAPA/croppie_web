import React from 'react'
import './style.css'



const AboutUs = () => {
  
  
  return (
    <section className='containerAbout'>
      <h2>Quiénes somos</h2>
      <article>
        <img src="/logos/logoCiat.svg" alt="" />
        <div>
          <span>
            CIAT:
            </span>
            <p>
            La Alianza de Bioversity International y el Centro Internacional de Agricultura Tropical (CIAT) brinda soluciones científicas que aprovechan la biodiversidad agrícola y transforman los sistemas alimentarios de manera sostenible con el objetivo de preservar y proteger el medio ambiente.

            </p>
          </div>
      </article>
      <div className='containerAbout_btn'>
        <button>Producers Direct</button>
        <button>Tecnicafé</button>
      </div>
   
    </section>
  )
}

export default AboutUs