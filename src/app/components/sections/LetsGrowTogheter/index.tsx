import { Section } from '@/app/components/Section'
import { Title } from '@/app/components/Title'
import React from 'react'

export const LetsGrowTogheter = () => {
  return (
    <Section className='text-main_white bg-purple_70'>
      <Title tag='h2'>Vamos crescer juntos?</Title>
      <p>Descubra como podemos impulsionar seu negócio no mercado Fitness & Wellness.</p>
      <form className='flex flex-col gap-4 py-4 items-center'>
        <div className='flex flex-col w-full'>
          <label htmlFor='name' className='text-purple_30'>Nome*</label>
          <input name='name' type='text' className='bg-transparent border border-purple_40 rounded-lg p-2'/>
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor='email' className='text-purple_30'>Email corporativo*</label>
          <input name='email' type='email' className='bg-transparent border border-purple_40 rounded-lg p-2'/>
        </div>
        
        <div className='flex flex-col w-full'>
          <label htmlFor='phone' className='text-purple_30'>Telefone*</label>
          <input name='phone' type='tel' className='bg-transparent border border-purple_40 rounded-lg p-2'/>
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor='position' className='text-purple_30'>Cargo*</label>
          <select className='bg-transparent border border-purple_40 rounded-lg p-2'>
            <option value={0} className='bg-transparent'>Cargo 1</option>
          </select>
        </div>
            
        <div className='flex flex-col w-full'>
          <label htmlFor='companyName' className='text-purple_30'>Nome da empresa*</label>
          <input name='companyName' type='text' className='bg-transparent border border-purple_40 rounded-lg p-2'/>
        </div>

        <div className='w-full text-center'>
          <input type='submit' value='Quero uma proposta personalizada' className='rounded-2xl text-white bg-purple_50 text-center py-4 font-bold cursor-pointer p-4'/>
        </div>
      </form>
    </Section>
  )
}
