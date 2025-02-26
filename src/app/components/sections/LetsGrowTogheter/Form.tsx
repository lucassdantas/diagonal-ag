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

  const [message, setMessage] = useState<string | null>(null); // Estado para a mensagem de resposta

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null); // Resetar mensagem ao iniciar o envio

    try {
      const currentUrl = location.protocol+'//'+location.hostname+'/backend/send-email.php'
      const response = await fetch( currentUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData),
      });

      const result = await response.text();
      if (response.ok) {
        setMessage("✅ Enviado com sucesso!");
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          position: "socio_fundador",
        }); // Resetar o formulário após sucesso
      } else {
        setMessage("❌ Erro ao enviar: " + result);
      }
    } catch (error) {
      setMessage("❌ Erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <form className="flex flex-col lg:flex-row flex-wrap lg:justify-center gap-4 py-4 items-center" onSubmit={handleSubmit}>
      <InputGroup labelForAndInputName="name"        labelText="Nome*"              inputType="text"  value={formData.name}        onChange={handleChange} />
      <InputGroup labelForAndInputName="companyName" labelText="Nome da empresa*"   inputType="text"  value={formData.companyName} onChange={handleChange} />
      <InputGroup labelForAndInputName="email"       labelText="Email corporativo*" inputType="email" value={formData.email}       onChange={handleChange} />
      <InputGroup labelForAndInputName="phone"       labelText="Telefone*"          inputType="tel"   value={formData.phone}       onChange={handleChange} />

      <div className="flex flex-col w-full">
        <label htmlFor="position" className="text-purple_30">Cargo*</label>
        <select className="bg-purple_70 border border-purple_40 rounded-lg p-2" name="position" onChange={handleChange} value={formData.position}>
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
        
        {/* Exibir mensagem de feedback */}
        {message && <p className="mt-4 text-lg font-bold">{message}</p>}
      </div>
    </form>
  );
};
