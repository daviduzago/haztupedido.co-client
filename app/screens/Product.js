import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import InputSpinnerHorizontal from "../components/inputSpinnerHorizontal";
import { useRoute } from "@react-navigation/native";

function Product({ route }) {
  useRoute();
  const costoxunidad = Math.round(
    route.params.precio / route.params.unidadMedida
  );

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
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
            }}
            source={{ uri: route.params.imageURL }}
          />
        </View>
        <Text style={styles.productTitle}>{route.params.producto}</Text>
        <Text style={styles.productSubtitle}>
          Cod. {route.params.referencia}
        </Text>
        <Text style={styles.precio}>${route.params.precio}</Text>
        <Text style={styles.precioUnidad}>
          ${costoxunidad}
          <Text style={{ fontSize: 8 }}> x {route.params.tipoUnidad}</Text>
        </Text>
        <InputSpinnerHorizontal></InputSpinnerHorizontal>
      </View>
    </Screen>
  );
}

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  boxImage: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
    overflow: "hidden",
  },
  productImage: {
    height: 110,
    width: 110,
    backgroundColor: "white",
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    textTransform: "capitalize",
  },
  productSubtitle: {
    fontSize: 15,
    marginBottom: 60,
    marginLeft: 2,
  },
  precio: {
    fontSize: 30,
    fontWeight: "700",
  },
  precioUnidad: {
    fontSize: 15,
    marginLeft: 2,
    marginBottom: 20,
  },
});
