import React from 'react'
import './style.css'



const Sponsors = () => {
  
  
  return (
    <div className='containerAbout'>      
      <h2>Financiadores</h2> 
        <section className='articlesSponsors' >
          <article>
            <div className='img-logo'>
              <a href="https://www.cgiar.org/" target="_blank"><img src="/logos/logoCgiarBigData.png" alt="logo-cgiar" /></a>
            </div> 
          </article>
          <article>
            <div className='img-logo'>
              <a href="https://www.giz.de/en/html/index.html" target="_blank"><img src="/logos/logoGizForward.svg" alt="logo-giz-fair-fordward" /></a>
            </div>
          </article> 
          <article>
            <div className='img-logo'>
              <a href="https://www.giz.de/en/html/index.html"target="_blank"><img src="/logos/logoGizI4Ga.svg" alt="logo-giz-i4ga" /></a>
            </div> 
          </article>
          <article>
            <div className='img-logo'>
              <a href="https://www.iadb.org/es" target="_blank"><img className='img-producers' src="/logos/logoIDB.png" alt="logo-producers-direct"/></a>
            </div>
          </article>
          <article>
            <div className='img-logo'>
              <a href="https://www.cgiar.org/" target="_blank"><img src="/logos/logoEiA.png" alt="logo-eia" /></a>
            </div> 
          </article>
      </section>    
    </div>
  )
}

export default Sponsors