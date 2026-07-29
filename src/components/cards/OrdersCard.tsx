import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import AppText from "../texts/AppText";
import { vs, s } from "react-native-size-matters";
import AppColors from "../../styles/Colors";
import { commonStyles } from "../../styles/SharedStyles";
interface OrdersCardProps {
  totalPrice: number;
  date: string;
  paidAmount: number;
}
const OrdersCard: FC<OrdersCardProps> = ({ totalPrice, date, paidAmount }) => {
  return (
    <View style={styles.container}>
      <AppText>ORDER DETAILS:</AppText>
      <View style={styles.seprator} />
      <View style={styles.detailsContainer}>
        <View style={styles.leftColumn}>
          <View style={styles.textTotalPrice}>
            <AppText>Total Price: </AppText>
            <AppText>$ {totalPrice}</AppText>
          </View>

          <View style={styles.textDate}>
            <AppText>Date: </AppText>
            <AppText>{date}</AppText>
          </View>
        </View>
        <View style={styles.rightColumn}>
          <AppText style={styles.textPaidAmount}>$ {paidAmount}</AppText>
          <AppText style={styles.textDatePaid}>{date}</AppText>
        </View>
      </View>
    </View>
  );
};

export default OrdersCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: s(10),
    margin: s(4),
    borderRadius: s(10),
    backgroundColor: AppColors.white,
    ...commonStyles.shadow,
    paddingVertical: vs(20),
  },
  seprator: {
    height: vs(1.5),
    backgroundColor: AppColors.primary,
    // borderWidth: s(1),
    width: "100%",
    alignSelf: "center",
    marginVertical: vs(5),
    // borderColor: AppColors.primary,
  },
  detailsContainer: { flexDirection: "row", justifyContent: "space-between" },
  leftColumn: { alignItems: "flex-start" },
  rightColumn: { alignItems: "flex-end" },
  textTotalPrice: { flexDirection: "row", marginVertical: vs(2) },
  textDate: { flexDirection: "row" },
  textPaidAmount: { color: AppColors.red, marginVertical: vs(2) },
  textDatePaid: { color: AppColors.red },
});
