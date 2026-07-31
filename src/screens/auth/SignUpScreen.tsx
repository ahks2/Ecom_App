import { StyleSheet, Text, Image, Alert } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import { sharedPaddingHorizontal } from "../../styles/SharedStyles";
import { IMAGES } from "../../constants/Images-Paths";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/Buttons/AppButton";
import AppColors from "../../styles/Colors";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
// 1- Form Controller Imports
import AppTextInputsController from "../../components/inputs/AppTextInputsController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";

const SignUpScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const schema = yup
    .object({
      userName: yup
        .string()
        .required(t("validation.userNameRequired"))
        .min(5, t("validation.userNameMin")),

      email: yup
        .string()
        .email(t("validation.invalidEmail"))
        .required(t("validation.emailRequired")),

      password: yup
        .string()
        .required(t("validation.passwordRequired"))
        .min(6, t("validation.passwordMin")),
    })
    .required();

  type FormData = yup.InferType<typeof schema>;

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });

  const onSignUpPress = (data: FormData) => {
    console.log(data);
    navigation.navigate("MainAppBottomTabs");
  };
  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputsController
        control={control}
        name="userName"
        placeholder={t("auth.userName")}
      />
      <AppTextInputsController
        control={control}
        name="email"
        placeholder={t("auth.email")}
        keyboardType="email-address"
      />
      <AppTextInputsController
        control={control}
        name="password"
        placeholder={t("auth.password")}
        secureTextEntry
      />
      <AppText style={styles.appName}>{t("app.name")}</AppText>
      <AppButton
        title={t("auth.createAccount")}
        onPress={handleSubmit(onSignUpPress)}
      />
      <AppButton
        title={t("auth.goToSignIn")}
        style={styles.signInButton}
        textColor={AppColors.primary}
        onPress={() => navigation.navigate("SignInScreen")}
      />
    </AppSafeView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(150),
    width: s(150),
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
  signInButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
