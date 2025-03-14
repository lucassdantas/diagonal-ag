import React from 'react'
import { allSocialNetworksList } from '@/utils/socialNetwork'
import Link from 'next/link'
import { Title } from '@/app/components/Title'
import { BiEnvelope } from 'react-icons/bi'
export const Footer = () => {
  return (
    <footer className=' bg-main_black text-main_white pt-8 text-center '>
      <div className='flex flex-col items-center gap-4 px-4 mb-12'>
        <p>Pense <span className='text-purple_60'>diferente</span>. Pense na <span className='text-purple_60'>Diagonal</span>.</p>
        <img src={'/assets/diagonal-logo-vazada.png'} alt='Logo diagonal vazada'/>
        <img className='max-w-[73px] lg:max-w-[172px]' src={'/assets/footer/clickup-verified-logo.png'} alt='clickup verified logo'/>
        <Title tag='h6' className='font-normal mt-4'>Confira nossas redes sociais:</Title>
        <div className='flex gap-4 justify-center'>
          {allSocialNetworksList.map((socialNetowrk:any, i) => ( <Link href={socialNetowrk.url} target='_blank' key={i}><socialNetowrk.icon className='text-purple_40 text-3xl'/></Link>))}
        </div>
        <span className='flex justify-center items-center gap-4'><BiEnvelope className='text-purple_40 text-3xl'/> contato@diagonal.ag</span>
      </div>
      <div className='bg-gray_10 text-gray_40 text-center p-4'>
        <small>© {new Date().getFullYear()} Diagonal - Todos os direitos reservados</small>
      </div>
    </footer>
  )
}
