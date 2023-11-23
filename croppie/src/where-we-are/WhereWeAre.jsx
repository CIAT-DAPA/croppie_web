import React from 'react'
import './style.css'
import Colombia from './countries/Colombia'
import Uganda from './countries/Uganda'
import { useLanguage } from '../LanguageContext';


const WhereWeAre = () => {
  const { language } = useLanguage();
  return (
    <section id="where-we-are" className='containerWWA'>
        
        <h2 > {language === 'es' ?  'Dónde estamos' : 'Where we are' }</h2>
  

        <div className='containmap'>
    
          <div className='containmap_btn'>
              <img className='desktop' src="/illustrations/mapa-wwa.svg" alt="" />
              <div className='containerbtn-countries' >
                  <Colombia />
                  <button className='btn-countries'>{language === 'es' ?  ' Perú' : ' Peru' }</button>
              </div>
              <div className='containerbtn-countries' >
                  <button  className='btn-hiden'>Uganda</button>
                  <button  className='btn-hiden'>Uganda</button>
                  <Uganda />
                  <button  className='btn-hiden'>Uganda</button>
                  
              </div>
          </div>

      </div>
     
   
    </section>
  )
}

export default WhereWeAre