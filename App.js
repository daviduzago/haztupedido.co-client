import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import HeaderComponent from "./app/components/header";
import colors from "./app/config/colors";
import ModuleCard from "./app/components/moduleCard";
import { SplashScreen } from "expo";

SplashScreen.preventAutoHide();
setTimeout(SplashScreen.hide, 3000);

const MODULES = [
  {
    id: 1,
    title: "Tu mercado",
    txtColor: "white",
    bgColor: "darkPurple",
    image: require("./app/assets/moduleTuMercado.png"),
  },
  {
    id: 2,
    title: "Tu restaurante",
    txtColor: "white",
    bgColor: "wine",
    image: require("./app/assets/moduleTuRestaurante.png"),
  },
  {
    id: 3,
    title: "Tu domicilio",
    txtColor: "white",
    bgColor: "gradientDarkPurple",
    image: require("./app/assets/moduleTuDiligencia.png"),
  },
];

class App extends Component {
  render() {
    return (
      <View>
        <HeaderComponent></HeaderComponent>
        <Text style={styles.welcomeText}>Hola Usuario! </Text>
        <FlatList
          style={styles.container}
          data={MODULES}
          keyExtractor={(module) => module.id.toString()}
          renderItem={({ item }) => (
            <ModuleCard
              image={item.image}
              onPress={() => console.log("Pressed", item.title)}
            ></ModuleCard>
          )}
        ></FlatList>

        {/* <View style={{ height: "100%", backgroundColor: colors.lightGray }}>
          <Text style={styles.welcomeText}>Hola Usuario! </Text>
          <ModuleCard
            title="Tu Mercado"
            bgColor="lightPurple"
            txtColor="white"
          />
          <ModuleCard
            title="Tu Restaurante"
            bgColor="lightPurple"
            txtColor="white"
          />
          <ModuleCard
            title="Tu Diligencia"
            bgColor="lightPurple"
            txtColor="white"
          />
        </View> */}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.lightGray,
    paddingTop: 20,
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
