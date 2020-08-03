import React from "react";
import { Text, StylSheets, Platform } from "react-native";

function AppText({ children }) {
  return <Text style={styles.AppText}>{children}</Text>;
}

export default AppText;

const styles = StyleSheet.create({
  AppText: {
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
