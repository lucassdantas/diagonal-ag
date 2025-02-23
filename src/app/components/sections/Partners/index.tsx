import { partnersLogos } from '@/utils/partnersLogos'
import Image from 'next/image'
import React from 'react'

export const Partners = () => {
  return (
    <section className='text-white bg-purple_60'>
      <h2>Marcas que movem pessaos contam com a Diagonal</h2>
      <div className='flex items-center flex-wrap'>
        {partnersLogos.map((partner, i:number) => {
          return (<div className='w-1/2 flex justify-center items-center' key={i}><Image src={ partner } alt='Logo' className='text-center'/></div>)
        })}
      </div>
    </section>
  )
}
