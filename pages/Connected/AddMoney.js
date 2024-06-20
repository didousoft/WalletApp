import { FlatList, ScrollView, Text, View } from "react-native";
import { appStyles } from "../../AppStyles";
import TextWithVariant, {
  TextSizes,
  textVariantColor,
} from "../../components/Texts/TextWithVariant";
import { IconButton } from "react-native-paper";
import CardTopAmount, {
  CardTopAmountStyle,
} from "../../components/Cards/CardTopAmount";
import { constants } from "../../types/constants";
import CardNewEcriture from "./AddMoneyComponents/CardNewEcriture";
import { useState } from "react";

const AddMoney = ({ onReturnClick }) => {
  const eligibleAmounts = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000];
  const [currentAmount, setCurrentAmount] = useState(0);
  const [lastAddedAmount, setLastAddedAmount] = useState(0);

  const addAmount = (newAmount) => {
    setCurrentAmount(currentAmount + newAmount);
    setLastAddedAmount(newAmount);
  };

  return (
    <View style={appStyles.containerLarge}>
      <View style={{ flexDirection: "row" }}>
        <TextWithVariant
          size={TextSizes.Large}
          style={{ marginVertical: 10, flexGrow: 1 }}
        >
          Nouvelle écriture
        </TextWithVariant>
        <IconButton
          onPress={onReturnClick}
          icon="close"
          size={20}
          mode="contained-tonal"
          iconColor={"white"}
          containerColor="black"
        />
      </View>

      {/* header section to show the sum of amount */}
      <CardTopAmount
        title="Montant actuel"
        iconSymbol="send"
        currAmount={currentAmount}
      >
        <TextWithVariant size={TextSizes.Small}>
          Montant ajouté :{" "}
          <TextWithVariant
            style={textVariantColor.success}
            size={TextSizes.Small}
          >
            +{lastAddedAmount} {constants.currency}
          </TextWithVariant>
        </TextWithVariant>
      </CardTopAmount>
      {/* A small tab here where we show a calculator if needed */}

      {/* Section which we show a scrollbar of all amounts */}
      <FlatList
        data={eligibleAmounts}
        keyExtractor={(item) => item}
        numColumns={2}
        columnWrapperStyle={{ flex: 1, gap: 20 }}
        key={1}
        renderItem={({ item }) => (
          <CardNewEcriture amount={item} onPress={addAmount} />
        )}
      />
    </View>
  );
};

export default AddMoney;
