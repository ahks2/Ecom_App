import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSectionButton from "../../components/Buttons/ProfileSectionButton";
import { sharedPaddingHorizontal } from "../../styles/SharedStyles";
import AppText from "../../components/texts/AppText";
import { vs, s } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { SheetManager } from "react-native-actions-sheet";
import LanguageBottomSheet from "../../components/Language/LanguageBottomSheet";
import { useTranslation } from "react-i18next";
const ProfileScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <AppSafeView>
      <AppText
        variant="bold"
        style={{ fontSize: s(18), marginTop: vs(10), textAlign: "center" }}
      >
        {t("profile.hello")}, Amir
      </AppText>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <ProfileSectionButton
          title={t("profile.myOrders")}
          onPress={() => navigation.navigate("MyOrdersScreen")}
        />
        <ProfileSectionButton
          title={t("profile.language")}
          onPress={() => SheetManager.show("LANG_SHEET")}
        />

        <ProfileSectionButton
          title={t("profile.logout")}
          onPress={() => navigation.navigate("AuthStack")}
        />
      </View>
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
