import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import InputSpinner from "react-native-input-spinner";
import colors from "../config/colors";
import InputSpinnerHorizontalSmall from "./inputSpinnerHorizontalSmall";

function ProductShop({
  imageURL,
  title = "Title",
  subtitle = "Subtitle",
  precio = "$10.000",
  precioUnidad = "$1.000",
  unidadMedida,
  tipoUnidad,
  onPress,
  onPressInputSpinner,
}) {
  const [cantidad, setCantidad] = useState(0);
  const costoxunidad = Math.round(precio / unidadMedida);

  return (
    <View>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.imageContainer}>
            {imageURL != null ? (
              <Image
                style={{ flex: 1, width: "100%", height: "100%" }}
                source={{ uri: imageURL }}
              />
            ) : null}
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productSubtitle}>Cod. {subtitle}</Text>
        <Text style={styles.price}>${precio}</Text>
        <Text style={styles.priceUnidad}>
          ${costoxunidad}
          <Text style={{ fontSize: 8 }}> x {tipoUnidad}</Text>
        </Text>
        <View style={{ position: "absolute", bottom: 10 }}>
          <InputSpinnerHorizontalSmall
            onPress={onPressInputSpinner}
          ></InputSpinnerHorizontalSmall>
        </View>
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
    backgroundColor: colors.lightPurple,
    marginBottom: 10,
    marginTop: 10,
  },
  productTitle: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 5,
    textAlign: "center",
    textTransform: "capitalize",
  },
  productSubtitle: {
    fontSize: 10,
    fontWeight: "300",
    marginTop: 5,
    textTransform: "capitalize",
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
