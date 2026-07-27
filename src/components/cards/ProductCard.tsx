import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { vs, s } from "react-native-size-matters";
import AppColors from "../../styles/Colors";
import AppText from "../texts/AppText";
import { AppFonts } from "../../styles/Fonts";
import { Ionicons } from "@expo/vector-icons";
import { commonStyles } from "../../styles/SharedStyles";

interface ProductCardProps {
  onAddToCardPress: () => void;
  imageURL: string;
  title: string;
  price: number;
}

const ProductCard: FC<ProductCardProps> = ({
  onAddToCardPress,
  imageURL,
  title,
  price,
}) => {
  return (
    <View style={styles.container}>
      {/* Add to Cart */}
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={onAddToCardPress}
      >
        <Ionicons name="cart" size={s(15)} color={AppColors.white} />
      </TouchableOpacity>
      {/* Image UI */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageURL,
          }}
        />
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.titleText}>{title}</AppText>
        <AppText style={styles.priceText}>${price}</AppText>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: s(200),
    backgroundColor: AppColors.white,
    borderRadius: s(10),
    ...commonStyles.shadow,
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    height: vs(120),
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    paddingTop: s(8),
    paddingBottom: vs(15),
    paddingHorizontal: s(10),
  },
  titleText: {
    fontSize: s(14),
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
  },
  priceText: {
    fontSize: s(14),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginTop: vs(7),
  },
  addToCartButton: {
    height: s(28),
    width: s(28),
    position: "absolute",
    left: 5,
    top: 5,
    borderRadius: s(15),
    backgroundColor: AppColors.primary,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
