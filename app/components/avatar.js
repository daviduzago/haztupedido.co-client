import React from "react";
import { View } from "react-native";
import colors from "../config/colors";
import { Feather } from "@expo/vector-icons";

function Avatar({
  size = 30,
  image = <Feather name="user" size={size * 0.5} color="black" />,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: colors.lightPurple,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {image}
    </View>
  );
}

export default Avatar;
