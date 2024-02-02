import { Text, View } from "react-native";

export const dividerOrientation = {
  vertical: "paddingVertical",
  horizontal: "paddingHorizontal",
};

const Divider = ({
  size = 10,
  direction = dividerOrientation.vertical,
  customStyle,
}) => {
  return (
    <View style={{ [direction]: size, ...customStyle }}>
      <Text>&nbsp;</Text>
    </View>
  );
};

export default Divider;
