import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/HomeHeader";

const ProfileScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <Text>HomeScreen</Text>
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
