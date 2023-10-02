import React from 'react'
import './style.css'
import Card from './Card'

const Cards = () => {
  
  const arrayCards = [
    {
        title: " ¿Qué es?",
    },
    {
      title: "¿Cómo funciona?",
    },
    {
      title: "Tablero de instrumentos",
    },
    {
      title: "Casos de uso",
    },
  ]
  return (
    <section className='containerSection'>
    <h3 className='titleSection'>Estimado de rendimiento asistido por IA</h3>
    
    
    <div className='cards_container'>

    {
                arrayCards.map((card, index) => (
                  <Card
                    title={card.title}
                    key={index}
                  />
                ))
    }
        

    </div>
    </section>
  )
}

export default Cards