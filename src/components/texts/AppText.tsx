import { StyleSheet, Text, TextProps, TextStyle, View } from "react-native";
import React, { Children, FC } from "react";
import { s } from "react-native-size-matters";
import AppColors from "../../styles/Colors";

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: "bold" | "medium";
}
const AppText: FC<AppTextProps> = ({
  children,
  style,
  variant = "medium",
  ...rest
}) => {
  return (
    <Text {...rest} style={[styles[variant], style]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  bold: {
    fontSize: s(20),
    color: AppColors.black,
  },
  medium: {
    fontSize: s(16),
    color: AppColors.black,
  },
});
