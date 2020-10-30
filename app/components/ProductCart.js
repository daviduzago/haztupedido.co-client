import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import numeroMilesimas from "../hooks/numeroMilesimas";
import InputSpinnerVertical from "./inputSpinnerVertical";

function ProductCart({ item, quantity, agregarProducto, eliminarProducto }) {
  return (
    <View sytle={styles.container}>
      <View style={styles.box}>
        <View style={styles.productImage}>
          <Image
            style={{ flex: 1, width: "100%", height: "100%" }}
            source={{ uri: item.imagen }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: 10,
          }}
        >
          <Text style={styles.title}>{item.nombreProducto}</Text>
          <Text style={styles.cantidadUnidades}>
            {item.unidad_medida}
            {item.tipo_unidad}
          </Text>
          <Text style={styles.subtitle}>Ref {item.referencia}</Text>
          <Text style={styles.precio}>
            ${numeroMilesimas(item.costo_venta)}
          </Text>
        </View>
        <View>
          <InputSpinnerVertical
            agregarProducto={agregarProducto}
            eliminarProducto={eliminarProducto}
            quantity={quantity}
          ></InputSpinnerVertical>
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
    fontSize: 13,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 10,
    marginBottom: 10,
    marginLeft: 2,
  },
  cantidadUnidades: {
    fontSize: 13,
    marginBottom: 10,
    marginTop: 2,
    marginLeft: 2,
    textTransform: "lowercase",
    fontWeight: "500",
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
