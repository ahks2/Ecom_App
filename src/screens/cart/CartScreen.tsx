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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart,
} from "../../store/reducers/CartSlice";
import { taxes, shippingFees } from "../../constants/Constants";
import { useTranslation } from "react-i18next";

const CartScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  const totalProductsPriceSum = items.reduce((acc, item) => acc + item.sum, 0);
  const orderTotal = totalProductsPriceSum
    ? totalProductsPriceSum + taxes + shippingFees
    : 0;
  return (
    <AppSafeView>
      {!totalProductsPriceSum ? (
        <EmptyCartScreen />
      ) : (
        <View style={{ flex: 1, paddingHorizontal: sharedPaddingHorizontal }}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CartItem
                {...item}
                price={item.sum}
                onDeletePress={() => dispatch(removeProductFromCart(item))}
                onReducePress={() => dispatch(removeItemFromCart(item))}
                onIncreasePress={() => dispatch(addItemToCart(item))}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
          <TotalsView
            Items_Price={totalProductsPriceSum}
            Order_Total={orderTotal}
            Taxes={totalProductsPriceSum ? taxes : 0}
            Shipping_Fee={totalProductsPriceSum ? shippingFees : 0}
          />
          <AppButton
            title={t("cart.continue")}
            onPress={() => navigation.navigate("CheckoutScreen")}
          />
        </View>
      )}
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
