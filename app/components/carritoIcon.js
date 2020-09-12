import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

function Carrito({
  size = 40,
  cantidadItems,
  color = "black",
  backgroundColor,
  onPress,
  route,
}) {
  const navigation = useNavigation();
  useRoute();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Cart")}>
      <View
        style={{
          width: size,
          height: size,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: backgroundColor,
          borderRadius: 50,
        }}
      >
        <Feather
          style={{ position: "absolute", top: 10, right: 11 }}
          name="shopping-cart"
          size={size * 0.5}
          color={color}
        />
        {cantidadItems && (
          <View
            style={{
              width: size * 0.5,
              height: size * 0.5,
              position: "absolute",
              right: -3,
              top: -4,
              borderRadius: 20,
              backgroundColor: colors.red,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: colors.white, fontWeight: "bold" }}>
              {cantidadItems}
            </Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Carrito;

const styles = StyleSheet.create({});
