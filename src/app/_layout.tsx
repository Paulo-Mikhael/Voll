import { StyleSheet, StatusBar } from "react-native";
import { Slot } from "expo-router";
import { NativeBaseProvider, VStack } from "native-base";

import { TEMAS } from "@/styles/temas";

export default function Layout() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar
        backgroundColor={TEMAS.colors.blue[800]}
        />
      <VStack flex={1} alignItems="center" justifyContent="center" paddingX={10}>
        <Slot />
      </VStack>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});