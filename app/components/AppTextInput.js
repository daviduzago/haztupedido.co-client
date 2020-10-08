import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppTextInput({
  icon,
  size = 25,
  iconColor = "grey",
  styleContainer,
  styleTextInput,
  ...otherProps
}) {
  return (
    <View style={[styles.container, styleContainer]}>
      {icon && (
        <MaterialCommunityIcons
          style={{ marginRight: 15 }}
          color={iconColor}
          size={size}
          name={icon}
        />
      )}
      <TextInput {...otherProps} style={[styles.textInput, styleTextInput]} />
    </View>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "90%",
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "grey",
    width: "100%",
  },
});
