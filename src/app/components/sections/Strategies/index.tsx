import { Section } from '@/app/components/Section'
import { cardsContent } from '@/app/components/sections/Strategies/cardsContent'
import { StrategyCard } from '@/app/components/sections/Strategies/StrategyCard'
import { Title } from '@/app/components/Title'
import React from 'react'

export const Strategies = () => {
  return (
    <Section className='lg:pb-24' id='servicos'>
      <Title tag='h2' className='mb-8 max-w-[340px] lg:max-w-[450px] pr-4 lg:pr-0'>Estratégias que geram <span className='text-purple_60'>movimento e conversão</span></Title>
      <div className='flex flex-col md:flex-row gap-8 lg:gap-16 items-center lg:items-start flex-wrap mt-4'>
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
