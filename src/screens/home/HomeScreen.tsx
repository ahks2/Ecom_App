import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import { AppFonts } from "../../styles/Fonts";
import AppText from "../../components/texts/AppText";
import ProductCard from "../../components/cards/ProductCard";
import { products } from "../../data/Products";
import { s, vs } from "react-native-size-matters";

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(10),
        }}
        contentContainerStyle={{
          paddingHorizontal: s(10),
        }}
        renderItem={({ item }) => (
          <ProductCard
            onAddToCardPress={() => null}
            imageURL={item.imageURL}
            title={item.title}
            price={item.price}
          />
        )}
      />
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
