import React from 'react'
import './style.css'



const Sponsors = () => {
  
  
  return (
    <div className='containerAbout'>
      
    <h2>Financiadores</h2> 
    <section className='articles' >
      <article>
        <div className='img-logo'>
          <a href="https://www.giz.de/en/html/index.html"><img src="/logos/logoGiz.png" alt="logo-giz" /></a>
        </div>
        
      </article>
      <article>
      <div className='img-logo'>
        <a href="https://www.iadb.org/es"><img className='img-producers' src="/logos/logoIDB.png" alt="logo-producers-direct"/></a>
      </div>
       
      </article>
      <article>
      <div className='img-logo'>
        <a href="https://www.giz.de/en/html/index.html"><img src="/logos/logoGiz.png" alt="logo-giz" /></a>
      </div> 
      </article>
    
    </section>
  
    </div>
  )
}

export default Sponsors