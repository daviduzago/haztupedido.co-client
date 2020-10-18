import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import InputSpinnerVerticalSmall from "./inputSpinnerVerticalSmall";

function ProductPromo({
  item,
  styleLabel,
  quantity,
  agregarProducto,
  eliminarProducto,
}) {
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
          <Text style={styles.subtitle}>Ref {item.referencia}</Text>
          <Text style={styles.precio}>
            ${item.costo_venta - item.costo_venta * (item.valorDescuento / 100)}
          </Text>
          <Text style={{ color: "gray", fontSize: 12 }}>
            Antes $<Text style={styles.precioAntes}>{item.costo_venta}</Text>
          </Text>
        </View>
        <View style={[styles.discountLabel, styleLabel]}>
          <Text style={{ fontSize: 23, color: "white", fontWeight: "bold" }}>
            -{item.valorDescuento}%
          </Text>
        </View>
        <View>
          <InputSpinnerVerticalSmall
            quantity={quantity}
            agregarProducto={agregarProducto}
            eliminarProducto={eliminarProducto}
          ></InputSpinnerVerticalSmall>
        </View>
      </View>
    </View>
  );
}

export default ProductPromo;

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 10, marginVertical: 5 },
  box: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    height: 110,
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  discountLabel: {
    backgroundColor: colors.lightPurple,
    borderRadius: 40,
    width: 80,
    height: 80,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    height: 90,
    width: 90,
    backgroundColor: "white",
    borderRadius: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  subtitle: {
    fontSize: 10,
    marginBottom: 15,
    marginLeft: 2,
  },
  precio: {
    fontSize: 20,
    fontWeight: "700",
  },
  precioAntes: {
    color: "gray",
    fontSize: 12,
    marginLeft: 2,
    textDecorationLine: "line-through",
  },
});
