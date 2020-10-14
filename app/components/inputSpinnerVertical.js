import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";

function InputSpinnerVertical({
  color = "blue",
  quantity,
  agregarProducto,
  eliminarProducto,
}) {
  return (
    <View>
      <View style={styles.box}>
        <TouchableWithoutFeedback onPress={agregarProducto}>
          <View style={[styles.button, { backgroundColor: colors[color] }]}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "white",
              }}
            >
              +
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.numberBox}>
          <Text style={{ fontWeight: "500", fontSize: 15 }}>{quantity}</Text>
        </View>
        <TouchableWithoutFeedback onPress={eliminarProducto}>
          <View style={[styles.button, { backgroundColor: colors[color] }]}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "white",
              }}
            >
              -
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default InputSpinnerVertical;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  box: {
    height: 120,
    width: 45,
    borderRadius: 50,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  numberBox: {
    width: 35,
    height: 30,
    borderRadius: 5,
    backgroundColor: colors.lightGray,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
});
