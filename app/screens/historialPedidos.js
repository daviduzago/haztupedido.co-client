import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppButtonGradient from "../components/AppButtonGradient";

function HistorialPedidos() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, paddingTop: 10, marginLeft: 5 }}>
        Historial de Pedidos
      </Text>
      <AppButtonGradient
        onPress={() => navigation.navigate("Menu")}
        title={"Volver"}
      ></AppButtonGradient>
    </View>
  );
}

export default HistorialPedidos;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
