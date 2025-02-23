import { cardsContent } from '@/app/components/sections/Strategies/cardsContent'
import { StrategyCard } from '@/app/components/sections/Strategies/StrategyCard'
import React from 'react'

export const Strategies = () => {
  return (
    <section>
      <h2>Estratégias que geram <span className='text-purple_60'>movimento e conversão</span></h2>
      <div className='flex flex-col flex-wrap'>
        {cardsContent.map((cardContent, i) => (
          <StrategyCard 
            key={i}
            icon={cardContent.icon}
            title={cardContent.title}
            description={cardContent.description}
            list={cardContent.list}
            buttonText={cardContent.buttonText}
          />
        ))}
      </div>
    </section>
  )
}
