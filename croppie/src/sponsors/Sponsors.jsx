import React from 'react'
import './style.css'
import { useLanguage } from '../LanguageContext';

const Sponsors = () => {
  const { language } = useLanguage();
  return (
    <div className='containerAbou'>
      <h2>{language === 'es' ? 'Financiadores' : 'Sponsors'}</h2>
      <section className='sectionSponsors' >
        <article>
          <div className='img-logo-sp'>
            <a href="https://bigdata.cgiar.org/" target="_blank"><img src="/logos/logoCgiarBigData.png" alt="logo-cgiar-bigdata" /></a>
          </div>
        </article>
        <article>
          <div className='img-logo-sp'>
            <a href="https://www.giz.de/en/html/index.html" target="_blank"><img src="/logos/logoGizForward.png" alt="logo-giz-fair-fordward" /></a>
          </div>
        </article>
        <article>
          <div className='img-logo-sp'>
            <a href="https://www.giz.de/en/html/index.html" target="_blank"><img src="/logos/logoGizI4Ga.png" alt="logo-giz-i4ga" /></a>
          </div>
        </article>
        <article>
          <div className='img-logo-sp'>
            <a href="https://www.iadb.org/es" target="_blank"><img className='img-producers' src="/logos/logoIDB.png" alt="logo-producers-direct" /></a>
          </div>
        </article>
        <article>
          <div className='img-logo-sp'>
            <a href="https://eia.cgiar.org/" target="_blank"><img src="/logos/logoEiA.png" alt="logo-eia" /></a>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Sponsors