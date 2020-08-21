import React from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import colors from "../config/colors";
import imageShop from "../assets/groceriesBag.png";
import ProductCart from "../components/ProductCart";

const PRODUCTS = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

function App({ route }) {
  useRoute();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Tu pedido</Text>
        <View style={styles.iconContainer}>
          <Text
            style={{ fontSize: 80, color: colors.white, fontWeight: "bold" }}
          >
            $
          </Text>
        </View>
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
          <Text style={styles.subtitle}>TuMercado</Text>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Text style={styles.backShop}>Volver a la tienda</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
        }}
      >
        <FlatList
          data={PRODUCTS}
          keyExtractor={(product) => product.id.toString()}
          renderItem={({ item }) => <ProductCart></ProductCart>}
        ></FlatList>
      </View>
      <View
        style={{
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.checkoutButton}>
          <View style={styles.numberItemsCircle}>
            <Text
              style={{ fontSize: 25, color: colors.orange, fontWeight: "bold" }}
            >
              2
            </Text>
          </View>
          <Text style={{ fontSize: 28, color: "white", fontWeight: "600" }}>
            Checkout
          </Text>
          <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
            $100.000
          </Text>
        </View>
      </View>
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
    </View>
  );
}

export default App;

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
    backgroundColor: colors.orange,
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
    color: "red",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
  checkoutButton: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    padding: 10,
    backgroundColor: colors.orange,
    borderRadius: 50,
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
