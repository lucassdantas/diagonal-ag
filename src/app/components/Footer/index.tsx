import Image from 'next/image'
import React from 'react'
import diagonalLogoWithoutBg from '@/assets/diagonal-logo-vazada.png'
import { allSocialNetworksList } from '@/utils/socialNetwork'
import Link from 'next/link'
import { Title } from '@/app/components/Title'
import { BiEnvelope } from 'react-icons/bi'
export const Footer = () => {
  return (
    <footer className='flex flex-col gap-4 bg-main_black text-main_white p-4 text-center '>
      <p>Pense <span className='text-purple_60'>diferente</span>. Pense na <span className='text-purple_60'>Diagonal</span>.</p>
      <Image src={diagonalLogoWithoutBg} alt='Logo diagonal vazada'/>
      <Title tag='h6' className='font-normal mt-4'>Confira nossas redes sociais:</Title>
      <div className='flex gap-4 justify-center'>
        {allSocialNetworksList.map((socialNetowrk, i) => ( <Link href={socialNetowrk.url} target='_blank' key={i}><socialNetowrk.icon className='text-purple_40 text-3xl'/></Link>))}
      </div>
      <span className='flex justify-center items-center gap-4'><BiEnvelope className='text-purple_40 text-3xl'/> contato@diagonal.ag</span>
      <div className='bg-gray_10 text-white text-center'>
        <small>© {new Date().getFullYear()} Diagonal - Todos os direitos reservados</small>
      </div>
    </footer>
  )
}
