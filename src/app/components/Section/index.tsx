import { Limiter } from '@/app/components/Limiter'
import React, { ReactNode } from 'react'

type SectionProps = {
  children:ReactNode, 
  className?:string
}
export const Section = ({children, className=''}:SectionProps) => {
  return (
  <div className={`${className}`}>
    <Limiter>
      {children}
    </Limiter>
  </div>
  )
}
