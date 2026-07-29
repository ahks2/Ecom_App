import { StyleSheet, Text, View, FlatList } from "react-native";
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
import CartItem from "../../components/cart/CartItem";
import TotalsView from "../../components/cart/TotalsView";
import { products } from "../../data/Products";
import { sharedPaddingHorizontal } from "../../styles/SharedStyles";
import CheckoutScreen from "./CheckoutScreen";

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <AppSafeView>
      <HomeHeader />
      <View style={{ flex: 1, paddingHorizontal: sharedPaddingHorizontal }}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CartItem {...item} />}
          showsVerticalScrollIndicator={false}
        />
        <TotalsView Items_Price={1000} Order_Total={5000} />
        <AppButton
          title="Continue"
          onPress={() => navigation.navigate("CheckoutScreen")}
        />
        {/* <EmptyCartScreen /> */}
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
