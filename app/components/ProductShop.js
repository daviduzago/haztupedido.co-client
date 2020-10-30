import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import numeroMilesimas from "../hooks/numeroMilesimas";
import colors from "../config/colors";
import InputSpinnerHorizontalSmall from "./inputSpinnerHorizontalSmall";

function ProductShop({
  item,
  onPressProducto,
  onPressAgregar,
  onPressEliminar,
  carrito,
}) {
  const costoxunidad = Math.round(item.costo_venta / item.unidad_medida);

  return (
    <View>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPressProducto}>
          <View style={styles.imageContainer}>
            {item.imagen != null ? (
              <Image
                style={{ flex: 1, width: "100%", height: "100%" }}
                source={{ uri: item.imagen }}
              />
            ) : null}
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.productTitle}>
          {item.nombreProducto}
          <Text style={styles.cantidadUnidad}>
            {" "}
            {item.unidad_medida}
            {item.tipo_unidad}
          </Text>
        </Text>

        <Text style={styles.productSubtitle}>Cod. {item.referencia}</Text>
        <Text style={styles.price}>${numeroMilesimas(item.costo_venta)}</Text>
        <Text style={styles.priceUnidad}>
          ${numeroMilesimas(costoxunidad)}
          <Text style={{ fontSize: 8 }}> x {item.tipo_unidad}</Text>
        </Text>
        <View style={{ position: "absolute", bottom: 10 }}>
          <InputSpinnerHorizontalSmall
            onPressAgregar={onPressAgregar}
            onPressEliminar={onPressEliminar}
            quantity={carrito.filter((c) => c.id === item.id).length}
          />
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
  cantidadUnidad: {
    fontSize: 10,
    fontWeight: "300",
    marginTop: 5,
    textTransform: "lowercase",
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
