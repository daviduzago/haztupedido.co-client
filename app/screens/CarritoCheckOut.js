import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import AppButtonGradient from "../components/AppButtonGradient";
import AppButton from "../components/AppButton";
import Context from "../Context/context";
import colors from "../config/colors";
import imageShop from "../assets/groceriesBag.png";
import ProductCart from "../components/ProductCart";

function CarritoCheckOut() {
  useRoute();
  const navigation = useNavigation();

  return (
    <Context.Consumer>
      {({ carrito, agregarProducto, eliminarProducto }) => (
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "grey",
              borderBottomWidth: 1,
              padding: 5,
            }}
          >
            <Image style={styles.imageShop} source={imageShop}></Image>
            <View
              style={{
                flexDirection: "column",
                padding: 10,
                justifyContent: "center",
              }}
            >
              <Text style={styles.subtitle}>Tu Mercado</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: 10,
            }}
          >
            <FlatList
              data={carrito.filter((c, index) => carrito.indexOf(c) === index)}
              keyExtractor={(product) => product.id.toString()}
              renderItem={({ item }) => (
                <ProductCart
                  item={item}
                  quantity={carrito.filter((c) => c.id === item.id).length}
                  agregarProducto={() => agregarProducto(item)}
                  eliminarProducto={() => eliminarProducto(item)}
                />
              )}
            ></FlatList>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AppButtonGradient
              styleText={{ fontSize: 25 }}
              onPress={() => navigation.navigate("Shop")}
              title={"Agregar mas productos"}
            />
            <AppButton
              onPress={() => navigation.navigate("CheckOut")}
              styleButton={{
                backgroundColor: colors.lightGray,
                borderWidth: 2,
                borderColor: colors.darkPurple,
                width: "90%",
              }}
              styleText={{ color: colors.darkPurple }}
              title={"Ir a pagar"}
            />
          </View>
        </View>
      )}
    </Context.Consumer>
  );
}

export default CarritoCheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: "700",
  },
  iconContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: colors.logoPurple,
    justifyContent: "center",
    alignItems: "center",
  },
  imageShop: {
    width: 80,
    height: 80,
  },
  subtitle: {
    fontSize: 35,
    fontWeight: "500",
    marginBottom: 5,
  },
  backShop: {
    fontSize: 15,
    color: colors.white,
    fontWeight: "bold",
    marginLeft: 5,
  },
  checkoutButton: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    padding: 10,
    backgroundColor: colors.red,
    borderRadius: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  numberItemsCircle: {
    backgroundColor: "white",
    height: 45,
    width: 45,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
