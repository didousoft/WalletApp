import { StyleSheet, Text } from "react-native";

const TextWithVariant = ({ variant = textVariantColor.default, children }) => {
  return <Text style={variant}>{children}</Text>;
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
export default TextWithVariant;
