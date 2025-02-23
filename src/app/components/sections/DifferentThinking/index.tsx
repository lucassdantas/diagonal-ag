import { Button } from '@/app/components/Button'
import Image from 'next/image'
import React from 'react'
import { BiSolidRightArrow } from 'react-icons/bi'
import moveResultsImage from '@/assets/movemos-resultados.png'
export const DifferentThinking = () => {
  const listItems = [
    {text:'Foco exclusivo em Fitness & Wellness'},
    {text:'Estratégias validadas com grandes marcas do setor'},
    {text:'Marketing que gera impacto real: de leads a novos alunos'},
  ]
  return (
    <section className='flex flex-col'>
      <div>
        <h2>Pensamos diferente. <span className='text-purple_60'>Movemos resultados.</span></h2>
        <p>Criamos estratégias completas para seu negócio crescer no mundo do Fitness & Wellness. Do posicionamento da sua marca ao crescimento digital, somos especialistas em transformar presença em performance.</p>
        <ul>
          {listItems.map((item, i) => (
            <li key={i} className='flex gap-4 items-center'> <BiSolidRightArrow className='text-purple_60'/>{item.text}</li>    
          ))}
        </ul>
        <Button>Fale com a gente</Button>
      </div>
      <div>
        <Image src={moveResultsImage} alt='movemos resultados'/>
      </div>
    </section>
  )
}
