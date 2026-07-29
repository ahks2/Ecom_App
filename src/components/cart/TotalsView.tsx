import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { vs, s } from "react-native-size-matters";
import AppText from "../texts/AppText";
import AppColors from "../../styles/Colors";
import { shippingFees, taxes } from "../../constants/Constants";
interface TotalsViewProps {
  Items_Price: number;
  Order_Total: number;
  Taxes?: number;
  Shipping_Fee?: number;
}
const TotalsView: FC<TotalsViewProps> = ({
  Items_Price,
  Order_Total,
  Taxes = shippingFees,
  Shipping_Fee = taxes,
}) => {
  return (
    <View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Items Price:</AppText>
        <AppText style={styles.textPrice}>$ {Items_Price}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Taxes:</AppText>
        <AppText style={styles.textPrice}>$ {Taxes}</AppText>
      </View>

      <View style={styles.row}>
        <AppText style={styles.textTitle}>Shipping Fee:</AppText>
        <AppText style={styles.textPrice}>$ {Shipping_Fee}</AppText>
      </View>
      <View style={styles.separator} />

      <View style={styles.row}>
        <AppText style={styles.textTitle}>Order Total:</AppText>
        <AppText style={styles.textPrice}>$ {Order_Total}</AppText>
      </View>
    </View>
  );
};

export default TotalsView;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(10),
  },
  textTitle: {
    fontSize: s(16),
    flex: 1,
  },
  textPrice: {
    fontSize: s(16),
    color: AppColors.primary,
  },
  separator: {
    height: vs(1),
    width: "100%",
    backgroundColor: AppColors.blueGray,
    marginVertical: vs(5),
  },
});
