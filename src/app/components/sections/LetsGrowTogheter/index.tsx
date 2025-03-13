import { Section } from '@/app/components/Section'
import { Form } from '@/app/components/sections/LetsGrowTogheter/Form'
import { SvgBars } from '@/app/components/sections/LetsGrowTogheter/SvgBars'
import { Title } from '@/app/components/Title'
import React from 'react'

export const LetsGrowTogheter = () => {
  return (
    <Section className='relative text-main_white bg-purple_70 py-8' id='contato'>
      <Title tag='h2' className='max-w-[280px] lg:max-w-full text-3xl'>Vamos crescer juntos?</Title>
      <SvgBars className='absolute -right-8 -top-14'/>
      <p className='lg:pr-0 pr-4'>Descubra como podemos impulsionar seu negócio no mercado Fitness & Wellness.</p>
      <Form/>
    </Section>
  )
}
