import React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Context from "../Context/context";

function Help({ size = 45, color = "black", backgroundColor }) {
  return (
    <Context.Consumer>
      {({ setModalAyuda }) => (
        <TouchableWithoutFeedback onPress={() => setModalAyuda(true)}>
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
              name="help-circle-outline"
              size={size * 0.5}
              color={color}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </Context.Consumer>
  );
}

export default Help;
