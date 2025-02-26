import { Limiter } from '@/app/components/Limiter'
import React, { ReactNode } from 'react'

type SectionProps = {
  children:ReactNode, 
  className?:string,
  limiterClassName?:string
}
export const Section = ({children, className='', limiterClassName=''}:SectionProps) => {
  return (
  <div className={`${className}`}>
    <Limiter className={limiterClassName}>
      {children}
    </Limiter>
  </div>
  )
}
