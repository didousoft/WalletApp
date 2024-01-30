import { Text } from "react-native-web";
import { appStyles } from "../../../AppStyles";

const InputWithLabel = ({ title, placeholder, value }) => {
  return (
    <>
      <Text style={appStyles.title}>{title}</Text>
    </>
  );
};

export default InputWithLabel;
