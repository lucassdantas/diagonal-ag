"use client";

import { useState } from "react";
import { InputGroup } from "@/app/components/sections/LetsGrowTogheter/InputGroup";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    position: "socio_fundador",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const response = await fetch("https://seudominio.com/enviar-email.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData),
    });

    const result = await response.text();
    alert(result);
  };

  return (
    <form className="flex flex-col lg:flex-row flex-wrap lg:justify-center gap-4 py-4 items-center" onSubmit={handleSubmit}>
      <InputGroup labelForAndInputName="name" labelText="Nome*" inputType="text" onChange={handleChange} />
      <InputGroup labelForAndInputName="companyName" labelText="Nome da empresa*" inputType="text" onChange={handleChange} />
      <InputGroup labelForAndInputName="email" labelText="Email corporativo*" inputType="email" onChange={handleChange} />
      <InputGroup labelForAndInputName="phone" labelText="Telefone*" inputType="tel" onChange={handleChange} />

      <div className="flex flex-col w-full">
        <label htmlFor="position" className="text-purple_30">Cargo*</label>
        <select className="bg-purple_70 border border-purple_40 rounded-lg p-2" name="position" onChange={handleChange}>
          <option value="socio_fundador">Sócio/Fundador</option>
          <option value="diretor_executivo">Diretor Executivo</option>
          <option value="diretor_gerente_marketing">Diretor/Gerente de Marketing</option>
          <option value="diretor_gerente_de_produto">Diretor/Gerente de Produto</option>
          <option value="diretor_gerente_de_vendas">Diretor/Gerente de Vendas</option>
          <option value="diretor_gerente_de_comunicacao">Diretor/Gerente de Comunicação</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <div className="w-full text-center">
        <input type="submit" value="Quero uma proposta personalizada" className="rounded-2xl text-white bg-purple_50 text-center py-4 font-bold cursor-pointer p-4" />
      </div>
    </form>
  );
};
