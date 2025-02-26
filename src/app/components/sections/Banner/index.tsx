import { Button } from '@/app/components/Button'
import { Limiter } from '@/app/components/Limiter'
import { Forms } from '@/app/components/sections/Banner/Forms'
import Image from 'next/image'
import React from 'react'

export const Banner = () => {
  return (
    <section className='bg-main_black text-white text-center pt-8 pb-28 flex flex-col items-center gap-8'>
      <Limiter>
        <h1 className='text-white text-4xl font-bold'>
          Somos a <br/>
          Diagonal <span className='text-purple_40'>.</span>
        </h1>
        <h2 className='text-3xl font-bold'>Movemos negócios e pessoas no <span className='text-purple_40'>Fitness & Wellness</span></h2>
      </Limiter>
      <Forms/>
      <Limiter className='text-center flex flex-col items-center gap-4'>
        <p>Nascemos para ajudar academias, estúdios, clínicas e marcas de bem-estar a crescerem com estratégias que unem branding e performance. Combinamos criatividade e dados para atrair, engajar e converter o público que busca qualidade de vida.</p>
        <Button>Conheça nossos serviços</Button>
      </Limiter>
    </section>
  )
}
