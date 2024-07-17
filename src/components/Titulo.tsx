import { ITextProps, Text, Image } from "native-base";
import { ReactNode } from "react";

import Logo from "@/assets/logo.png";

interface Props extends ITextProps {
  children: ReactNode,
  logo?: boolean
}

export function Titulo({ children, logo = true, ...rest}: Props) {
  return (
    <>
      {logo && <Image source={Logo} alt="logo Voll" />}
      <Text
        fontSize={25}
        fontWeight="bold"
        color="gray.500"
        marginTop={5}
        textAlign="center"
        {...rest}
      >
        {children}
      </Text>
    </>
  );
}