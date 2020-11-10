import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Moto from "../assets/motoHTP.png";
import Location from "../assets/location.png";
import ButtonCheckOut from "../components/ButtonCheckOut";
import AppButtonGradient from "../components/AppButtonGradient";
import numeroMilesimas from "../hooks/numeroMilesimas";
import Context from "../Context/context";
import compraApi from "../api/nuevaCompra";
import ActivityIndicatorApp from "../components/ActivityIndicator";
import moment from "moment";

function CheckOut() {
  const navigation = useNavigation();

  const [hora, setHora] = useState();
  const [loading, setLoading] = useState(false);
  const [direccion, setDireccion] = useState("");
  const [direccionDescrip, setDireccionDescrip] = useState("");
  const [numeroCelular, setNumeroCelular] = useState("");

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
  const getNumeroCelular = async () => {
    try {
      const item = await AsyncStorage.getItem("numeroCelular");
      setNumeroCelular(item);
    } catch (e) {
      console.log(e);
    }
  };
  getNumeroCelular();
  getDireccion();
  getDireccionDescrip();

  const cancelar = (
    setCarrito,
    setPagoTotalEfectivo,
    setPagoTotalTransf,
    setPagoParcial
  ) =>
    Alert.alert(
      "Cancelar pedido",
      "¿Esta seguro que desea cancelar el pedido?",
      [
        {
          text: "Si",
          onPress: () => {
            navigation.navigate("Menu");
            setCarrito([]);
            setPagoTotalEfectivo(false);
            setPagoTotalTransf(false);
            setPagoParcial(0);
          },
          style: "cancel",
        },
        { text: "No", onPress: () => {} },
      ]
    );

  const handleIrPagar = (
    pagoTotalEfectivo,
    pagoTotalTransf,
    pagoParcial,
    total,
    numeroCelular,
    carrito,
    setCarrito,
    setPagoTotalEfectivo,
    setPagoTotalTransf,
    setPagoParcial
  ) => {
    if (!pagoTotalEfectivo && !pagoTotalTransf && pagoParcial <= 0) {
      Alert.alert(
        "Ups, faltan unos pasos",
        "Debe seleccionar el metodo de pago antes de continuar",
        [
          {
            text: "Okay",
            onPress: () => {},
            style: "cancel",
          },
        ]
      );
    } else if (!pagoTotalEfectivo && !pagoTotalTransf && pagoParcial <= 0) {
      Alert.alert(
        "Ups, faltan unos pasos",
        "Debe seleccionar un metodo de pago",
        [
          {
            text: "Okay",
            onPress: () => {},
            style: "cancel",
          },
        ]
      );
    } else {
      Alert.alert("Confirmar Pedido", "Esta a punto de finalizar la compra", [
        {
          text: "Aun no",
          onPress: () => {},
          style: "destructive",
        },
        {
          text: "Confirmar",
          onPress: () => {
            const enviarCompra = async () => {
              setLoading(true);
              const result = await compraApi.nuevaCompra(
                numeroCelular,
                carrito,
                total,
                pagoParcial,
                pagoTotalEfectivo,
                pagoTotalTransf
              );
              if (!result.ok) {
                console.log("Error de envio compra: ", result.originalError);
                Alert.alert(
                  "Ups, algo salio mal",
                  "No se ha podido realizar la compra. " + result.originalError
                );
                setLoading(false);
              }
              if (result.ok) {
                navigation.navigate("PedidoRealizado");
                setCarrito([]);
                setPagoTotalEfectivo(false);
                setPagoTotalTransf(false);
                setPagoParcial(0);
              }
              setLoading(false);
            };
            enviarCompra();
          },
        },
      ]);
    }
  };

  useEffect(() => {
    setHora(moment().hour());
  }, []);

  return (
    <Context.Consumer>
      {({
        carrito,
        setCarrito,
        pagoTotalEfectivo,
        setPagoTotalEfectivo,
        pagoTotalTransf,
        setPagoTotalTransf,
        pagoParcial,
        setPagoParcial,
        totalCompra,
      }) => (
        <View style={styles.container}>
          <ActivityIndicatorApp
            style={{ backgroundColor: "transparent", position: "absolute" }}
            visible={loading}
          ></ActivityIndicatorApp>
          {!loading && (
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Text style={styles.title}>CheckOut</Text>
                <View style={styles.iconContainer}>
                  <Image
                    style={{
                      width: "80%",
                      height: "80%",
                      resizeMode: "contain",
                      marginRight: 10,
                    }}
                    source={Moto}
                  />
                </View>
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
                    style={{ width: 90, height: 90, resizeMode: "contain" }}
                    source={Location}
                  />
                </View>
                <View>
                  <Text
                    style={{ fontSize: 18, color: "gray", marginVertical: 3 }}
                  >
                    Dirección de entrega:
                  </Text>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      marginVertical: 2,
                    }}
                  >
                    {direccion}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      marginVertical: 2,
                    }}
                  >
                    {direccionDescrip}
                  </Text>
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
                  onPress={() => navigation.navigate("CarritoCheckOut")}
                />
                <ButtonCheckOut
                  title={"Métodos de pago"}
                  subtitle={
                    (pagoTotalEfectivo && "Efectivo: Total") ||
                    (pagoTotalTransf && "Transferencia: Total") ||
                    (pagoParcial > 0 &&
                      `Efectivo: $${numeroMilesimas(pagoParcial)}`)
                  }
                  image={require("../assets/cash.png")}
                  onPress={() => navigation.navigate("PagoEfectivo")}
                />
              </View>
              <View style={{ flex: 1 / 4, alignItems: "center" }}>
                <AppButtonGradient
                  onPress={() => {
                    handleIrPagar(
                      pagoTotalEfectivo,
                      pagoTotalTransf,
                      pagoParcial,
                      totalCompra,
                      numeroCelular,
                      carrito,
                      setCarrito,
                      setPagoTotalEfectivo,
                      setPagoTotalTransf,
                      setPagoParcial
                    );
                  }}
                  title={"Pagar"}
                  styleText={{ fontSize: 40 }}
                />
                <TouchableWithoutFeedback
                  onPress={() =>
                    cancelar(
                      setCarrito,
                      setPagoTotalEfectivo,
                      setPagoTotalTransf,
                      setPagoParcial
                    )
                  }
                >
                  <Text
                    style={{ color: "gray", textDecorationLine: "underline" }}
                  >
                    Cancelar
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            </>
          )}
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
    paddingTop: 5,
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
    justifyContent: "center",
    alignItems: "center",
  },
});
