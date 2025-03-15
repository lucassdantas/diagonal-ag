"use client";

import { useState } from "react";
import { InputGroup } from "@/app/components/sections/LetsGrowTogheter/InputGroup";
import { PhoneInputGroup } from "@/app/components/sections/LetsGrowTogheter/PhoneInputGroup";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    position: "",
  });

  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (phone: string) => {
    setFormData({ ...formData, phone });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    try {
      const currentUrl = location.protocol + '//' + location.hostname + '/backend/send-email.php';

      const response = await fetch(currentUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData),
      });

      const result = await response.json();
      if (result.success) {
        setMessage( result.message);
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          position: "socio_fundador",
        });
      } else {
        setMessage( result.message);
      }
    } catch (error) {
      setMessage("Erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <form className="flex flex-col flex-wrap lg:justify-center gap-4 lg:gap-8 pt-4 items-center" onSubmit={handleSubmit}>
      <InputGroup labelForAndInputName="name" labelText="Nome*" inputType="text" value={formData.name} onChange={handleChange} />
      <InputGroup labelForAndInputName="companyName" labelText="Nome da empresa*" inputType="text" value={formData.companyName} onChange={handleChange} />
      <InputGroup labelForAndInputName="email" labelText="Email corporativo*" inputType="email" value={formData.email} onChange={handleChange} />

      <PhoneInputGroup value={formData.phone} onChange={handlePhoneChange} />

      <div className="flex flex-col w-full">
        <label htmlFor="position" className="text-purple_30 mb-2">Cargo*</label>
        <select className="bg-purple_70 border border-purple_40 rounded-lg p-2 text-purple_30" name="position" onChange={handleChange} value={formData.position} required>
          <option value="" disabled>Selecione seu cargo</option>
          <option value="socio_fundador">Sócio/Fundador</option>
          <option value="diretor_executivo">Diretor Executivo</option>
          <option value="diretor_gerente_marketing">Diretor/Gerente de Marketing</option>
          <option value="diretor_gerente_de_produto">Diretor/Gerente de Produto</option>
          <option value="diretor_gerente_de_vendas">Diretor/Gerente de Vendas</option>
          <option value="diretor_gerente_de_comunicacao">Diretor/Gerente de Comunicação</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <div className="w-full text-center lg:text-left mt-4">
        <input type="submit" value="Quero uma proposta personalizada" className="rounded-2xl text-white bg-purple_50 text-center py-4 font-bold cursor-pointer p-4 w-full max-w-[340px] lg:max-w-full" />
        {message && <p className="mt-4 text-lg font-bold">{message}</p>}
      </div>
    </form>
  );
};
