import { InputGroup } from '@/app/components/sections/LetsGrowTogheter/InputGroup'
import React from 'react'

export const Form = () => {
  return (
    <form className='flex flex-col gap-4 py-4 items-center' method='post'>
      <InputGroup labelForAndInputName='name'        labelText='Nome*'              inputType='text'/>
      <InputGroup labelForAndInputName='companyName' labelText='Nome da empresa*'   inputType='text'/>
      <InputGroup labelForAndInputName='email'       labelText='Email corporativo*' inputType='email'/>
      <InputGroup labelForAndInputName='phone'       labelText='Telefone*'          inputType='tel'/>

      <div className='flex flex-col w-full'>
        <label htmlFor='position' className='text-purple_30'>Cargo*</label>
        <select className='bg-purple_70 border border-purple_40 rounded-lg p-2' name='position'>
          <option value={'socio_fundador'}              className='bg-transparent'>Sócio/Fundador</option>
          <option value={'diretor_executivo'}           className='bg-transparent'>Diretor Executivo</option>
          <option value={'diretor_gerente_marketing'}   className='bg-transparent'>Diretor/Gerente de Marketing</option>
          <option value={'diretor_gerente_de_produto'}  className='bg-transparent'>Diretor/Gerente de Produto</option>
          <option value={'diretor_gerente_de_vendas'}   className='bg-transparent'>Diretor/Gerente de Vendas</option>
          <option value={'diretor_gerente_de_comunicacao'} className='bg-transparent'>Diretor/Gerente de Comunicação</option>
          <option value={'outro'} className='bg-transparent'>Outro</option>
        </select>
      </div>

      <div className='w-full text-center'>
        <input type='submit' value='Quero uma proposta personalizada' className='rounded-2xl text-white bg-purple_50 text-center py-4 font-bold cursor-pointer p-4'/>
      </div>
    </form>
  )
}

