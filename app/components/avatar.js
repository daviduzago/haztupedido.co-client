import React from "react";
import { View } from "react-native";
import colors from "../config/colors";
import { Feather } from "@expo/vector-icons";

function Avatar({
  size = 30,
  backgroundColor = colors.lightPurple,
  image = <Feather name="user" size={size * 0.5} color="black" />,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 15,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {image}
    </View>
  );
}

export default Avatar;
