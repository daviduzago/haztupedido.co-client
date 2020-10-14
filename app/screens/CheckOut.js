import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import CheckOutIcon from "../assets/checkout.png";
import Location from "../assets/location.png";
import colors from "../config/colors";
import ButtonCheckOut from "../components/ButtonCheckOut";
import AppButtonGradient from "../components/AppButtonGradient";
import numeroMilesimas from "../hooks/numeroMilesimas";
import Context from "../Context/context";

function CheckOut() {
  const navigation = useNavigation();

  const [direccion, setDireccion] = useState("");
  const [direccionDescrip, setDireccionDescrip] = useState("");

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
  getDireccion();
  getDireccionDescrip();

  const cancelar = () =>
    Alert.alert(
      "Cancelar pedido",
      "¿Esta seguro que desea cancelar el pedido?",
      [
        {
          text: "Si",
          onPress: () => navigation.navigate("Menu"),
          style: "cancel",
        },
        { text: "No", onPress: () => {} },
      ]
    );

  return (
    <Context.Consumer>
      {({ carrito, pagoTotalEfectivo, pagoParcial }) => (
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>CheckOut</Text>
            <LinearGradient
              style={styles.iconContainer}
              colors={["#3E0991", "#8b00de"]}
              start={[0.65, 0.7]}
              end={[0.15, 0.3]}
            >
              <Image
                style={{ width: "60%", height: "60%", resizeMode: "contain" }}
                source={CheckOutIcon}
              />
            </LinearGradient>
          </View>
          {/* Location */}
          <View
            style={{
              flex: 2 / 4,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                style={{ width: 100, height: 100, resizeMode: "contain" }}
                source={Location}
              />
            </View>
            <View>
              <Text style={{ fontSize: 18, color: "gray", marginVertical: 3 }}>
                Direccion de entrega:
              </Text>
              <Text
                style={{ fontSize: 22, fontWeight: "bold", marginVertical: 2 }}
              >
                {direccion}
              </Text>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginVertical: 2 }}
              >
                {direccionDescrip}
              </Text>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("CheckOutForm")}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    color: colors.red,
                    textDecorationLine: "underline",
                    marginVertical: 3,
                  }}
                >
                  ¿Esta equivocada esta direccion?
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          {/* Options */}
          <View
            style={{
              flex: 3 / 4,
              justifyContent: "flex-end",
            }}
          >
            <ButtonCheckOut
              title={"Tu Mercado"}
              image={require("../assets/groceriesBag.png")}
              subtitle={`${carrito.length} Productos`}
            />
            <ButtonCheckOut
              title={"Metodos de Pago"}
              subtitle={
                (pagoTotalEfectivo && "Efectivo: Total") ||
                (pagoParcial > 0 &&
                  `Efectivo: $${numeroMilesimas(pagoParcial)}`)
              }
              image={require("../assets/cash.png")}
              onPress={() => navigation.navigate("PagoEfectivo")}
            />
            <ButtonCheckOut
              width={140}
              image={require("../assets/epayco.png")}
            />
          </View>
          <View style={{ flex: 1 / 4, alignItems: "center" }}>
            <AppButtonGradient
              onPress={() =>
                Alert.alert(
                  "Confirmar Pedido",
                  "Esta a punto de finalizar la compra",
                  [
                    {
                      text: "Aun no",
                      onPress: () => {},
                      style: "destructive",
                    },
                    {
                      text: "Confirmar",
                      onPress: () => navigation.navigate("PedidoRealizado"),
                    },
                  ]
                )
              }
              title={"Pagar"}
              styleText={{ fontSize: 40 }}
            />
            <TouchableWithoutFeedback onPress={cancelar}>
              <Text style={{ color: "gray", textDecorationLine: "underline" }}>
                Cancelar
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      )}
    </Context.Consumer>
  );
}

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "700",
  },
  iconContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: colors.logoPurple,
    justifyContent: "center",
    alignItems: "center",
  },
});
