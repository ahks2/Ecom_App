import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppColors from "../../styles/Colors";
import { vs, s } from "react-native-size-matters";
import { IMAGES } from "../../constants/Images-Paths";

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
    height: vs(40),
    width: s(120),
    tintColor: AppColors.white,
  },
});
