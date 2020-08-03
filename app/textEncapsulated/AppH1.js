import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppH1({ children }) {
  return <Text style={styles.AppH1}>{children}</Text>;
}

export default AppH1;

const styles = StyleSheet.create({
  AppH1: {
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
