import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import colors from "../config/colors";

function CacheInfo() {
  const getName = async () => {
    let name = "";
    try {
      name = (await AsyncStorage.getItem("nombre")) || "none";
    } catch (err) {
      console.log(err);
    }
    return name;
  };
  const cacheName = getName();
  return (
    <View>
      <Text>¿Es esta su información?</Text>
      <Text>{cacheName}</Text>
    </View>
  );
}

export default CacheInfo;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-start", alignItems: "center" },
});
