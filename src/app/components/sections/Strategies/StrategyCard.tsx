import { OutlineButton } from '@/app/components/Button';
import { Title } from '@/app/components/Title';
import { StrategyCardProps } from '@/app/types/StrategyCardProps';
import React from 'react'



export const StrategyCard = ({icon, title, description, list, buttonText}:StrategyCardProps) => {
  return (
    <div className='w-full lg:w-1/3 h-fit'>
      <div className='flex flex-col text-left bg-purple_20 rounded-2xl p-4 gap-4'>
        {icon}
        <Title tag='h3'>{title}</Title>
        <p>{description}</p>
      </div>
      
      <div className='flex flex-col  '>
        <ul className='flex flex-col gap-4 my-4'>
          {list.map((item, i) => (<li key={i} className='flex gap-4 items-center'><item.icon className='text-purple_60'/> {item.text}</li> ))}
        </ul>
        <div className='w-full mt-4 mb-8'>
          <OutlineButton>{buttonText}</OutlineButton>
        </div>
      </div>
    </div>
  )
}
