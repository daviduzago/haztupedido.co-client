import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";
import Avatar from "./avatar";

class AppHeader extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Avatar></Avatar>
        <Text style={styles.welcomeText}>Hola! </Text>
      </View>
    );
  }
}

export default AppHeader;

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.white,
  },
  welcomeText: {
    width: "100%",
    fontSize: 25,
    paddingLeft: 25,
    color: colors.black,
    fontWeight: "500",
    backgroundColor: colors.white,
  },
});
