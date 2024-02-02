import { StyleSheet, View } from "react-native";
import { appStyles } from "../../AppStyles";
import TextWithVariant, {
  textVariantColor,
} from "../../components/Texts/TextWithVariant";
import CardTopAmount from "../../components/Cards/CardTopAmount";
import Divider, { dividerOrientation } from "../../components/Divider";
/**
 * <TextWithVariant variant={textVariantColor.default}>
        Page 1
      </TextWithVariant>
 */
const Dashboard = () => {
  return (
    <View style={appStyles.containerLarge}>
      <CardTopAmount />
      <Divider size={10} direction={dividerOrientation.vertical} />
    </View>
  );
};

const Style = StyleSheet.create({});

export default Dashboard;
