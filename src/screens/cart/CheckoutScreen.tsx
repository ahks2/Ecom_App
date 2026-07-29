import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import AppText from "../../components/texts/AppText";
import {
  commonStyles,
  sharedPaddingHorizontal,
} from "../../styles/SharedStyles";
import AppColors from "../../styles/Colors";
import { vs, s } from "react-native-size-matters";
import AppTextInputs from "../../components/inputs/AppTextInputs";
import AppButton from "../../components/Buttons/AppButton";

const CheckoutScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <View style={{ flex: 1 }}>
        <View style={styles.inputsContainer}>
          <AppTextInputs placeholder="Full Name" />
          <AppTextInputs placeholder="Phone Number" />
          <AppTextInputs placeholder="Detailed Address" />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <AppButton title="Confirm" />
      </View>
      <View />
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
