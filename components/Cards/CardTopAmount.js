import { StyleSheet, View } from "react-native";
import { Card, IconButton, MD3Colors } from "react-native-paper";
import { twColors } from "../../AppStyles";
import TextWithVariant, {
  TextSizes,
  textVariantColor,
} from "../Texts/TextWithVariant";

const CardTopAmount = () => {
  return (
    <Card style={Style.cardStyle}>
      <View style={Style.flex}>
        <View style={Style.amountsClass}>
          <TextWithVariant size={TextSizes.Small}>Ce mois</TextWithVariant>
          <TextWithVariant size={TextSizes.Large}>10 0000 TND</TextWithVariant>
          <TextWithVariant size={TextSizes.Small}>
            Dernier mois :{" "}
            <TextWithVariant size={TextSizes.Small}>2000 TND </TextWithVariant>
            <TextWithVariant variant={textVariantColor.success}>
              (+19%)
            </TextWithVariant>
          </TextWithVariant>
        </View>

        <IconButton
          onPress={() => console.log("todo")}
          icon="send"
          size={20}
          mode="contained-tonal"
          iconColor={"white"}
          containerColor="#ff9800"
        />
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
    height: 100,
    alignItems: "center",
  },
  amountsClass: {
    flexDirection: "column",
    gap: 3,
    display: "flex",
    flexGrow: 1,
  },
});

export default CardTopAmount;
