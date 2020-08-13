import React from "react";
import { StyleSheet, View, FlatList, Animated, ScrollView } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import Categorias from "../components/categorias";
import colors from "../config/colors";
import HeaderShop from "../components/HeaderShop";
import { useRoute } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";
import ProductShop from "../components/ProductShop";
import { useNavigation } from "@react-navigation/native";

const PRODUCTS = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

function Shop({ route }) {
  useRoute();
  const navigation = useNavigation();

  // let scrollY = new Animated.Value(0);
  // const startHeaderHeight = 200 + useHeaderHeight();
  // const endHeaderHeight = useHeaderHeight();

  // let animatedHeaderHeight = scrollY.interpolate({
  //   inputRange: [0, 50],
  //   ouputRange: [startHeaderHeight, endHeaderHeight],
  //   extrapolate: "clamp",
  // });

  return (
    <Screen style={styles.container}>
      <HeaderShop
        title={route.params.title}
        imageShop={require("../assets/exito.png")}
      ></HeaderShop>
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <AppTextInput
          icon={"shopping-search"}
          placeholder={"Buscar productos o categorias"}
          size={22}
        ></AppTextInput>
        <View style={{ height: 50 }}>
          <Categorias></Categorias>
        </View>
        <FlatList
          style={{ margin: 5, paddingHorizontal: 5 }}
          numColumns={2} // set number of columns
          columnWrapperStyle={styles.row} // space them out evenly
          data={PRODUCTS}
          keyExtractor={(product) => product.id.toString()}
          renderItem={({ item }) => (
            <ProductShop
              onPress={() => navigation.navigate("Product")}
            ></ProductShop>
          )}
        />
      </ScrollView>
    </Screen>
  );
}

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
});
