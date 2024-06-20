import { StatusBar, StyleSheet, View } from "react-native";
import Connected from "./pages/Connected";
import Login from "./pages/Login";
import { useState } from "react";
import { pageType } from "./types/PageType";

export default function App() {
  // TODO : add async storage
  const [currentPage, setCurrentPage] = useState(pageType.LOGIN);
  return (
    <View style={Style.main}>
      {currentPage === pageType.LOGIN ? (
        <Login onLogin={(e) => setCurrentPage(e)} />
      ) : (
        <Connected />
      )}
    </View>
  );
}

const Style = StyleSheet.create({
  main: {
    //paddingTop: StatusBar.currentHeight,
    width: "100%",
    height: "100%",
  },
});
