import { View } from "react-native";
import { appStyles } from "../../AppStyles";
import TextWithVariant, {
  textVariantColor,
} from "../../components/Texts/TextWithVariant";

const Dashboard = () => {
  return (
    <View style={appStyles.containerLarge}>
      <TextWithVariant variant={textVariantColor.primary}>
        Page 1
      </TextWithVariant>
    </View>
  );
};

export default Dashboard;
