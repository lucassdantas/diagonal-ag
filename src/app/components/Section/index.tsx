import { Limiter } from '@/app/components/Limiter'
import React, { ReactNode } from 'react'

type SectionProps = {
  children:ReactNode, 
  className?:string,
  limiterClassName?:string
  id?:string
}
export const Section = ({children, className='', limiterClassName='', id=''}:SectionProps) => {
  return (
  <section className={`${className}`} id={id}>
    <Limiter className={limiterClassName}>
      {children}
    </Limiter>
  </section>
  )
}
