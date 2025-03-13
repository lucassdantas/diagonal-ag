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
    <Link className={'rounded-2xl text-white bg-purple_50 text-center py-4 font-bold cursor-pointer max-w-[300px] w-full p-4 '+className} href={url} target={target}>{children}</Link>
  )
}
export const OutlineButton = ({children, className='', url='#', target='_self'}:ButtonProps) => {
  return (
    <Link className={'flex flex-wrap justify-center rounded-2xl text-purple_60 border-purple_60 border-2 text-center font-bold cursor-pointer w-full max-w-[300px] p-3 '+className} href={url} target={target}>{children}</Link>
  )
}
