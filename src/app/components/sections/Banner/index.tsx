import { Button } from '@/app/components/Button'
import { Limiter } from '@/app/components/Limiter'
import { Forms } from '@/app/components/sections/Banner/Forms'
import { Title } from '@/app/components/Title'
import React from 'react'

export const Banner = () => {
  return (
    <section className='bg-main_black text-white text-center pt-8 pb-28 flex flex-col items-center gap-8'>
      <Limiter className='flex flex-col items-center'>
        <Title className='font-bold' tag='h1'>
          Somos a <br/>
          Diagonal <span className='text-purple_40'>.</span>
        </Title>
        <Title tag='h2' className='my-4 max-w-[344px]'>Movemos negócios e pessoas no <span className='text-purple_40'>Fitness & Wellness</span></Title>
      </Limiter>
      <Forms/>
      <Limiter className='text-center flex flex-col items-center gap-4'>
        <p className='max-w-[344px] md:max-w-full'>Nascemos para ajudar academias, estúdios, clínicas e marcas de bem-estar a crescerem com estratégias que unem branding e performance. Combinamos criatividade e dados para atrair, engajar e converter o público que busca qualidade de vida.</p>
        <Button url='#services'>Conheça nossos serviços</Button>
      </Limiter>
    </section>
  )
}
