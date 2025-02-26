import { Section } from '@/app/components/Section'
import { partnersLogos } from '@/utils/partnersLogos'
import Image from 'next/image'
import React from 'react'
import styles from '@/app/components/sections/Partners/Partners.module.css'
export const Partners = () => {
  return (
    <Section className={`relative text-white bg-purple_60 text-center mx-12 p-4 -mt-20 clipped-section ${styles.clippedSection}`}>
      <div className='absolute bg-white w-[70px] h-[70px] -bottom-[35px] -left-[35px] rotate-45'></div>
      <div className='absolute bg-main_black w-[70px] h-[70px] -top-[35px] -right-[35px] rotate-45'></div>
      <h2 className='text-2xl font-bold mb-4'>Marcas que movem pessaos contam com a Diagonal</h2>
      <div className='flex items-center justify-between flex-wrap'>
        {partnersLogos.map((partner, i:number) => (
          <div className='w-1/2 flex justify-center items-center p-5' key={i}> <Image src={ partner } alt='Logo' className='text-center'/> </div>
        ))}
      </div>
    </Section>
  )
}
