import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../config/colors";
import Avatar from "./avatar";

class App extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Avatar></Avatar>
        {/* <View style={styles.userAvatar}>
          <Feather name="user" size={20} color="black" />
        </View> */}
        <Text style={styles.userAddress}>Entregar en: {"\n"}Cra 0 # 0-0</Text>
        <Feather name="shopping-cart" size={22} color="black" />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  cart: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    //borderBottomWidth: 2,
    //borderColor: color.logoPurple,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.white,
    marginTop: 20,
  },
  userAddress: {
    flex: 1,
    textAlign: "center",
    fontSize: 13,
    color: colors.black,
  },
  userAvatar: {
    width: 30,
    height: 30,
    backgroundColor: colors.lightPurple,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
