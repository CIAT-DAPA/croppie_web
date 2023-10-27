import React from 'react'
import './style.css'
import Colombia from './colombia/Colombia'
import Peru from './peru/Peru'
import Uganda from './uganda/Uganda'

const WhereWeAre = () => {
  return (
    <section id="where-we-are" className='containerWWA'>
       
        
        <h2>Dónde estamos</h2>
  
        <div className='cards_container'><Colombia/></div>
        <div className='cards_container'><Peru/></div>    
        <div className='cards_container'><Uganda/></div>
        
        <div className='containmap'>
    
        <div className='containmap_btn'>

           
        </div>

      </div>
     
   
    </section>
  )
}

export default WhereWeAre