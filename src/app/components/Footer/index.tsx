import Image from 'next/image'
import React from 'react'
import diagonalLogoWithoutBg from '@/assets/diagonal-logo-vazada.png'
import { allSocialNetworksList } from '@/utils/socialNetwork'
import Link from 'next/link'
import { TbLetterR } from 'react-icons/tb'
export const Footer = () => {
  return (
    <footer>
      <p>Pense <span className='text-purple_60'>diferente</span>. Pense na <span className='text-purple_60'>Diagonal</span>.</p>
      <Image src={diagonalLogoWithoutBg} alt='Logo diagonal vazada'/>
      <h6>Confira nossas redes sociais:</h6>
      <div className='flex gap-4'>
        {allSocialNetworksList.map((socialNetowrk, i) => ( <Link href={socialNetowrk.url} target='_blank' key={i}><socialNetowrk.icon/></Link>))}
      </div>
      <span><TbLetterR/> contato@diagonal.ag</span>
      <div className='bg-gray_10 text-white text-center'>
        <small>© {new Date().getFullYear()} Diagonal - Todos os direitos reservados</small>
      </div>
    </footer>
  )
}
