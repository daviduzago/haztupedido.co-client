import React, { Component } from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import ModuleCard from "../components/moduleCard";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

const MODULES = [
  {
    id: 1,
    title: "Tu Mercado",
    txtColor: "white",
    bgColor: "darkPurple",
    image: require("../assets/moduleTuMercado.png"),
  },
  {
    id: 2,
    title: "Tu Restaurante",
    txtColor: "white",
    bgColor: "wine",
    image: require("../assets/moduleTuRestaurante.png"),
  },
  {
    id: 3,
    title: "Tu Diligencia",
    txtColor: "white",
    bgColor: "gradientDarkPurple",
    image: require("../assets/moduleTuDiligencia.png"),
  },
];

function MainMenu() {
  const navigation = useNavigation();
  return (
    <Screen style={styles.container}>
      <FlatList
        style={{ paddingTop: 20 }}
        data={MODULES}
        keyExtractor={(module) => module.id.toString()}
        renderItem={({ item }) => (
          <ModuleCard
            image={item.image}
            onPress={() => {
              navigation.navigate("Shop", { title: item.title });
            }}
          ></ModuleCard>
        )}
      ></FlatList>
    </Screen>
  );
}

export default MainMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
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
