import { Section } from '@/app/components/Section'
import { Form } from '@/app/components/sections/LetsGrowTogheter/Form'
import { Title } from '@/app/components/Title'
import React from 'react'

export const LetsGrowTogheter = () => {
  return (
    <Section className='text-main_white bg-purple_70 py-8' id='form'>
      <Title tag='h2'>Vamos crescer juntos?</Title>
      <p>Descubra como podemos impulsionar seu negócio no mercado Fitness & Wellness.</p>
      <Form/>
    </Section>
  )
}
