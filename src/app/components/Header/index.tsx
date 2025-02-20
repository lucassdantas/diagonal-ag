import Image from 'next/image'
import React from 'react'
import logo from '@/assets/diagona-logo.png'
export const Header = () => {
  return (
    <header className='bg-main_black flex justify-center pt-8'>
      <Image src={logo} alt='Logo Diagonal'/>
    </header>
  )
}
