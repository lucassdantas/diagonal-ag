import { Section } from '@/app/components/Section'
import { cardsContent } from '@/app/components/sections/Strategies/cardsContent'
import { StrategyCard } from '@/app/components/sections/Strategies/StrategyCard'
import { Title } from '@/app/components/Title'
import React from 'react'

export const Strategies = () => {
  return (
    <Section className='' id='services'>
      <Title tag='h2' className='mb-8 max-w-[340px] lg:max-w-full'>Estratégias que geram <span className='text-purple_60'>movimento e conversão</span></Title>
      <div className='flex flex-col lg:flex-row gap-8 items-center lg:items-start flex-wrap my-4'>
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
    </Section>
  )
}
