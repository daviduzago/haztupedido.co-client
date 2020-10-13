import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import Context from "../Context/context";

function InputSpinnerHorizontal({
  color = "blue",
  onPressAgregar,
  onPressEliminar,
  quantity,
}) {
  return (
    <View>
      <View style={styles.box}>
        <TouchableWithoutFeedback onPress={onPressEliminar}>
          <View style={[styles.button, { backgroundColor: colors[color] }]}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "white",
                position: "absolute",
              }}
            >
              -
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.numberBox}>
          <Text style={{ fontWeight: "500", fontSize: 15 }}>{quantity}</Text>
        </View>
        <TouchableWithoutFeedback onPress={onPressAgregar}>
          <View style={[styles.button, { backgroundColor: colors[color] }]}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: "white",
                position: "absolute",
              }}
            >
              +
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default InputSpinnerHorizontal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  box: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    borderRadius: 50,
    backgroundColor: colors.white,
    justifyContent: "space-evenly",
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
    backgroundColor: colors.lightGreen,
    alignItems: "center",
    justifyContent: "center",
  },
});
