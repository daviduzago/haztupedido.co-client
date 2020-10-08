import React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import colors from "../config/colors";

function History({ size = 50, color = "black", backgroundColor, onPress }) {
  const navigation = useNavigation();
  useRoute();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("HistorialPedidos")}
    >
      <View
        style={{
          width: 130,
          height: size,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: backgroundColor,
          borderRadius: 50,
          flexDirection: "row",
        }}
      >
        <MaterialCommunityIcons
          style={{ position: "absolute", top: 10, right: 11 }}
          name="history"
          size={size * 0.5}
          color={color}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default History;
