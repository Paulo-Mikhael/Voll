import { Botao } from "@/components/Botao";
import { EntradaTexto } from "@/components/EntradaTexto";
import { Titulo } from "@/components/Titulo";
import { IInput } from "@/interfaces";
import { router } from "expo-router";

export default function CadastroData() {
  const inputs: IInput[] = [
    {
      label: "CEP",
      placeholder: "Insira seu CEP"
    },
    {
      label: "Endereço",
      placeholder: "Insira seu endereço"
    },
    {
      label: "Número",
      placeholder: "Insira seu número"
    },
    {
      label: "Complemento",
      placeholder: "Insira seu complemento"
    },
    {
      label: "Telefone",
      placeholder: "(00) 00000-0000"
    }
  ]

  function goBack(){
    router.back();
  }
  function goFoward(){
    router.navigate("/cadastro/CadastroPlanos");
  }

  return (
    <>
      <Titulo>
        Agora, mais alguns dados sobre você:
      </Titulo>
      {inputs.map((value, index) => (
        <EntradaTexto
          key={index}
          label={value.label}
          placeholder={value.placeholder}
        />
      ))}
      <Botao
        variant="secondary"
        onPress={goBack}
      >
        Voltar
      </Botao>
      <Botao
        onPress={goFoward}
      >
        Avançar
      </Botao>
    </>
  );
}