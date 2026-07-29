import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";
import { vs, s } from "react-native-size-matters";
import AppText from "../texts/AppText";
import AppColors from "../../styles/Colors";
import { AppFonts } from "../../styles/Fonts";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
const tempItem = {
  id: 1,
  price: 1199,
  title: "iPhone 16 Pro Max",
  imageURL:
    "https://kelveen.ir/wp-content/uploads/2025/04/InShot_20260124_143145632.jpg",
};
interface CartItemProps {
  title: string;
  price: number | string;
  imageURL: string;
  qty: number;
  onDeletePress: () => void;
  onIncreasePress: () => void;
  onReducePress: () => void;
}
const CartItem: FC<CartItemProps> = ({
  title,
  price,
  imageURL,
  qty,
  onDeletePress,
  onIncreasePress,
  onReducePress,
}) => {
  return (
    <View style={styles.container}>
      {/* Image container */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageURL,
          }}
        />
      </View>

      {/* Details container */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.textTitle}>{title}</AppText>
        <AppText style={styles.textPrice}>$ {price}</AppText>

        <View style={styles.qtyContainer}>
          <Pressable onPress={onIncreasePress} style={styles.iconButton}>
            <FontAwesome name="plus" />
          </Pressable>
          <AppText style={styles.textQty}>{qty}</AppText>
          <Pressable onPress={onReducePress} style={styles.iconButton}>
            <FontAwesome name="minus" />
          </Pressable>
        </View>
      </View>

      {/* Delete btn container */}
      <View style={styles.deleteContainer}>
        <TouchableOpacity onPress={onDeletePress} style={styles.deleteButton}>
          <AntDesign name="delete" color={AppColors.red} size={s(14)} />
          <AppText style={styles.deleteText}>Delete</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: vs(4),
    borderColor: AppColors.blueGray,
  },
  imageContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: { flex: 3.5, paddingLeft: s(5) },
  deleteContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingEnd: s(12),
    paddingBottom: s(5),
  },
  image: { height: s(80), width: s(80), borderRadius: 5 },
  textTitle: {
    fontSize: s(14),
    color: AppColors.black,
    fontFamily: AppFonts.Medium,
    marginTop: vs(15),
  },
  textPrice: {
    fontSize: s(16),
    color: AppColors.black,
    fontFamily: AppFonts.Bold,
    marginVertical: vs(10),
  },
  deleteText: {
    marginLeft: 7,
    fontFamily: AppFonts.Medium,
    color: AppColors.medGray,
    fontSize: s(12),
    marginTop: 3,
  },
  deleteButton: { flexDirection: "row", alignItems: "center" },
  qtyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: s(5),
    borderRadius: s(30),
    borderWidth: s(1),
    borderColor: AppColors.blueGray,
    width: s(80),
    paddingVertical: vs(5),
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.lightGrey,
    padding: s(5),
    height: s(20),
    width: s(20),
    borderRadius: s(10),
  },
  textQty: {
    flex: 1,
    textAlign: "center",
    color: AppColors.primary,
  },
});
