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
import { useTranslation } from "react-i18next";

const EmptyCartScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <AppSafeView>
      <View style={styles.container}>
        <Ionicons
          name="bag-handle"
          size={s(90)}
          color={AppColors.primary}
          style={styles.Icon}
        />
        <AppText style={styles.title}>{t("cart.emptyTitle")}</AppText>
        <AppText style={styles.subTitle}>{t("cart.emptySubtitle")}</AppText>
        <AppButton
          onPress={() => navigation.navigate("Home")}
          title={t("cart.startShopping")}
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
