import { StyleSheet, Text, TextInput, TextStyle, View } from "react-native";
import React, { FC } from "react";
import { vs, s } from "react-native-size-matters";
import AppColors from "../../styles/Colors";

interface AppTextInputsProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
  style?: TextStyle;
}
const AppTextInputs: FC<AppTextInputsProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input, style]}
    />
  );
};

export default AppTextInputs;

const styles = StyleSheet.create({
  input: {
    height: vs(40),
    borderRadius: s(25),
    borderWidth: 1,
    borderColor: AppColors.borderColor,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "white",
    width: "100%",
    marginBottom: vs(10),
  },
});
