import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, styleButton, styleText }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, styleButton]}>
      <Text style={[styles.text, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  container: {},
  button: {
    flexDirection: "row",
    width: "95%",
    height: 60,
    padding: 10,
    backgroundColor: colors.red,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  text: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
});
