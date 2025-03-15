import { Button, OutlineButton } from '@/app/components/Button'
import { Limiter } from '@/app/components/Limiter'
import Link from 'next/link'
import React from 'react'
export const Header = () => {
  return (
    <header className='bg-main_black pt-8 overflow-x-hidden'>
      <Limiter className='flex justify-between max-lg:gap-4'>
        <img src={'/assets/diagonal-logo.png'} alt='Logo Diagonal' className='object-contain max-lg:w-1/2'/>
        
        <div className='hidden lg:block '>
          <nav>
            <ul className='flex items-center text-main_white gap-6'>
              <li><Link href='#quem-somos'>Quem somos</Link></li>
              <li><Link href='#servicos'>O que fazemos</Link></li>
              <li><OutlineButton url='#contato' className='text-purple_50 border-purple_50'>Entre em contato</OutlineButton></li>
              <li><Button className='text-main_black' url='https://app.diagonal.ag/login' target='_blank'>Já sou cliente</Button></li>
            </ul>
          </nav>
        </div>
        
        <Button className='text-main_black lg:hidden max-w-fit max-h-[100px] flex items-center'>Já sou cliente</Button>
      </Limiter>
    </header>
  )
}
