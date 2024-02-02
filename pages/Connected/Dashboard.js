import { ScrollView, StyleSheet, View } from "react-native";
import { appStyles } from "../../AppStyles";
import TextWithVariant, {
  TextSizes,
  textVariantColor,
} from "../../components/Texts/TextWithVariant";
import CardTopAmount from "../../components/Cards/CardTopAmount";
import Divider, { dividerOrientation } from "../../components/Divider";
import CardRecent from "../../components/Cards/CardRecent";
/**
 * <TextWithVariant variant={textVariantColor.default}>
        Page 1
      </TextWithVariant>
 */
const Dashboard = () => {
  const elements = [
    { title: "1000", body: "Ajout d'une pièce jointe" },
    { title: "1000", body: "Ajout d'une pièce jointe" },
    { title: "1000", body: "Ajout d'une pièce jointe" },
    { title: "1000", body: "Ajout d'une pièce jointe" },
    { title: "1000", body: "Ajout d'une pièce jointe" },
    { title: "1000", body: "Ajout d'une pièce jointe" },
  ];
  return (
    <View style={appStyles.containerLarge}>
      <TextWithVariant size={TextSizes.Large} style={{ marginVertical: 10 }}>
        Tableau de bord
      </TextWithVariant>
      <View style={{ marginBottom: 10 }}>
        <CardTopAmount />
      </View>
      <TextWithVariant size={TextSizes.Large}>Récents</TextWithVariant>
      <ScrollView style={{ flexGrow: 1 }}>
        {elements.map((el, ind) => (
          <CardRecent key={ind} />
        ))}
      </ScrollView>
    </View>
  );
};

const Style = StyleSheet.create({});

export default Dashboard;
