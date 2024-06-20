import { StyleSheet, View } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { twColors } from "../../AppStyles";
import TextWithVariant, {
  TextSizes,
  textVariantColor,
} from "../Texts/TextWithVariant";
import { constants } from "../../types/constants";

const CardTopAmount = ({
  onPlusPressed,
  title = "Ce mois",
  currAmount = "100 000",
  children,
  iconSymbol = "plus",
}) => {
  return (
    <Card style={CardTopAmountStyle.cardStyle}>
      <View style={CardTopAmountStyle.flex}>
        <View style={CardTopAmountStyle.amountsClass}>
          <TextWithVariant size={TextSizes.Small}>{title}</TextWithVariant>
          <TextWithVariant size={TextSizes.Large}>
            {currAmount} {constants.currency}
          </TextWithVariant>
          {children}
        </View>

        <IconButton
          onPress={() => onPlusPressed()}
          icon={iconSymbol}
          size={20}
          mode="contained-tonal"
          iconColor={"white"}
          containerColor="#ff9800"
        />
      </View>
    </Card>
  );
};

export const CardTopAmountStyle = StyleSheet.create({
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
