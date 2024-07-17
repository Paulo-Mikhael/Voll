import { Button, IButtonProps, Text } from "native-base";
import { ReactNode } from "react";

interface Props extends IButtonProps {
  children: ReactNode,
  disabled?: boolean,
  onPress?: () => void,
  variant?: "primary" | "secondary"
}

export function Botao({ children, disabled, onPress, variant = "primary", ...rest }: Props) {
  return (
    <Button
      width="100%"
      backgroundColor={variant === "primary" ? "blue.800" : "gray.200"}
      disabled={disabled}
      marginTop={3}
      borderRadius="lg"
      onPress={onPress}
      {...rest}
    >
      <Text
        color="white"
        fontWeight="bold"
        fontSize={16}
      >
        {children}
      </Text>
    </Button>
  );
}