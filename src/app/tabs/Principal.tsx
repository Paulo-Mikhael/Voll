import { VStack, Text, Pressable, ScrollView } from "native-base";

import { useState } from "react";
import Inicio from "./Inicio";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";

enum TABS {
  INICIO = 0,
  CONSULTAS = 1,
  EXPLORAR = 2,
  PERFIL = 3
}

export default function Principal() {
  const [tabSelected, setTabSelected] = useState<TABS>(TABS.INICIO);
  const tabs: { tabName: string }[] = [
    {
      tabName: "Início",
    },
    {
      tabName: "Consultas",
    },
    {
      tabName: "Explorar",
    },
    {
      tabName: "Perfil",
    }
  ]

  return (
    <>
      <ScrollView width="100%" flex={1} paddingTop={10}>
        {
          tabSelected === TABS.INICIO && <Inicio />
        }{
          tabSelected === TABS.CONSULTAS && <Consultas />
        }{
          tabSelected === TABS.EXPLORAR && <Explorar />
        }{
          tabSelected === TABS.PERFIL && <Perfil />
        }
      </ScrollView>
      <VStack
        height={76}
        position="absolute"
        backgroundColor="blue.800"
        bottom={0}
        width="128%"
        justifyContent="center"
        flexDirection="row"
      >
        {tabs.map((value, index) => (
          <Pressable
            key={index}
            width="24"
            justifyContent="center"
            alignItems="center"
            flexDir="row"
            marginRight="2"
            height="100%"
            onPress={() => {
              setTabSelected(index)
            }}
          >
            <Text
              color={tabSelected === index ? "blue.500" : "white"}
              fontSize={16}
            >
              {value.tabName}
            </Text>
          </Pressable>
        ))}
      </VStack>
    </>
  );
}