import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import { sharedPaddingHorizontal } from "../../styles/SharedStyles";
import { IMAGES } from "../../constants/Images-Paths";
import { s, vs } from "react-native-size-matters";
import AppTextInputs from "../../components/inputs/AppTextInputs";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/Buttons/AppButton";
import AppColors from "../../styles/Colors";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputs placeholder="Email" onChangeText={setEmail} />
      <AppTextInputs
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton
        title="Login"
        onPress={() => navigation.navigate("MainAppBottomTabs")}
      />
      <AppButton
        title="Sign Up"
        style={styles.registerButton}
        textColor={AppColors.primary}
        onPress={() => navigation.navigate("SignUpScreen")}
      />
    </AppSafeView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(200),
    width: s(200),
    marginTop: vs(30),
    marginBottom: vs(10),
  },
  appName: {
    fontSize: s(16),
    marginBottom: s(15),
  },
  registerButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
