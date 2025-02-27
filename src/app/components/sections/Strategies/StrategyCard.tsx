import { OutlineButton } from '@/app/components/Button';
import { Title } from '@/app/components/Title';
import { StrategyCardProps } from '@/app/types/StrategyCardProps';
import React from 'react'



export const StrategyCard = ({icon, title, description, list, buttonText}:StrategyCardProps) => {
  return (
    <div className='w-full lg:w-[30%] h-full flex flex-col justify-between'>
      <div className='flex flex-col text-left h-[300px] justify-center bg-purple_20 rounded-2xl p-4 gap-4'>
        {icon}
        <Title tag='h3' className='max-w-[95%] text-3xl'>{title}</Title>
        <p>{description}</p>
      </div>
      
      <div className='flex flex-col '>
        <ul className='flex flex-col lg:text-left gap-4 my-4'>
          {list.map((item, i) => (<li key={i} className='flex gap-4 items-center'><item.icon className='text-purple_60'/> {item.text}</li> ))}
        </ul>
        <div className='w-full mt-4 mb-8 text-center'>
          <OutlineButton url='#form'>{buttonText}</OutlineButton>
        </div>
      </div>
    </div>
  )
}
