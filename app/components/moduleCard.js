import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../config/colors";

const imageIcon = <Feather name="image" size={50} color="grey" />;

function ModuleCard({ image, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.moduleCard}>
          <Image style={styles.image} source={image}></Image>
        </View>
      </TouchableOpacity>

      {/* <LinearGradient
        style={[styles.moduleCard, { backgroundColor: colors[bgColor] }]}
        colors={[colors.logoPurple, colors.darkPurple]}
        start={[0, 0]}
        end={[1, 0.5]}
      >
        <ImageBackground source ={image}></ImageBackground>
        <Text style={[styles.ModuleCardText, { color: colors[txtColor] }]}>
          {title}
        </Text>
        <View style={styles.moduleCardImage}>{imageIcon}</View>
      </LinearGradient> */}
      {/* <View style={[styles.moduleCard, { backgroundColor: colors[bgColor] }]}>
        <View style={[styles.moduleCardImage, { backgroundColor: [bgColor] }]}>
          {image}
        </View>
        <Text style={[styles.moduleCardText, { color: colors[txtColor] }]}>
          {title}
        </Text>
      </View> */}
    </View>
  );
}

export default ModuleCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: colors.lightGray,
  },
  moduleCard: {
    height: 80,
    width: "90%",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: colors.lightPurple,
    shadowColor: "grey",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    overflow: "hidden",
  },
  moduleCardImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  moduleCardText: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.darkPurple,
    width: 200,
    marginBottom: 20,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
