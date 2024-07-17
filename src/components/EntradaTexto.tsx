import { FormControl, Input, Text } from "native-base";

import { IInput } from "@/interfaces";
import { useEffect, useState } from "react";
import { KeyboardTypeOptions } from "react-native";

export function EntradaTexto({ label, placeholder, type = "text" }: IInput) {
  const [keyboardType, setKeyboardType] = useState<KeyboardTypeOptions | undefined>("default");

  function chooseKeyboard(){
    if (type === "email"){
      setKeyboardType("email-address");
    }else if (type === "number") {
      setKeyboardType("number-pad");
    }
  }

  useEffect(() => {
    chooseKeyboard();
  }, []);

  return (
    <FormControl marginTop={2}>
      <FormControl.Label>
        <Text
          color="blue.800"
          fontSize={16}
          fontWeight="bold"
        >
          {label}
        </Text>
      </FormControl.Label>
      <Input
        type={type === "password" ? "password" : "text"}
        keyboardType={keyboardType}
        placeholder={placeholder}
        size="lg"
        width="100%"
        borderRadius="lg"
        backgroundColor="gray.100"
        shadow="3"
      />
    </FormControl>
  );
}