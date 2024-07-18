import { ITextProps, Text, Image, VStack } from "native-base";
import { ReactNode } from "react";

import Logo from "@/assets/logo.png";

interface Props extends ITextProps {
  children: ReactNode,
  logo?: boolean,
  toLeft?: boolean
}

export function Titulo({ children, logo = true, toLeft = false, ...rest}: Props) {
  return (
    <VStack width={toLeft ? "100%" : ""} alignItems={toLeft ? "" : "center"}>
      {logo && <Image source={Logo} alt="logo Voll" />}
      <Text
        fontSize={25}
        fontWeight="bold"
        color="gray.500"
        marginTop={5}
        textAlign={toLeft ? "left" : "center"}
        {...rest}
      >
        {children}
      </Text>
    </VStack>
  );
}