import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface PhoneInputGroupProps {
  labelText: string;
  labelForAndInputName: string;
  labelClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
  defaultCountry?: string; // Permite definir o país padrão
  onChange?: (value: string) => void; // Retorna o telefone formatado
}

export const PhoneInputGroup = ({
  labelText,
  labelForAndInputName,
  labelClassName = '',
  containerClassName = '',
  inputClassName = '',
  defaultCountry = 'br', // Define Brasil como padrão
  onChange,
}: PhoneInputGroupProps) => {
  return (
    <div className={`flex flex-col w-full lg:w-[49%] ${containerClassName}`}>
      <label htmlFor={labelForAndInputName} className={`text-purple_30 ${labelClassName}`}>
        {labelText}
      </label>
      <PhoneInput
        country={defaultCountry} // Define o país inicial
        enableSearch={true} // Ativa busca de países
        inputProps={{
          name: labelForAndInputName,
          required: true,
        }}
        containerClass={`border border-purple_40 rounded-lg p-1 ${inputClassName}`}
        inputClass="bg-transparent w-full p-2"
        onChange={onChange} // Retorna o telefone formatado
      />
    </div>
  );
};
