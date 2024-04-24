import React from 'react'
import './style.css'
import Card from './card/Card'
import Card2 from './card2/Card2'
import Card3 from './card3/Card3'
import Card4 from './card4/Card4'
import Card5 from './card5/Card5'
import { useLanguage } from '../LanguageContext';




const Cards = () => {
  const { language} = useLanguage();
  

  return (
    <section id= "cards" className='containerSection'>
    <h3 className='titleSection'>
    {language === 'es' ?  'Estimado de rendimiento asistido por IA' : 'AI-assisted coffee yield estimation' }
    
    </h3>

    
    <div className='cards_container'>
      <Card />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />

    

    </div>
    </section>
  )
}

export default Cards