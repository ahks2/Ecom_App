import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import AppColors from "../../styles/Colors";
import { IS_Android } from "../../constants/Constants";

interface AppSafeViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const AppSafeView: FC<AppSafeViewProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.primary,
    paddingTop: IS_Android ? StatusBar.currentHeight || 0 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
});
