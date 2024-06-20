import { Image, Text, TextInput, View } from "react-native";
import { appStyles } from "../../AppStyles";
import logo from "../../assets/logo.png";
import RoundedButton from "../../components/Buttons/RoundedButton";
import { pageType } from "../../types/PageType";

const Login = ({ onLogin }) => {
  return (
    <View style={appStyles.container}>
      <View style={appStyles.logoStyle}>
        <Image source={logo} style={{ width: 40, height: 40 }} />
      </View>
      <Text style={appStyles.h1}>Welcome back !</Text>
      <Text style={{ ...appStyles.title, marginBottom: 70 }}>
        Login to continue
      </Text>
      <View
        style={{
          display: "flex",
          gap: 20,
          flexDirection: "column",
          width: "100%",
        }}
      >
        <TextInput
          style={appStyles.textInputStyle}
          fullWidth
          placeholder="Votre pseudo"
        />
        <TextInput
          style={appStyles.textInputStyle}
          fullWidth
          secureTextEntry
          placeholder="Votre mot de passe"
        />
        <Text style={{ ...appStyles.title, textAlign: "right" }}>
          Mot de passe oublié?
        </Text>
        <RoundedButton
          variant="primary"
          onPress={() => onLogin(pageType.CONNECTED)}
        >
          Valider
        </RoundedButton>
      </View>
    </View>
  );
};

export default Login;
