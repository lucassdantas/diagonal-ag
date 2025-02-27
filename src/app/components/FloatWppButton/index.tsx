import { whatsApp } from '@/utils/socialNetwork'
import Link from 'next/link'
import React from 'react'

export const FloatWppButton = () => {
  return (
    <Link href={whatsApp.url} className='fixed right-5 bottom-5 bg-green-400 rounded-full p-4' target='_blank'><whatsApp.icon className='text-white text-4xl'/></Link>

  )
}
