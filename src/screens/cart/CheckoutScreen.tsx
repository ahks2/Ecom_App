import { StyleSheet, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import {
  commonStyles,
  sharedPaddingHorizontal,
} from "../../styles/SharedStyles";
import AppColors from "../../styles/Colors";
import { vs, s } from "react-native-size-matters";
import AppButton from "../../components/Buttons/AppButton";
import { useForm } from "react-hook-form";
import AppTextInputsController from "../../components/inputs/AppTextInputsController";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

const CheckoutScreen = () => {
  const { t } = useTranslation();

  const schema = yup
    .object({
      fullName: yup
        .string()
        .required(t("checkout.validation.nameRequired"))
        .min(3, t("checkout.validation.nameMin")),

      phoneNumber: yup
        .string()
        .required(t("checkout.validation.phoneRequired"))
        .matches(/^[0-9]+$/, t("checkout.validation.phoneDigits"))
        .min(10, t("checkout.validation.phoneMin")),

      detailedAddress: yup
        .string()
        .required(t("checkout.validation.addressRequired"))
        .min(15, t("checkout.validation.addressMin")),
    })
    .required();

  type FormData = yup.InferType<typeof schema>;

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const saveOrder = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <AppSafeView>
      <View style={{ flex: 1 }}>
        <View style={styles.inputsContainer}>
          <AppTextInputsController
            control={control}
            name="fullName"
            placeholder={t("checkout.fullName")}
          />

          <AppTextInputsController
            control={control}
            name="phoneNumber"
            placeholder={t("checkout.phoneNumber")}
          />

          <AppTextInputsController
            control={control}
            name="detailedAddress"
            placeholder={t("checkout.detailedAddress")}
          />
        </View>
      </View>

      <View style={styles.bottomButtonContainer}>
        <AppButton
          title={t("checkout.confirm")}
          onPress={handleSubmit(saveOrder)}
        />
      </View>
    </AppSafeView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyles.shadow,
    padding: s(8),
    paddingVertical: s(20),
    borderRadius: s(8),
    backgroundColor: AppColors.white,
    marginTop: vs(1),
  },

  bottomButtonContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
    position: "absolute",
    width: "100%",
    bottom: vs(30),
    borderTopWidth: 1,
    borderColor: AppColors.lightGrey,
    paddingTop: vs(10),
  },
});
