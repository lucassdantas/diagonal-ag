import { Button } from '@/app/components/Button'
import Image from 'next/image'
import React from 'react'
import { BiSolidRightArrow } from 'react-icons/bi'
import moveResultsImage from '@/assets/movemos-resultados.png'
import { Section } from '@/app/components/Section'
import { Title } from '@/app/components/Title'
export const DifferentThinking = () => {
  const listItems = [
    {text:'Foco exclusivo em Fitness & Wellness'},
    {text:'Estratégias validadas com grandes marcas do setor'},
    {text:'Marketing que gera impacto real: de leads a novos alunos'},
  ]
  return (
    <Section className='py-12 text-center lg:text-left' limiterClassName='lg:flex items-center justify-between'>
      <div className='flex flex-col gap-4 mb-8 items-center lg:items-start lg:w-[50%]'>
        <Title tag='h2'>Pensamos diferente. <br/><span className='text-purple_60'>Movemos resultados.</span></Title>
        <p>Criamos estratégias completas para seu negócio crescer no mundo do Fitness & Wellness. Do posicionamento da sua marca ao crescimento digital, somos especialistas em transformar presença em performance.</p>
        <ul className='flex flex-col'>
          {listItems.map((item, i) => (<li key={i} className='flex gap-4 items-center'> <BiSolidRightArrow className='text-purple_60'/>{item.text}</li>))}
        </ul>
        <Button url='#form'>Fale com a gente</Button>
      </div>
      <div className='lg:w-[40%]'>
        <Image src={moveResultsImage} alt='movemos resultados'/>
      </div>
    </Section>
  )
}
