import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSectionButton from "../../components/Buttons/ProfileSectionButton";
import { sharedPaddingHorizontal } from "../../styles/SharedStyles";
import AppText from "../../components/texts/AppText";
import { vs, s } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <AppSafeView>
      <HomeHeader />
      <AppText
        variant="bold"
        style={{ fontSize: s(18), marginTop: vs(10), textAlign: "center" }}
      >
        Hello, Amir
      </AppText>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <ProfileSectionButton
          title={"My Orders"}
          onPress={() => navigation.navigate("MyOrdersScreen")}
        />
        <ProfileSectionButton title={"Language"} />

        <ProfileSectionButton title={"logout"} />
      </View>
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
