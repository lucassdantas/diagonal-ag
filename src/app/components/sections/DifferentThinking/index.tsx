import { Button } from '@/app/components/Button'
import React from 'react'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Section } from '@/app/components/Section'
import { Title } from '@/app/components/Title'
export const DifferentThinking = () => {
  const listItems = [
    {text:'Foco exclusivo em Fitness & Wellness'},
    {text:'Estratégias validadas com grandes marcas do setor'},
    {text:'Marketing que gera impacto real: de leads a novos alunos'},
  ]
  return (
    <Section id='quem-somos' className='py-12 lg:text-left' limiterClassName='lg:flex items-center justify-between'>
      <div className='flex flex-col gap-4 mb-8 items-start lg:w-[50%]'>
        <Title tag='h2' className='lg:w-full w-[350px]'>Pensamos diferente. <span className='text-purple_60'>Movemos resultados.</span></Title>
        <p className='lg:max-w-full max-w-[340px]'>Criamos estratégias completas para seu negócio crescer no mundo do Fitness & Wellness. Do posicionamento da sua marca ao crescimento digital, somos especialistas em transformar presença em performance.</p>
        <ul className='flex flex-col'>
          {listItems.map((item, i) => (<li key={i} className='flex gap-4 items-center'> <BiSolidRightArrow className='text-purple_60'/>{item.text}</li>))}
        </ul>
        <div className="w-full flex justify-center lg:justify-start my-4">
          <Button url='#contato'>Fale com a gente</Button>
        </div>
      </div>
      <div className='lg:w-[40%]'>
        <img src={'/assets/movemos-resultados.png'} alt='movemos resultados'/>
      </div>
    </Section>
  )
}
