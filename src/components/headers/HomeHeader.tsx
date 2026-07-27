import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppColors from "../../styles/Colors";
import { vs, s } from "react-native-size-matters";
import { IMAGES } from "../../constants/Images-Paths";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.appLogo2} style={styles.logo} />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: vs(30),
    width: s(160),
    tintColor: AppColors.white,
    marginBottom: vs(5),
  },
});
