import { ScrollView, StyleSheet, View } from "react-native";
import { appStyles } from "../../AppStyles";
import TextWithVariant, {
  TextSizes,
  textVariantColor,
} from "../../components/Texts/TextWithVariant";
import CardTopAmount from "../../components/Cards/CardTopAmount";
import CardRecent from "../../components/Cards/CardRecent";
import { useState } from "react";
import { pageType } from "../../types/PageType";
import AddMoney from "./AddMoney";

const Dashboard = () => {
  const [currView, setCurrView] = useState(pageType.DASHBOARD);
  const elements = [
    { title: "1000", body: "Ajout d'une pièce jointe" },
    { title: "1000", body: "Ajout d'une pièce jointe" },
    { title: "1000", body: "Ajout d'une pièce jointe" },
    { title: "1000", body: "Ajout d'une pièce jointe" },
    { title: "1000", body: "Ajout d'une pièce jointe" },
    { title: "1000", body: "Ajout d'une pièce jointe" },
  ];

  if (currView == pageType.ADD_MONEY) {
    return <AddMoney onReturnClick={() => setCurrView(pageType.DASHBOARD)} />;
  }
  return (
    <View style={appStyles.containerLarge}>
      <TextWithVariant size={TextSizes.Large} style={{ marginVertical: 10 }}>
        Tableau de bord
      </TextWithVariant>
      <View style={{ marginBottom: 10 }}>
        <CardTopAmount onPlusPressed={() => setCurrView(pageType.ADD_MONEY)}>
          <TextWithVariant size={TextSizes.Small}>
            Dernier mois :{" "}
            <TextWithVariant size={TextSizes.Small}>2000 TND </TextWithVariant>
            <TextWithVariant variant={textVariantColor.success}>
              (+19%)
            </TextWithVariant>
          </TextWithVariant>
        </CardTopAmount>
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
