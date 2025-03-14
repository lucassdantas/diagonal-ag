import { Section } from '@/app/components/Section'
import { Form } from '@/app/components/sections/LetsGrowTogheter/Form'
import { DesktopSvgBars, SvgBars } from '@/app/components/sections/LetsGrowTogheter/SvgBars'
import { Title } from '@/app/components/Title'
import React from 'react'

export const LetsGrowTogheter = () => {
  return (
    <Section className='relative text-main_white bg-purple_70 py-8 lg:py-32' id='contato'>
      <div className='flex lg:flex-row flex-col gap-48 lg:items-center'>
        <div className="flex-col items-start">
          <Title tag='h2' className='max-w-[280px] lg:max-w-full text-3xl lg:mb-8'>Vamos crescer juntos?</Title>
          <SvgBars className='absolute lg:hidden -right-8 -top-14'/>
          <p className='lg:pr-0 pr-4 mb-4'>Descubra como podemos impulsionar seu negócio no mercado Fitness & Wellness.</p>
          <Form/>
        </div>
        <div className="lg:flex hidden relative flex-col  w-1/2">
          <DesktopSvgBars className='absolute -right-20 -top-56 w-1/2'/>
          <img className='' src={'/assets/vamos-crescer-juntos/mulher-mexendo-em-notebook-diagonal-ag.jpg'} alt='Imagem de pessoa mexendo no notebook'/>
        </div>
      </div>
    </Section>
  )
}
