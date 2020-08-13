import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

const imageIcon = <Feather name="image" size={50} color="grey" />;

function ModuleCard({ image, onPress }) {
  const navigation = useNavigation();
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
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: colors.lightPurple,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
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
