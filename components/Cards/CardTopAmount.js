import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { twColors } from "../../AppStyles";
import TextWithVariant from "../Texts/TextWithVariant";

const CardTopAmount = () => {
  return (
    <Card style={Style.cardStyle}>
      <View style={Style.flex}>
        <View style={{ flexGrow: 1, flexDirection: "column", gap: 10 }}>
          <TextWithVariant>10 0000 TND</TextWithVariant>
          <TextWithVariant>10 0000 TND</TextWithVariant>
          <TextWithVariant>10 0000 TND</TextWithVariant>
        </View>
        <TextWithVariant style={{ flexGrow: 0 }}>Icon</TextWithVariant>
      </View>
    </Card>
  );
};

const Style = StyleSheet.create({
  cardStyle: {
    backgroundColor: twColors.neutral[900],
    padding: 20,
  },
  flex: {
    flexDirection: "row",
  },
});

export default CardTopAmount;
