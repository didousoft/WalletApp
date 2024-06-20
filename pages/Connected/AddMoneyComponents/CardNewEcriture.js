import { Card } from "react-native-paper";
import { CardTopAmountStyle } from "../../../components/Cards/CardTopAmount";
import { constants } from "../../../types/constants";
import TextWithVariant, {
  TextSizes,
} from "../../../components/Texts/TextWithVariant";
import { twColors } from "../../../AppStyles";
import { View } from "react-native";
import RoundedButton from "../../../components/Buttons/RoundedButton";

const CardNewEcriture = ({ amount, onPress }) => {
  return (
    <View style={{ marginBottom: 20, flexGrow: 1 }}>
      <Card
        style={{
          ...CardTopAmountStyle.cardStyle,
          backgroundColor: twColors.neutral[700],
        }}
      >
        <TextWithVariant
          size={TextSizes.Medium}
          style={{ textAlign: "center", marginBottom: 10 }}
        >
          {amount} {constants.currency}
        </TextWithVariant>
        <View>
          <RoundedButton onPress={() => onPress(amount)}>
            Sélectionner
          </RoundedButton>
        </View>
      </Card>
    </View>
  );
};

export default CardNewEcriture;
