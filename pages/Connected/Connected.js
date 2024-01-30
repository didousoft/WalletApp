import { Text, View } from "react-native";
import { appStyles } from "../../AppStyles";
import { Button } from "react-native-paper";

const Connected = () => {
  const keypressed = () => {
    console.log("Triggerd");
  };
  return (
    <View style={appStyles.container} pointerEvents="box-only">
      <Text>This is my view</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={keypressed}
        style={{ pointerEvents: "box-only" }}
      >
        My simple btna
      </Button>
    </View>
  );
};

export default Connected;
