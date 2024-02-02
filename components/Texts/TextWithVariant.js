import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export const TextSizes = {
  Large: "titleLarge",
  Medium: "labelLarge",
  Small: "bodySmall",
  ExtraSmall: "labelSmall",
};

export const textVariantColor = StyleSheet.create({
  primary: {
    color: "#2196f3",
  },
  success: {
    color: "#4caf50",
  },
  danger: {
    color: "#f44336",
  },
  warning: {
    color: "#ff9800",
  },
  default: {
    color: "#fff",
  },
});

const TextWithVariant = ({
  variant = textVariantColor.default,
  children,
  style,
  size = TextSizes.Medium,
}) => {
  return (
    <Text style={{ ...variant, ...style }} variant={size}>
      {children}
    </Text>
  );
};

export default TextWithVariant;
