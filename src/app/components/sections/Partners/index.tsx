import { Section } from '@/app/components/Section'
import { Title } from '@/app/components/Title'
import { partnersLogos } from '@/utils/partnersLogos'
import React from 'react'

export const Partners = () => {
  return (
    <Section className={``} limiterClassName='flex flex-col items-center'>
      <div className='relative text-white bg-purple_60 text-center p-4 pt-8 -mt-20 mx-4 flex flex-col justify-center items-center '>
        <div className='absolute bg-white w-[70px] h-[70px] -bottom-[35px] -left-[35px] rotate-45'></div>
        <div className='absolute bg-main_black w-[70px] h-[70px] -top-[35px] -right-[35px] rotate-45'></div>
        <Title className='text-2xl mb-4' tag='h2'>Marcas que movem pessoas contam com a Diagonal</Title>
        <div className='flex items-center justify-between flex-wrap lg:flex-nowrap max-w-[328px] lg:max-w-full'>
          {partnersLogos.map((partner, i:number) => (
            <div className='w-1/2  flex justify-center items-center my-6 px-4 lg:px-7' key={i}> <img src={ partner } alt='Logo' className='text-center w-full'/> </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
