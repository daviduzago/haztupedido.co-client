import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import colors from "../config/colors";
import InputSpinner from "./inputSpinner";

function ProductCart({
  image,
  title = "Title",
  subtitle = "Subtitle",
  precio = "10.000",
  precioUnidad = "1.000",
  onPress,
}) {
  return (
    <View sytle={styles.container}>
      <View style={styles.box}>
        <View style={styles.productImage}></View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: 10,
          }}
        >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.precio}>${precio}</Text>
          <Text style={styles.precioUnidad}>${precioUnidad}</Text>
        </View>
        <View>
          <InputSpinner></InputSpinner>
        </View>
      </View>
    </View>
  );
}

export default ProductCart;

const styles = StyleSheet.create({
  container: { flex: 1, margin: 10 },
  box: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    width: "100%",
    height: 130,
    backgroundColor: colors.gray,
    borderRadius: 15,
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  productImage: {
    height: 110,
    width: 110,
    backgroundColor: "white",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 15,
    marginLeft: 2,
  },
  precio: {
    fontSize: 23,
    fontWeight: "700",
  },
  precioUnidad: {
    fontSize: 15,
    marginLeft: 2,
  },
});
