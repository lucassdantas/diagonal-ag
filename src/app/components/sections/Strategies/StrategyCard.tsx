import { OutlineButton } from '@/app/components/Button';
import { Title } from '@/app/components/Title';
import { StrategyCardProps } from '@/app/types/StrategyCardProps';
import React from 'react'



export const StrategyCard = ({icon, title, description, list, buttonText}:StrategyCardProps) => {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row justify-between lg:items-center'>
      <div className='flex flex-col text-left w-full lg:w-1/2 h-[300px]  justify-center bg-purple_20 rounded-2xl p-4 gap-4'>
        {icon}
        <Title tag='h3' className='max-w-[95%] text-3xl '>{title}</Title>
        <p>{description}</p>
      </div>
      
      <div className='flex flex-col lg:justify-start lg:items-start lg:w-[40%]'>
        <ul className='flex flex-col lg:text-left gap-4 my-4'>
          {list.map((item, i) => (<li key={i} className='flex gap-4 items-center'><item.icon className='text-purple_60'/> {item.text}</li> ))}
        </ul>
        <div className='w-full mt-4 mb-8 flex justify-center lg:justify-start'>
          <OutlineButton url='#contato'>{buttonText}</OutlineButton>
        </div>
      </div>
    </div>
  )
}
