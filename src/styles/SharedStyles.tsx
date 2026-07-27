import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import AppColors from "./Colors";

export const sharedPaddingHorizontal = s(12);

export const commonStyles = StyleSheet.create({
  shadow: {
    // IOS
    shadowColor: AppColors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Android
    elevation: 4,
  },
});
