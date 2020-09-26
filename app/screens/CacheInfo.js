import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppButtonGradient from "../components/AppButtonGradient";

function CacheInfo() {
  const navigation = useNavigation();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [direccionDescrip, setDireccionDescrip] = useState("");
  const [email, setEmail] = useState("");
  const [numeroCelular, setNumeroCelular] = useState("");
  const [location, setLocation] = useState("");

  const getNombre = async () => {
    try {
      const item = await AsyncStorage.getItem("nombre");
      setNombre(item);
    } catch (e) {
      console.log(e);
    }
  };
  const getApellido = async () => {
    try {
      const item = await AsyncStorage.getItem("apellido");
      setApellido(item);
    } catch (e) {
      console.log(e);
    }
  };
  const getDireccion = async () => {
    try {
      const item = await AsyncStorage.getItem("direccion");
      setDireccion(item);
    } catch (e) {
      console.log(e);
    }
  };
  const getDireccionDescrip = async () => {
    try {
      const item = await AsyncStorage.getItem("direccionDescrip");
      setDireccionDescrip(item);
    } catch (e) {
      console.log(e);
    }
  };
  const getEmail = async () => {
    try {
      const item = await AsyncStorage.getItem("email");
      setEmail(item);
    } catch (e) {
      console.log(e);
    }
  };
  const getNumeroCelular = async () => {
    try {
      const item = await AsyncStorage.getItem("numeroCelular");
      setNumeroCelular(item);
    } catch (e) {
      console.log(e);
    }
  };
  const getLocation = async () => {
    try {
      const item = await AsyncStorage.getItem("location");
      setLocation(item);
    } catch (e) {
      console.log(e);
    }
  };
  getNombre();
  getApellido();
  getDireccion();
  getDireccionDescrip();
  getEmail();
  getNumeroCelular();
  getLocation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>¿Es esta su información?</Text>
      <View style={styles.infoCard}>
        <View style={styles.row}>
          <Text style={[styles.text, { color: "grey" }]}>Nombre: </Text>
          <Text style={styles.text}>
            {nombre} {apellido}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, { color: "grey" }]}>Dirección: </Text>
          <Text style={styles.text}>{direccion}</Text>
        </View>
        {direccionDescrip != null || "" ? (
          <View style={[styles.row, { flexDirection: "column" }]}>
            <Text style={[styles.text, { color: "grey", marginBottom: 5 }]}>
              Descripción de dirección:{" "}
            </Text>
            <Text style={[styles.text, { marginBottom: 3 }]}>
              {direccionDescrip}
            </Text>
          </View>
        ) : null}
        <View style={styles.row}>
          <Text style={[styles.text, { color: "grey" }]}>Email: </Text>
          <Text style={styles.text}>{email}</Text>
        </View>
        <View style={[styles.row, { borderBottomWidth: 0 }]}>
          <Text style={[styles.text, { color: "grey" }]}>Número celular: </Text>
          <Text style={styles.text}>{numeroCelular}</Text>
        </View>
      </View>
      <AppButtonGradient
        onPress={() => navigation.navigate("CheckOut")}
        title={"Si"}
      />
      <AppButton
        onPress={() => navigation.navigate("CheckOutForm")}
        styleButton={{
          backgroundColor: colors.lightGray,
          borderWidth: 2,
          borderColor: colors.darkPurple,
          width: "90%",
        }}
        styleText={{ color: colors.darkPurple }}
        title={"No"}
      />
    </View>
  );
}

export default CacheInfo;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-start", alignItems: "center" },
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 5,
    fontWeight: "bold",
  },
  infoCard: {
    width: "85%",
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    marginVertical: 5,
    borderBottomWidth: 1,
    paddingVertical: 3,
    borderColor: colors.lightGray,
  },
  text: {
    fontSize: 15,
    color: colors.black,
  },
});
