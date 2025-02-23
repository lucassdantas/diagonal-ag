import { Button } from '@/app/components/Button';
import { StrategyCardProps } from '@/app/types/cardProps';
import React from 'react'



export const StrategyCard = ({icon, title, description, list, buttonText}:StrategyCardProps) => {
  return (
    <div>
      <div className='bg-purple_20 rounded-2xl'>
        {icon}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <ul>
          {list.map((item, i) => (
           <li key={i} className='flex gap-4 items-center'>{item.icon} {item.text}</li> 
          ))}
        </ul>
        <Button>{buttonText}</Button>
      </div>
    </div>
  )
}
