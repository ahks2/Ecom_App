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
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../home/HomeScreen";
import EmptyCartScreen from "./EmptyCart";

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <AppSafeView>
      <EmptyCartScreen />
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
