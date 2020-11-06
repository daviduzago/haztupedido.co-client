import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../config/colors";

const imageIcon = <Feather name="image" size={50} color="grey" />;

function ModuleCard({ image, onPress }) {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
      }}
      onPress={onPress}
    >
      <View style={styles.moduleCard}>
        <Image style={styles.image} source={image}></Image>
      </View>
    </TouchableOpacity>
  );
}

export default ModuleCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  moduleCard: {
    height: 100,
    width: 350,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
