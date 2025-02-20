import React, { ReactNode } from 'react'

type ButtonProps = {
  children:ReactNode;
}
export const Button = ({children}:ButtonProps) => {
  return (
    <div className='rounded-full text-white bg-purple_50'>{children}</div>
  )
}
