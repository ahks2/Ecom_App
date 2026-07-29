import { NavigationContainer } from "@react-navigation/native";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import AppText from "./src/components/texts/AppText";
import AppSafeView from "./src/components/Views/AppSafeView";
import FlashMessage, { showMessage } from "react-native-flash-message";
import AppButton from "./src/components/Buttons/AppButton";
import AppTextInputs from "./src/components/inputs/AppTextInputs";
import SignUpScreen from "./src/screens/auth/SignUpScreen";
import AuthStack from "./src/navigations/AuthStack";
import MainAppStack from "./src/navigations/MainAppStack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import AppColors from "./src/styles/Colors";
import { Provider } from "react-redux";
import { store } from "./src/store/Store";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-bold": require("./src/asssets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./src/asssets/fonts/Nunito-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} />;
  } else {
    null;
  }
  return (
    <>
      <StatusBar style="light" backgroundColor={AppColors.primary} />
      <Provider store={store}>
        <NavigationContainer>
          <FlashMessage position={"top"} />
          <AppSafeView>
            <MainAppStack />
          </AppSafeView>
        </NavigationContainer>
      </Provider>
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
