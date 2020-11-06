import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function Covid({ onPressClose }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPressClose}>
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "flex-start",
            alignContent: "center",
            paddingTop: 35,
          }}
        >
          <MaterialIcons
            style={{ position: "absolute", top: 5, right: 5 }}
            name="close"
            size={30}
            color="black"
          />
          <Text>Cerrar</Text>
        </View>
      </TouchableWithoutFeedback>
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/covidDelivery.png")}
          style={{ resizeMode: "contain", width: "90%" }}
        ></Image>
      </View>
    </View>
  );
}

export default Covid;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 480,
    backgroundColor: colors.white,
    position: "absolute",
    borderWidth: 2,
    borderColor: "gray",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    bottom: 0,
    left: 0,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
