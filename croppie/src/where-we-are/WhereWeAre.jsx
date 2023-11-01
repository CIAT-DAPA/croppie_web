import React from 'react'
import './style.css'
import Colombia from './countries/Colombia'
import { useLanguage } from '../LanguageContext';


const WhereWeAre = () => {
  const { language } = useLanguage();
  return (
    <section id="where-we-are" className='containerWWA'>
        
        <h2 > {language === 'es' ?  'Dónde estamos' : 'Where we are' }</h2>
  
        <div className='cards_container_col'><Colombia/></div>


        <div className='containmap'>
    
        <div className='containmap_btn'>
        
              <img className='desktop' src="/illustrations/mapa-wwa.svg" alt="" />
           

        <div>
            <button className='btn-pe'> Perú</button>
        </div>
        <div >

            <button  className='btn-hiden'>Uganda</button>
            <button  className='btn-hiden'>Uganda</button>
            <button>Uganda</button>
            <button  className='btn-hiden'>Uganda</button>
            
        </div>
        </div>

      </div>
     
   
    </section>
  )
}

export default WhereWeAre