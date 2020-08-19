import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import Vegetales from "../assets/vegetales.jpg";
import Carrito from "./carritoIcon";

function HeaderShop({ title = "Titulo", imageShop }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={Vegetales}
      >
        <LinearGradient
          style={{
            height: "100%",
            height: "100%",
          }}
          colors={["transparent", colors.white]}
          start={[0, 0.1]}
          end={[0, 0.9]}
        >
          <View style={styles.carrito}>
            <Carrito cantidadItems={2} color={colors.black}></Carrito>
          </View>

          <View style={styles.containerImageShop}>
            <Image
              style={{
                width: 120,
                height: 120,
              }}
              source={imageShop}
            ></Image>
          </View>
          <Text style={styles.shopTitle}>{title}</Text>
          <Text style={styles.shopSubtitle}>Horario de atención</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

export default HeaderShop;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
  },
  containerImageShop: {
    height: 100,
    width: 100,
    borderRadius: 50,
    position: "absolute",
    bottom: "10%",
    left: "3%",
    backgroundColor: "grey",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  shopTitle: {
    fontSize: 35,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "black",
    fontWeight: "800",
    position: "absolute",
    top: "50%",
    left: "32%",
    color: colors.black,
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
  },
  carrito: {
    position: "absolute",
    top: "4%",
    right: "3%",
  },
});
