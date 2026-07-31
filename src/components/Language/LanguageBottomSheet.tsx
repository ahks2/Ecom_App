import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import AppText from "../texts/AppText";
import AppButton from "../Buttons/AppButton";
import { StyleSheet, View } from "react-native";
import { vs, s } from "react-native-size-matters";
import RadioWithTitle from "../inputs/RadioWithTitle";
import { languageArr } from "../../Localization/LanguagesList";
import i18n from "../../Localization/I18n";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

const LanguageBottomSheet = () => {
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const { t } = useTranslation();

  const onLanguagePress = (code: string) => {
    setSelectedLang(code);
  };

  const handleConfirm = () => {
    SheetManager.hide("LANG_SHEET");
    i18n.changeLanguage(selectedLang);
  };

  return (
    <ActionSheet id="LANG_SHEET">
      <SafeAreaView>
        <View style={styles.container}>
          <AppText style={styles.title}>{t("language.title")}</AppText>

          {languageArr.map((lang) => (
            <RadioWithTitle
              key={lang.code}
              title={
                lang.code === "en"
                  ? t("language.english")
                  : lang.code === "ar"
                    ? t("language.arabic")
                    : lang.label
              }
              selected={selectedLang === lang.code}
              onPress={() => onLanguagePress(lang.code)}
            />
          ))}

          <AppButton
            style={styles.button}
            title={t("language.confirm")}
            onPress={handleConfirm}
          />
        </View>
      </SafeAreaView>
    </ActionSheet>
  );
};

export default LanguageBottomSheet;

const styles = StyleSheet.create({
  container: {
    padding: s(16),
  },

  title: {
    marginBottom: vs(20),
    textAlign: "center",
  },

  button: {
    marginTop: vs(15),
  },
});
