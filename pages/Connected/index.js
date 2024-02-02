import { BottomNavigation } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import { Text } from "react-native";
import Dashboard from "./Dashboard";

const Connected = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "dashboard",
      title: "Saisie",
      focusedIcon: "home-outline",
      unfocusedIcon: "home",
    },
    {
      key: "stats",
      title: "Statistiques",
      focusedIcon: "star",
    },
    {
      key: "params",
      title: "Paramètres",
      focusedIcon: "cog",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: () => <Dashboard />,
    stats: () => <Text>Bar</Text>,
    params: () => <Text>Params</Text>,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};

export default Connected;
