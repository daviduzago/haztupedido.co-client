import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

function App({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

export default App;

const styles = StyleSheet.create({
  screen: {
    //paddingTop: Constants.statusBarHeight,
  },
});
