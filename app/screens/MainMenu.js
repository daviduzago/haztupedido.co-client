import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Alert,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import City from "../assets/city_background.png";
import colors from "../config/colors";
import ModuleCard from "../components/moduleCard";
import Screen from "../components/Screen";
import Covid from "./covid";

function MainMenu() {
  const navigation = useNavigation();

  const [visibleCovid, setVisibleCovid] = useState(false);

  return (
    <Screen style={styles.container}>
      <View style={{ flex: 1 }}>
        {/* TuMercado */}
        <ModuleCard
          image={require("../assets/moduleTuMercado.png")}
          onPress={() => {
            navigation.navigate("Shop");
          }}
        ></ModuleCard>
        {/* TuRestaurante */}
        <ModuleCard
          onPress={() =>
            Alert.alert(
              "Ups, aun no esta listo :(",
              "Estamos trabajando fuertemente para pronto tener este modulo listo para ti. "
            )
          }
          image={require("../assets/moduleTuRestaurante_construccion.png")}
        ></ModuleCard>
        {/* TuRepuesto */}
        <ModuleCard
          onPress={() =>
            Alert.alert(
              "Ups, aun no esta listo :(",
              "Estamos trabajando fuertemente para pronto tener este modulo listo para ti. "
            )
          }
          image={require("../assets/tuRepuesto2.png")}
        ></ModuleCard>
        {/* covid */}
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
          }}
          onPress={() => setVisibleCovid(true)}
        >
          <View style={styles.moduleCard}>
            <Image
              style={styles.image}
              source={require("../assets/covid.png")}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
      {/* background image */}
      <Image
        style={{
          width: "100%",
          height: 140,
          resizeMode: "cover",
        }}
        source={City}
      ></Image>
      <Modal animationType={"slide"} transparent={true} visible={visibleCovid}>
        <Covid onPressClose={() => setVisibleCovid(false)}></Covid>
      </Modal>
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
  moduleCard: {
    height: 50,
    width: 330,
    marginBottom: 10,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
