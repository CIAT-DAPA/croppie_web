import React from 'react'
import './style.css'
import { useLanguage } from '../LanguageContext';


const AboutUs = () => {
  const { language} = useLanguage();
  
  
  return (
    <section id="about-us" className='containerAbout'>
      
    <h2> {language === 'es' ?  'Quiénes somos' : ' About us' }</h2> 
    <section className='articles' >
      <article>
        <div className='img-logo'>
          <a href='https://alliancebioversityciat.org/es' target="_blank">
            {language === 'es' ?  <img className='logoCiat' src="logos/logoCiatEs.png" alt="logo-ciat" /> : 
            <img className='logoCiat'  src="logos/logoCiatEN.png" alt="logo-ciat" /> }

          </a>
        </div>
        <div>
            <p className='text'>
            {language === 'es' ?  ' La Alianza de Bioversity International y el Centro Internacional de Agricultura Tropical (CIAT) brinda soluciones científicas que aprovechan la biodiversidad agrícola y transforman los sistemas alimentarios de manera sostenible con el objetivo de preservar y proteger el medio ambiente.' : ' The Alliance of Bioversity International and the International Center for Tropical Agriculture (CIAT) provides scientific solutions that take advantage of agricultural biodiversity and transform food systems in a sustainable way in order to protect and preserve the environment.' }
           
            </p>
        </div>
      </article>
      <article>
      <div className='img-logo'>
      <a href='https://producersdirect.org/' target="_blank"><img className='logoCiat' src="logos/logoProducersDirect.png" alt="logo-producers-direct" /></a>
        </div>
        <div>
            <p className='text'>
            {language === 'es' ?  ' Producers Direct es fundada y dirigida por agricultores, tiene como objetivo crear nuevas oportunidades para el desarrollo de pequeños agricultores, en las que asuman el liderazgo y el desarrollo de soluciones innovadoras para enfrentar los desafíos del día a día en su labor.' : ' Producers Direct is an award-winning organisation committed to growing an international cooperative owned and powered by smallholder farmers.We believe that smallholders, our greatest asset, are stronger together, and our mission is to inspire unity, knowledge sharing, and enhance their resilience.' }
            </p>
        </div>
      </article>
      <article>
      <div className='img-logo'>
      <a href='https://tecnicafe.co/' target="_blank"><img className='logoCiat' src="logos/logoTecnicafe.png" alt="logo-tecniafe" /></a></div>
        <div>
            <p className='text'>
            {language === 'es' ?  ' Tecnicafé, es una corporación mixta sin animo de lucro que ha sido creada como el Primer Parque Tecnológico abierto y global, ubicado en el departamento del Cauca en Colombia. Con el objetivo de realizar innovación transformativa en el mundo del café a través de la sostenibilidad.' : ' Tecnicafé, a private-public non-profit organization, is the first global coffee technological innovation park, located in the department of Cauca in Colombia. It aims to carry out transformative innovation in the world of coffee through sustainability.' }
           </p>
        </div>
      </article>
    
    </section>
  
    </section>
  )
}

export default AboutUs