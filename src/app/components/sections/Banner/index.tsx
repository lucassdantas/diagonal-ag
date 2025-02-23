import { Button } from '@/app/components/Button'
import Image from 'next/image'
import React from 'react'

export const Banner = () => {
  return (
    <section className='bg-main_black text-white'>
      <h1 className='text-white'>Somos a 
        <br/>
        Diagonal <span className='text-purple_40'>.</span>
      </h1>
      <h2>Movemos negócios e pessoas no <span className='text-purple_40'>Fitness & Wellness</span></h2>
      <Image src='' alt='' />
      <p>Nascemos para ajudar academias, estúdios, clínicas e marcas de bem-estar a crescerem com estratégias que unem branding e performance. Combinamos criatividade e dados para atrair, engajar e converter o público que busca qualidade de vida.</p>
      <Button>Conheça nossos serviços</Button>
    </section>
  )
}
