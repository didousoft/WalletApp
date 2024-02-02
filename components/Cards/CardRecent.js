import { Image, StyleSheet, View } from "react-native";
import TextWithVariant, { textVariantColor } from "../Texts/TextWithVariant";
import { Card, IconButton } from "react-native-paper";
import { appStyles, twColors } from "../../AppStyles";
import logo from "../../assets/logo.png";
import Divider from "../Divider";

const CardRecent = () => {
  return (
    <Card style={Style.main}>
      <View style={Style.flex}>
        <View style={{ ...appStyles.logoStyle, marginTop: 0, marginBottom: 0 }}>
          <Image source={logo} style={{ width: 20, height: 20 }} />
        </View>
        <View style={{ flexGrow: 1, gap: 3 }}>
          <TextWithVariant variant={textVariantColor.primary}>
            Ajout de 1000 TND
          </TextWithVariant>
          <TextWithVariant>Achat d'une pièce jointe</TextWithVariant>
        </View>
        <IconButton
          onPress={() => console.log("todo")}
          icon="chevron-down"
          size={25}
          iconColor={twColors.neutral[300]}
        />
      </View>
    </Card>
  );
};

const Style = StyleSheet.create({
  main: {
    backgroundColor: twColors.neutral[700],
    padding: 20,
    marginBottom: 20,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});

export default CardRecent;
