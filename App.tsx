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
import HomeHeader from "./src/components/headers/HomeHeader";
import i18n from "./src/Localization/I18n";
import { I18nextProvider } from "react-i18next";
import { SheetProvider } from "react-native-actions-sheet";
import "H:/HTML/Ecom_App/src/Localization/Sheets";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
      {/* <StatusBar style="light" backgroundColor={AppColors.primary} /> */}

      <AppSafeView>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <SheetProvider>
              <NavigationContainer>
                <FlashMessage position={"top"} />
                <HomeHeader />
                <MainAppStack />
              </NavigationContainer>
            </SheetProvider>
          </I18nextProvider>
        </Provider>
      </AppSafeView>
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
