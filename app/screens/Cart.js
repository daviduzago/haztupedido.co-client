import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  Alert,
  Platform,
} from "react-native";
import AppButtonGradient from "../components/AppButtonGradient";
import AsyncStorage from "@react-native-community/async-storage";
import Context from "../Context/context";
import colors from "../config/colors";
import numeroMilesimas from "../hooks/numeroMilesimas";
import imageShop from "../assets/groceriesBag.png";
import LottieView from "lottie-react-native";
import ProductCart from "../components/ProductCart";

function Carrito() {
  useRoute();
  const [name, setName] = useState("");

  const getValue = async () => {
    try {
      const item = await AsyncStorage.getItem("nombre");
      setName(item);
    } catch (e) {
      console.log(e);
    }
  };
  getValue();
  const navigateTo = name != null || "" ? "CacheInfo" : "CheckOutForm";
  const navigation = useNavigation();
  return (
    <Context.Consumer>
      {({ carrito, total, setCarrito, agregarProducto, eliminarProducto }) => (
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Tu Pedido</Text>
            <LinearGradient
              style={styles.iconContainer}
              colors={["#3E0991", "#8b00de"]}
              start={[0.65, 0.7]}
              end={[0.15, 0.3]}
            >
              <Text
                style={{
                  fontSize: 80,
                  color: colors.lightGray,
                  fontWeight: "bold",
                }}
              >
                $
              </Text>
            </LinearGradient>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "grey",
              borderBottomWidth: 1,
              padding: 5,
            }}
          >
            <Image style={styles.imageShop} source={imageShop}></Image>
            <View style={{ flexDirection: "column", padding: 10 }}>
              <Text style={styles.subtitle}>Tu Mercado</Text>
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <View
                  style={{
                    backgroundColor: colors.red,
                    height: 25,
                    width: 145,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 3,
                  }}
                >
                  <Text style={styles.backShop}>Seguir Comprando</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: 10,
            }}
          >
            {carrito.length === 0 && (
              <View
                style={{
                  height: "100%",
                  padding: 20,
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "500",
                    marginTop: 10,
                    zIndex: 1,
                  }}
                >
                  El carrito esta vacio
                </Text>
                {Platform.OS != "android" && (
                  <LottieView
                    style={{
                      width: 300,
                      height: 300,
                      position: "absolute",
                      zIndex: 0,
                    }}
                    ref={(animation) => {
                      animation = animation;
                    }}
                    source={require("../assets/lottie/watermelon.json")}
                    autoPlay
                    loop={false}
                  />
                )}
              </View>
            )}
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
              height: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {carrito.length === 0 && (
              <AppButtonGradient
                title={"Volver a la tienda"}
                onPress={() => navigation.navigate("Shop")}
              ></AppButtonGradient>
            )}
            {carrito.length != 0 && (
              <TouchableWithoutFeedback
                disabled={carrito.length === 0}
                onPress={() => {
                  if (total(carrito) < 20000) {
                    Alert.alert(
                      "Lo sentimos",
                      "Debe realizar pedidos mayores a $20.000",
                      [
                        {
                          text: "Ok",
                          onPress: () => navigation.navigate("Shop"),
                          style: "cancel",
                        },
                      ]
                    );
                  } else navigation.navigate(navigateTo);
                }}
              >
                <LinearGradient
                  style={styles.checkoutButton}
                  colors={["#3E0991", "#8b00de"]}
                  start={[0.8, 0.2]}
                  end={[0.1, 0.8]}
                >
                  <View style={styles.numberItemsCircle}>
                    <Text
                      style={{
                        fontSize: 25,
                        color: colors.logoPurple,
                        fontWeight: "bold",
                      }}
                    >
                      {carrito.length}
                    </Text>
                  </View>
                  <Text
                    style={{ fontSize: 28, color: "white", fontWeight: "600" }}
                  >
                    Tus Datos
                  </Text>
                  <Text
                    style={{ fontSize: 15, color: "white", fontWeight: "bold" }}
                  >
                    ${numeroMilesimas(total(carrito))}
                  </Text>
                </LinearGradient>
              </TouchableWithoutFeedback>
            )}
          </View>
          {carrito.length > 0 && (
            <TouchableWithoutFeedback
              onPress={() =>
                Alert.alert(
                  "Vaciar Carrito",
                  "¿Esta seguro que desea vaciar el carrito?",
                  [
                    {
                      text: "Si",
                      onPress: () => {
                        navigation.navigate("Shop");
                        setCarrito([]);
                      },
                      style: "cancel",
                    },
                    { text: "No", onPress: () => {} },
                  ]
                )
              }
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "grey",
                    textDecorationLine: "underline",
                  }}
                >
                  Vaciar el carrito
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>
      )}
    </Context.Consumer>
  );
}

export default Carrito;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
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
