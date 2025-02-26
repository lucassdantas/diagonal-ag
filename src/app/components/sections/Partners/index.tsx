import { Section } from '@/app/components/Section'
import { partnersLogos } from '@/utils/partnersLogos'
import Image from 'next/image'
import React from 'react'

export const Partners = () => {
  return (
    <Section className='text-white bg-purple_60 text-center mx-12 p-4 -mt-20'>
      <h2 className='text-2xl font-bold mb-4'>Marcas que movem pessaos contam com a Diagonal</h2>
      <div className='flex items-center flex-wrap'>
        {partnersLogos.map((partner, i:number) => {
          return (<div className='w-1/2 flex justify-center items-center p-7' key={i}><Image src={ partner } alt='Logo' className='text-center'/></div>)
        })}
      </div>
    </Section>
  )
}
