import Link from 'next/link';
import React, { ReactNode } from 'react'

type ButtonProps = {
  children:ReactNode;
  className?:string;
  url?:string;
  target?:string;
}
export const Button = ({children, className='text-white', url='#', target='_self'}:ButtonProps) => {
  return (
    <Link className={'rounded-2xl bg-purple_50 text-center py-4 font-bold cursor-pointer max-w-[300px] w-full p-4 hover:bg-purple_40 '+className} href={url} target={target}>{children}</Link>
  )
}
export const OutlineButton = ({children, className='text-purple_60 border-purple_60', url='#', target='_self'}:ButtonProps) => {
  return (
    <Link className={'flex flex-wrap justify-center rounded-2xl  border-2 text-center font-bold cursor-pointer w-full max-w-[300px] p-3 hover:border-purple_40 hover:text-purple_40 '+ className} href={url} target={target}>{children}</Link>
  )
}
