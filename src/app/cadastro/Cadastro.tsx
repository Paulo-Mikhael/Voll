import { router } from "expo-router";

import { IInput } from "@/interfaces";

import { Botao } from "@/components/Botao";
import { EntradaTexto } from "@/components/EntradaTexto";
import { Titulo } from "@/components/Titulo";

export default function Cadastro() {
  const inputs: IInput[] = [
    {
      label: "Nome",
      placeholder: "Digite seu nome completo"
    },
    {
      label: "Email",
      placeholder: "Insira seu endereço de email",
      type: "email"
    },
    {
      label: "Crie uma senha",
      placeholder: "Insira sua senha",
      type: "password"
    },
    {
      label: "Repita a senha",
      placeholder: "Insira sua senha",
      type: "password"
    }
  ]

  function goFoward(){
    router.navigate("/cadastro/CadastroData");
  }

  return (
    <>
      <Titulo>
        Insira alguns dados básicos:
      </Titulo>
      {inputs.map((value, index) => (
        <EntradaTexto
          key={index}
          label={value.label}
          placeholder={value.placeholder}
          type={value.type && value.type}
        />
      ))}
      <Botao 
        marginTop={6}
        onPress={goFoward}
      >
        Avançar
      </Botao>
    </>
  );
}