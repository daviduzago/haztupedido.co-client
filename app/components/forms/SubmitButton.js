import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppButtonGradient from "../AppButtonGradient";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableHighlight style={styles.boton} onPress={handleSubmit}>
      <Text style={styles.textoBoton}>Entrar</Text>
    </TouchableHighlight>
  );
}

export default SubmitButton;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-start", alignItems: "center" },
  loginBox: {
    width: 300,
    height: 40,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  logo: {
    width: "70%",
    height: "30%",
    resizeMode: "contain",
  },
  boton: {
    width: 300,
    height: 50,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#001b46",
    justifyContent: "center",
    alignItems: "center",
  },
  textoBoton: {
    color: "white",
    fontSize: 25,
  },
  olvidoContraseña: {
    color: "white",
    marginTop: 5,
    textDecorationLine: "underline",
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "grey",
    width: "80%",
  },
});
