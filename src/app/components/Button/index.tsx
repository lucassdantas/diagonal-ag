import Link from 'next/link';
import React, { ReactNode } from 'react'

type ButtonProps = {
  children:ReactNode;
  className?:string;
  url?:string;
  target?:string;
}
export const Button = ({children, className='', url='#', target='_self'}:ButtonProps) => {
  return (
    <Link className={'rounded-2xl text-white bg-purple_50 text-center py-4 font-bold cursor-pointer max-w-[250px] p-4'+className} href={url} target={target}>{children}</Link>
  )
}
export const OutlineButton = ({children, className='', url='#', target='_self'}:ButtonProps) => {
  return (
    <Link className={'rounded-2xl text-purple_60 border-purple_60 border-2 text-center py-4 font-bold cursor-pointer max-w-[250px] p-4 '+className} href={url} target={target}>{children}</Link>
  )
}
