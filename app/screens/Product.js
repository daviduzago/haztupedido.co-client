import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import Context from "../Context/context";
import colors from "../config/colors";
import numeroMilesimas from "../hooks/numeroMilesimas";
import InputSpinnerHorizontal from "../components/inputSpinnerHorizontal";
import Screen from "../components/Screen";

function Product({ route }) {
  useRoute();
  const costoxunidad = Math.round(
    route.params.item.costo_venta / route.params.item.unidad_medida
  );

  return (
    <Context.Consumer>
      {({ carrito, agregarProducto, eliminarProducto }) => (
        <Screen style={styles.container}>
          <View
            style={{
              width: 250,
              height: 500,
              marginTop: 20,
              borderRadius: 20,
              backgroundColor: colors.lightPurple,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.boxImage}>
              <Image
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                }}
                source={{ uri: route.params.item.imagen }}
              />
            </View>
            <Text style={styles.productTitle}>
              {route.params.item.nombreProducto}
              <Text style={styles.cantidadUnidad}>
                {" "}
                {route.params.item.unidad_medida}
                {route.params.item.tipo_unidad}
              </Text>
            </Text>
            <Text style={styles.productSubtitle}>
              Cod. {route.params.item.referencia}
            </Text>
            <Text style={styles.precio}>
              ${numeroMilesimas(route.params.item.costo_venta)}
            </Text>
            <Text style={styles.precioUnidad}>
              ${numeroMilesimas(costoxunidad)}
              <Text style={{ fontSize: 13 }}>
                x {route.params.item.tipo_unidad}.
              </Text>
            </Text>
            <InputSpinnerHorizontal
              quantity={
                carrito.filter((c) => c.id === route.params.item.id).length
              }
              agregarProducto={() => agregarProducto(route.params.item)}
              eliminarProducto={() => eliminarProducto(route.params.item)}
            />
          </View>
        </Screen>
      )}
    </Context.Consumer>
  );
}

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "flex-start",
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
    marginBottom: 30,
    marginTop: 5,
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
  cantidadUnidad: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 5,
    textTransform: "lowercase",
  },
});
