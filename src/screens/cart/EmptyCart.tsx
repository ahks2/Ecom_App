import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/Buttons/AppButton";
import { AppFonts } from "../../styles/Fonts";
import AppColors from "../../styles/Colors";
import { s, vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../home/HomeScreen";

const EmptyCartScreen = () => {
  const navigation = useNavigation();
  return (
    <AppSafeView>
      <HomeHeader />
      <View style={styles.container}>
        <Ionicons
          name="bag-handle"
          size={s(90)}
          color={AppColors.primary}
          style={styles.Icon}
        />
        <AppText style={styles.title}> Your Cart is Empty</AppText>
        <AppText style={styles.subTitle}>
          {" "}
          Browse our products and find something you like
        </AppText>
        <AppButton
          onPress={() => navigation.navigate("Home")}
          title="Start Shopping"
          style={styles.Button}
        />
      </View>
    </AppSafeView>
  );
};

export default EmptyCartScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontFamily: AppFonts.Bold,
    marginBottom: vs(18),
    fontSize: s(20),
    color: AppColors.primary,
  },
  subTitle: {
    fontSize: s(16),
    fontFamily: AppFonts.Medium,
    color: AppColors.medGray,
    marginBottom: vs(18),
    textAlign: "center",
    width: "85%",
  },
  Button: { width: "80%", marginBottom: vs(18) },
  Icon: { marginBottom: vs(18), opacity: 0.9 },
});
