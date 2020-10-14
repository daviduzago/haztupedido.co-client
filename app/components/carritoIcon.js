import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import colors from "../config/colors";
import Context from "../Context/context";

function Carrito({ size = 40, color = "black", backgroundColor }) {
  const navigation = useNavigation();
  useRoute();
  return (
    <Context.Consumer>
      {({ carrito }) => (
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
            {carrito.length > 0 && (
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
                  {carrito.length}
                </Text>
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      )}
    </Context.Consumer>
  );
}

export default Carrito;

const styles = StyleSheet.create({});
