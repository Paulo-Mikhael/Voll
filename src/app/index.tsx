import {
  Text,
  Box,
  Link
} from "native-base";

import { Titulo } from "@/components/Titulo";
import { EntradaTexto } from "@/components/EntradaTexto";
import { Botao } from "@/components/Botao";
import { router } from "expo-router";
import { IInput } from "@/interfaces";
import { TouchableOpacity } from "react-native";

export default function Index() {
  const inputs: IInput[] = [
    {
      label: "Email",
      placeholder: "Insira seu endereço de email",
      type: "email"
    },
    {
      label: "Senha",
      placeholder: "Insira sua senha",
      type: "password"
    }
  ]

  function SignUp(){
    router.navigate('/cadastro/Cadastro');
  }

  return (
    <>
      <Titulo>
        Faça login em sua conta
      </Titulo>
      <Box>
        {inputs.map((value, index) => (
          <EntradaTexto 
            key={index}
            label={value.label} 
            placeholder={value.placeholder} 
            type={value.type && value.type}
          />
        ))}
      </Box>
      <Botao onPress={SignUp}>
        Entrar
      </Botao>
      <Link href="https://alura.com.br">
        <Text
          fontSize={16}
          textDecorationLine="underline"
          fontWeight={"medium"}
          marginTop={2}
          color="blue.800"
        >
          Esqueceu sua senha?
        </Text>
      </Link>
      <Box
        marginTop={5}
        alignItems="center"
        flexDir="row"
      >
        <Text marginRight={1}>
          Ainda não tem cadastro?
        </Text>
        <TouchableOpacity>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </>
  );
}