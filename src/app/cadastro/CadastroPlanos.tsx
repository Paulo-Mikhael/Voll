import { Box, Checkbox, Text } from "native-base";
import { router } from "expo-router";

import { Botao } from "@/components/Botao";
import { Titulo } from "@/components/Titulo";

export default function CadastroPlanos() {
  const checkboxes = [
    {
      label: "Sulamerica",
      checked: false
    },
    {
      label: "Unimed",
      checked: false
    },
    {
      label: "Bradesco",
      checked: false
    },
    {
      label: "Amil",
      checked: false
    },
    {
      label: "Biosaúde",
      checked: false
    },
    {
      label: "Biovida",
      checked: false
    },
    {
      label: "Outros",
      checked: false
    },
    {
      label: "Não tenho plano",
      checked: false
    },
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
        Para finalizar, qual seu plano de saúde?
      </Titulo>
      <Box
        display="flex"
        alignItems="start"
        width="100%"
        my={6}
      >
        <Text
          fontSize={23}
          fontWeight="bold"
          color="blue.800"
        >
          Selecione os planos:
        </Text>
        {checkboxes.map((value, index) => (
          <Checkbox
            key={index}
            value={value.label}
          >
            <Text
              fontSize={21}
              color="gray.300"
            >
              {value.label}
            </Text>
          </Checkbox>
        ))}
      </Box>
      <Botao
        variant="secondary"
        onPress={goBack}
      >
        Voltar
      </Botao>
      <Botao
        onPress={goFoward}
      >
        Cadastrar!
      </Botao>
    </>
  );
}