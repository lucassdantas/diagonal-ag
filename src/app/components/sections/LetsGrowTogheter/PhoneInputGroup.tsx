"use client";

import { useState } from "react";

const countryCodes = [
  { code: "+55", flag: "🇧🇷", name: "Brasil" },
  { code: "+1", flag: "🇺🇸", name: "Estados Unidos" },
  { code: "+44", flag: "🇬🇧", name: "Reino Unido" },
  { code: "+33", flag: "🇫🇷", name: "França" },
  { code: "+49", flag: "🇩🇪", name: "Alemanha" },
];

interface PhoneInputProps {
  value: string;
  onChange: (phone: string) => void;
}

export const PhoneInputGroup = ({ value, onChange }: PhoneInputProps) => {
  const [countryCode, setCountryCode] = useState("+55"); // Código padrão do Brasil

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(`${countryCode} ${e.target.value}`); // Concatena o código do país ao telefone
  };

  return (
    <div className="flex flex-col w-full ">
      <label htmlFor='phone' className="text-purple_30 mb-2">Telefone*</label>
      <div className="flex gap-2">
        <select className="bg-purple_70 border border-purple_40 rounded-lg p-2" value={countryCode} onChange={handleCountryChange}>
          {countryCodes.map(({ code, flag, name }) => (
            <option key={code} value={code}>{flag} {code}</option>
          ))}
        </select>
        <input
          type="tel"
          name='phone'
          value={value.replace(countryCode, "").trim()} // Remove código do país da exibição
          className="bg-transparent border border-purple_40 rounded-lg p-2 flex-1"
          onChange={handlePhoneChange}
          required
        />
      </div>
    </div>
  );
};
