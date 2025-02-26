import Link from 'next/link';
import React, { ReactNode } from 'react'

type ButtonProps = {
  children:ReactNode;
  className?:string;
  url?:string;
  target?:string;
}
export const Button = ({children, className='', url='#', target='_blank'}:ButtonProps) => {
  return (
    <Link className={'rounded-2xl text-white bg-purple_50 text-center py-4 font-bold cursor-pointer max-w-[250px] p-4'+className} href={url} target={target}>{children}</Link>
  )
}
