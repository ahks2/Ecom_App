import { StyleSheet, Text, Image } from "react-native";
import React, { useState, useTransition } from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import { sharedPaddingHorizontal } from "../../styles/SharedStyles";
import { IMAGES } from "../../constants/Images-Paths";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/Buttons/AppButton";
import AppColors from "../../styles/Colors";
import { useNavigation } from "@react-navigation/native";

import AppTextInputsController from "../../components/inputs/AppTextInputsController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";
import { useTranslation } from "react-i18next";

const SignInScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  // Validation schema
  const schema = yup
    .object({
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

  // Form data type
  type FormData = yup.InferType<typeof schema>;

  // React Hook Form
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Login handler
  const onLoginPress = (data: FormData) => {
    console.log(data);

    navigation.navigate("MainAppBottomTabs");
  };

  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />

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

      <AppButton title={t("auth.login")} onPress={handleSubmit(onLoginPress)} />

      <AppButton
        title={t("auth.signUp")}
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
    height: s(150),
    width: s(150),
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
  registerButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
