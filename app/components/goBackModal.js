import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function goBackModal() {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 5,
          alignItems: "center",
        }}
      >
        <Entypo name="chevron-thin-down" size={24} color="black" />
        <Text style={{ marginLeft: 5 }}>Volver</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default goBackModal;
