import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import InputSpinnerHorizontal from "../components/inputSpinnerHorizontal";

function App({
  image,
  title = "Title",
  subtitle = "Subtitle",
  precio = "10.000",
  precioUnidad = "1.000",
}) {
  return (
    <Screen style={styles.container}>
      <View
        style={{
          width: 250,
          height: 500,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 1,
        }}
      >
        <View style={styles.boxImage}>
          <View style={styles.imageContainer}></View>
        </View>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productSubtitle}>{subtitle}</Text>
        <Text style={styles.precio}>{precio}</Text>
        <Text style={styles.precioUnidad}>
          {precioUnidad}
          <Text style={{ fontSize: 8 }}> x Unidad</Text>
        </Text>
        <InputSpinnerHorizontal></InputSpinnerHorizontal>
      </View>
    </Screen>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  boxImage: {
    padding: 10,
    width: 200,
    height: 200,
    backgroundColor: "grey",
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
  productTitle: {
    fontSize: 40,
    fontWeight: "700",
  },
  productSubtitle: {
    fontSize: 15,
    marginBottom: 60,
    marginLeft: 2,
  },
  precio: {
    fontSize: 23,
    fontWeight: "700",
  },
  precioUnidad: {
    fontSize: 15,
    marginLeft: 2,
    marginBottom: 20,
  },
});
