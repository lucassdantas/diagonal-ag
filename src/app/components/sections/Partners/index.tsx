import { partnersLogos } from '@/utils/partnersLogos'
import Image from 'next/image'
import React from 'react'

export const Partners = () => {
  return (
    <div className='text-white bg-purple_60'>
      <h2>Marcas que movem pessaos contam com a Diagonal</h2>
      {partnersLogos.map((partner, i:number) => {
        return (<Image src={partner} alt='Logo' key={i}/>)
      })}
    </div>
  )
}
