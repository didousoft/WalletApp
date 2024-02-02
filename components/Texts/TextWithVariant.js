import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export const TextSizes = {
  Large: "Large",
  Medium: "Medium",
  Small: "Small",
};

const TextWithVariant = ({
  variant = textVariantColor.default,
  children,
  style,
}) => {
  return (
    <Text
      style={{ ...variant, ...Style.main, ...style }}
      variant={size}
      color="red"
    >
      {children}
    </Text>
  );
};

// TODO : add more variants here
export const textVariantColor = StyleSheet.create({
  primary: {
    color: "blue",
  },
  default: {
    color: "#fff",
  },
});

const Style = StyleSheet.create({
  main: {
    flex: 1,
  },
});
export default TextWithVariant;
