import { TouchableOpacity, StyleSheet, Text } from "react-native";

const RoundedButton = ({ children, variant = "primary", onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} activeOpacity={0.8}>
      <Text
        style={
          style.normalClassMap[variant] ?? style.gradientClassMap[variant] ?? {}
        }
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  normalClassMap: {
    primary: {
      backgroundColor: "#ea580c",
      padding: 10,
      borderRadius: 7,
      color: "#fafafa",
      textAlign: "center",
    },
    secondary: {
      backgroundColor: "green",
    },
  },
  gradientClassMap: {
    primaryGradient: {
      backgroundColor: "red",
    },
    secondaryGradient: {
      backgroundColor: "yellow",
    },
  },
});

export default RoundedButton;
