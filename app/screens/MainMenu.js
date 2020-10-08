import React, { Component } from "react";
import { StyleSheet, Image, View, Alert } from "react-native";
import Screen from "../components/Screen";
import ModuleCard from "../components/moduleCard";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import City from "../assets/city_background.png";

function MainMenu() {
  const navigation = useNavigation();
  return (
    <Screen style={styles.container}>
      <View style={{ flex: 1 }}>
        <ModuleCard
          image={require("../assets/moduleTuMercado.png")}
          onPress={() => {
            navigation.navigate("Shop");
          }}
        ></ModuleCard>
        <ModuleCard
          onPress={() =>
            Alert.alert(
              "Ups, aun no esta listo :(",
              "Estamos trabajando fuertemente para pronto tener este modulo listo para ti. "
            )
          }
          image={require("../assets/moduleTuRestaurante_construccion.png")}
        ></ModuleCard>
        <ModuleCard
          onPress={() =>
            Alert.alert(
              "Ups, aun no esta listo :(",
              "Estamos trabajando fuertemente para pronto tener este modulo listo para ti. "
            )
          }
          image={require("../assets/moduleTuDiligencia_construccion.png")}
        ></ModuleCard>
      </View>

      <Image
        style={{
          width: "100%",
          height: 140,
          resizeMode: "cover",
        }}
        source={City}
      ></Image>
    </Screen>
  );
}

export default MainMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  welcomeText: {
    width: "100%",
    fontSize: 30,
    paddingLeft: 25,
    color: colors.black,
    fontWeight: "500",
    paddingTop: 20,
    backgroundColor: colors.lightGray,
  },
});
