import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
function EntregarEn({ direccion = "Ingrese la dirección" }) {
  return (
    <View style={{ flexDirection: "column", flex: 1 }}>
      <Text style={styles.userAddress}>Entregar en: </Text>
      <Text style={[styles.userAddress, { color: "gray", marginTop: -10 }]}>
        {direccion}
      </Text>
    </View>
  );
}

export default EntregarEn;

const styles = StyleSheet.create({
  userAddress: {
    flex: 1,
    textAlign: "center",
    fontSize: 13,
    color: colors.black,
    paddingTop: 7,
  },
});
