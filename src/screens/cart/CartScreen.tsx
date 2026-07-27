import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/Buttons/AppButton";
import { AppFonts } from "../../styles/Fonts";
import AppColors from "../../styles/Colors";
import { s } from "react-native-size-matters";

const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <View style={styles.container}>
        <Ionicons name="bag-handle" size={70} color="black" />
        <AppText style={{ fontFamily: AppFonts.Bold }}>
          {" "}
          Your Cart is Empty
        </AppText>
        <AppText
          style={{ fontFamily: AppFonts.Medium, color: AppColors.medGray }}
        >
          {" "}
          Browse our products and find something you like
        </AppText>
        <AppButton
          onPress={() => {}}
          title="Start Shopping"
          style={{ width: "80%" }}
        />
      </View>
    </AppSafeView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
