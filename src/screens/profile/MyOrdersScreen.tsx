import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import OrdersCard from "../../components/cards/OrdersCard";
import { Orders } from "../../data/Orders";

const MyOrdersScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />

      <FlatList
        data={Orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <OrdersCard {...item} />}
      />
    </AppSafeView>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({});
