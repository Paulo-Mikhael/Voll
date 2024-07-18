import { EntradaTexto } from "@/components/EntradaTexto";
import { Titulo } from "@/components/Titulo";
import { VStack } from "native-base";

export default function Inicio() {
  return (
    <>
      <Titulo color="blue.500" toLeft>
        Boas Vindas!
      </Titulo>
      <EntradaTexto placeholder="Digite sua especialidade" />
      <EntradaTexto placeholder="Digite sua localização" />
    </>
  );
}