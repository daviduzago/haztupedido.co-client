import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import InputSpinner from "react-native-input-spinner";
import colors from "../config/colors";

function ProductShop({
  image,
  title = "Title",
  subtitle = "Subtitle",
  precio = "$10.000",
  precioUnidad = "$1.000",
  onPress,
}) {
  const [cantidad, setCantidad] = useState(0);
  return (
    <View>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.imageContainer}></View>
        </TouchableWithoutFeedback>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productSubtitle}>{subtitle}</Text>
        <Text style={styles.price}>{precio}</Text>
        <Text style={styles.priceUnidad}>
          {precioUnidad}
          <Text style={{ fontSize: 8 }}> x Unidad</Text>
        </Text>
        <InputSpinner
          style={{
            marginTop: 20,
            position: "absolute",
            justifyContent: "center",
            bottom: 5,
            left: 5,
            width: 140,
          }}
          max={100}
          min={0}
          step={1}
          colorMax={colors.lightGray}
          colorMin={colors.lightGray}
          textColor={colors.black}
          value={cantidad}
          buttonTextColor={colors.black}
          editable={false}
          inputStyle={{
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 5,
            backgroundColor: colors.lightGray,
          }}
          background={colors.lightGray}
          onChange={(num) => {
            console.log(num);
          }}
        />
      </View>
    </View>
  );
}

export default ProductShop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    height: 300,
    backgroundColor: colors.lightPurple,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
  },
  imageContainer: {
    width: 100,
    height: 90,
    backgroundColor: colors.lightGray,
    marginBottom: 10,
    marginTop: 10,
  },
  productTitle: {
    fontSize: 15,
    fontWeight: "500",
    marginTop: 5,
  },
  productSubtitle: {
    fontSize: 10,
    fontWeight: "300",
    marginTop: 5,
  },
  price: {
    marginTop: 15,
    position: "absolute",
    top: 180,
    fontWeight: "600",
  },
  priceUnidad: {
    fontSize: 10,
    marginTop: 10,
    position: "absolute",
    top: 200,
  },
});
