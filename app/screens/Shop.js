import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import Categorias from "../components/categorias";
import ProductShop from "../components/ProductShop";
import Animated from "react-native-reanimated";
import Street from "../assets/street.jpg";
import Promociones from "../components/promociones";
import LottieView from "lottie-react-native";

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
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
  {
    id: 16,
  },
  {
    id: 17,
  },
  {
    id: 18,
  },
  {
    id: 19,
  },
  {
    id: 20,
  },
];

function Shop({ route }) {
  useRoute();
  const navigation = useNavigation();
  const scrollY = new Animated.Value(0);
  const startHeaderHeight = 175 + useHeaderHeight();
  const startSearchCategory = 130 + useHeaderHeight();
  const startFlatListHeight = 270 + useHeaderHeight();

  const headerY = Animated.interpolate(scrollY, {
    inputRange: [0, startHeaderHeight],
    outputRange: [0, -startHeaderHeight],
    extrapolate: "clamp",
  });
  const searchCategoryY = Animated.interpolate(scrollY, {
    inputRange: [0, startSearchCategory],
    outputRange: [0, -startSearchCategory],
    extrapolate: "clamp",
  });
  const flatListY = Animated.interpolate(scrollY, {
    inputRange: [0, startFlatListHeight],
    outputRange: [0, -useHeaderHeight() - 240],
    extrapolate: "clamp",
  });
  // const promocionY = Animated.interpolate(scrollY, {
  //   inputRange: [0, startHeaderHeight],
  // });
  return (
    <Screen style={styles.container}>
      <Animated.View
        style={{
          flex: 1,
          position: "absolute",
          backgroundColor: "white",
          top: 0,
          right: 0,
          elevation: 1000,
          left: 0,
          height: 170,
          transform: [{ translateY: headerY }],
        }}
      >
        <ImageBackground
          style={{ height: "100%", width: "100%", opacity: 0.4 }}
          source={Street}
          resizeMode={"cover"}
        ></ImageBackground>
        <LottieView
          style={{
            position: "absolute",
            right: -3,
            bottom: -16,
            width: 200,
            height: 200,
          }}
          ref={(animation) => {
            animation = animation;
          }}
          source={require("../assets/lottie/delivery-riding.json")}
          autoPlay
          loop
        />

        <View style={styles.containerImageShop}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../assets/groceriesBag.png")}
          />
        </View>

        <Text style={styles.shopTitle}>{route.params.title}</Text>
        <Text style={styles.shopSubtitle}>Horario de atención</Text>
      </Animated.View>

      <Animated.View
        style={{
          flex: 1,
          position: "absolute",
          top: 171,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          transform: [{ translateY: searchCategoryY }],
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
        <Animated.View
          style={{
            height: 120,
            position: "absolute",
            zIndex: -1,
            top: 120,
            transform: [{ translateY: headerY }],
          }}
        >
          <Promociones></Promociones>
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: scrollY } },
          },
        ])}
        style={{
          flex: 1,
          position: "absolute",
          top: 400,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          transform: [{ translateY: flatListY }],
        }}
      >
        <FlatList
          style={{
            margin: 5,
            paddingHorizontal: 5,
          }}
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
      </Animated.ScrollView>
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
  containerImageShop: {
    height: 100,
    width: 100,
    top: 70,
    left: 20,
    position: "absolute",
  },
  shopTitle: {
    fontSize: 35,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
    position: "absolute",
    top: "50%",
    left: "32%",
    color: colors.black,
    textShadowColor: "white",
    textShadowRadius: 15,
    textShadowOffset: { width: -1, height: 1 },
  },
  shopSubtitle: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "black",
    position: "absolute",
    textDecorationLine: "underline",
    top: "73%",
    left: "34%",
    color: "black",
    textShadowColor: "white",
    textShadowRadius: 15,
    textShadowOffset: { width: -1, height: 1 },
  },
  carrito: {
    position: "absolute",
    top: "4%",
    right: "3%",
  },
});
