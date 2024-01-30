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
