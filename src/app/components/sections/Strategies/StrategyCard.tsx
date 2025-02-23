import { Button } from '@/app/components/Button';
import { StrategyCardProps } from '@/app/types/StrategyCardProps';
import React from 'react'



export const StrategyCard = ({icon, title, description, list, buttonText}:StrategyCardProps) => {
  return (
    <div className='w-full lg:w-1/3'>
      <div className='bg-purple_20 rounded-2xl'>
        {icon}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      
      <div>
        <ul>
          {list.map((item, i) => (
           <li key={i} className='flex gap-4 items-center'><item.icon className='text-purple_60'/> {item.text}</li> 
          ))}
        </ul>
        <Button>{buttonText}</Button>
      </div>
    </div>
  )
}
