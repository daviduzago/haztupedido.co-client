import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function AppButtonGradient({ title, onPress, styleButton, styleText }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, styleButton]}>
        <LinearGradient
          style={{
            width: "100%",
            height: 60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
          colors={["#3E0991", "#8b00de"]}
          start={[0.8, 0.2]}
          end={[0.1, 0.8]}
        >
          <Text style={[styles.text, styleText]}>{title}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

export default AppButtonGradient;

const styles = StyleSheet.create({
  container: {},
  button: {
    flexDirection: "row",
    width: "98%",
    height: 60,
    padding: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  text: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
});
