import { StyleSheet } from "react-native-web";

const wrappers = {
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#09090b",
    alignItems: "center",
    color: "#fff",
    padding: 50,
  },
  containerLarge: {
    backgroundColor: "#09090b",
    color: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 15,
    flex: 1,
    gap: 15,
  },
  logoStyle: {
    backgroundColor: "#27272a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 200,
    marginBottom: 30,
    marginTop: 60,
  },
};

const typography = {
  h1: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "600",
  },
  title: {
    fontSize: 13,
    color: "#71717a",
    fontWeight: "600",
  },
};

export const twColors = {
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#fafafa",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "##0a0a0a",
  },
};

export const appStyles = StyleSheet.create({
  ...wrappers,
  ...typography,
  textInputStyle: {
    padding: 10,
    backgroundColor: "#27272a",
    color: "#fff",
    borderRadius: 10,
  },
});
