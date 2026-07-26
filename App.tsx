import { NavigationContainer } from "@react-navigation/native";
import { Text, StyleSheet } from "react-native";
import AppText from "./src/components/texts/AppText";
import AppSafeView from "./src/components/Views/AppSafeView";
import FlashMessage, { showMessage } from "react-native-flash-message";
import AppButton from "./src/components/Buttons/AppButton";
import AppTextInputs from "./src/components/inputs/AppTextInputs";
import SignUpScreen from "./src/screens/auth/SignUpScreen";
import AuthStack from "./src/navigations/AuthStack";
import MainAppStack from "./src/navigations/MainAppStack";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <FlashMessage position={"top"} />
        <AppSafeView>
          <MainAppStack />
        </AppSafeView>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
