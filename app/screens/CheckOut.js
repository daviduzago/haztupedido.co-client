import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Moto from "../assets/motoHTP.png";
import Location from "../assets/location.png";
import colors from "../config/colors";
import ButtonCheckOut from "../components/ButtonCheckOut";
import AppButtonGradient from "../components/AppButtonGradient";
import numeroMilesimas from "../hooks/numeroMilesimas";
import Context from "../Context/context";
import compraApi from "../api/nuevaCompra";
import ActivityIndicator from "../components/ActivityIndicator";
import moment from "moment";

function CheckOut() {
  const navigation = useNavigation();

  const [visibleModalHorario, setVisibleModalHorario] = useState(false);
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
    setPagoParcial,
    setHorarioEntrega,
    setCodHorarioEntrega
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
            setHorarioEntrega("");
            setCodHorarioEntrega(0);
          },
          style: "cancel",
        },
        { text: "No", onPress: () => {} },
      ]
    );

  const handleIrPagar = (
    codHorarioEntrega,
    pagoTotalEfectivo,
    pagoTotalTransf,
    pagoParcial,
    total,
    numeroCelular,
    carrito,
    setCarrito,
    setPagoTotalEfectivo,
    setPagoTotalTransf,
    setPagoParcial,
    setHorarioEntrega,
    setCodHorarioEntrega
  ) => {
    if (
      codHorarioEntrega === 0 &&
      !pagoTotalEfectivo &&
      !pagoTotalTransf &&
      pagoParcial <= 0
    ) {
      Alert.alert(
        "Ups, faltan unos pasos",
        "Debe seleccionar el horario de entrega y el metodo de pago antes de continuar",
        [
          {
            text: "Okay",
            onPress: () => {},
            style: "cancel",
          },
        ]
      );
    } else if (codHorarioEntrega === 0) {
      Alert.alert(
        "Ups, faltan unos pasos",
        "Debe seleccionar el horario de entrega",
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
                codHorarioEntrega,
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
                setHorarioEntrega("");
                setCodHorarioEntrega(0);
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
        horarioEntrega,
        setHorarioEntrega,
        setCodHorarioEntrega,
        codHorarioEntrega,
        totalCompra,
      }) => (
        <View style={styles.container}>
          {Platform.OS != "android" && (
            <ActivityIndicator
              style={{ backgroundColor: "transparent", position: "absolute" }}
              visible={loading}
            ></ActivityIndicator>
          )}
          {/* Modal Horario */}
          {!loading && (
            <>
              <Modal
                animationType={"slide"}
                transparent={true}
                visible={visibleModalHorario}
              >
                <View style={styles.modalHorario}>
                  <Text style={{ fontSize: 20 }}>
                    Seleccione el horario de entrega:
                  </Text>
                  <View
                    style={{
                      marginTop: 10,
                      width: "80%",
                      height: 150,
                      justifyContent: "flex-start",
                      alignContent: "center",
                    }}
                  >
                    {(hora <= 9 || hora >= 20) && (
                      <TouchableWithoutFeedback
                        onPress={() => {
                          setHorarioEntrega("8am - 11am");
                          setCodHorarioEntrega(1);
                          setVisibleModalHorario(false);
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 20,
                              marginVertical: 8,
                              fontWeight: "bold",
                            }}
                          >
                            8am - 11am
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    )}
                    {(hora <= 11 || hora >= 20) && (
                      <TouchableWithoutFeedback
                        onPress={() => {
                          setHorarioEntrega("11am - 2pm");
                          setCodHorarioEntrega(2);
                          setVisibleModalHorario(false);
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 20,
                              marginVertical: 8,
                              fontWeight: "bold",
                            }}
                          >
                            11am - 2pm
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    )}
                    {(hora <= 14 || hora >= 20) && (
                      <TouchableWithoutFeedback
                        onPress={() => {
                          setHorarioEntrega("2pm - 5pm");
                          setCodHorarioEntrega(3);
                          setVisibleModalHorario(false);
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 20,
                              marginVertical: 8,
                              fontWeight: "bold",
                            }}
                          >
                            2pm - 5pm
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    )}
                    {(hora <= 17 || hora >= 18) && (
                      <TouchableWithoutFeedback
                        onPress={() => {
                          setHorarioEntrega("5pm - 8pm");
                          setCodHorarioEntrega(4);
                          setVisibleModalHorario(false);
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 20,
                              marginVertical: 8,
                              fontWeight: "bold",
                            }}
                          >
                            5pm - 8pm
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    )}
                  </View>
                </View>
              </Modal>
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
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate("CheckOutForm")}
                  >
                    <View
                      style={{
                        backgroundColor: colors.red,
                        height: 25,
                        width: 210,
                        borderRadius: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 4,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          marginVertical: 3,
                          color: "white",
                        }}
                      >
                        ¿Esta equivocada esta dirección?
                      </Text>
                    </View>
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
                  onPress={() => navigation.navigate("CarritoCheckOut")}
                />
                <ButtonCheckOut
                  title={"Métodos de pago"}
                  subtitle={
                    (pagoTotalEfectivo && "Efectivo: Total") ||
                    (pagoParcial > 0 &&
                      `Efectivo: $${numeroMilesimas(pagoParcial)}`) ||
                    (pagoTotalTransf && "Transferencia: Total")
                  }
                  image={require("../assets/cash.png")}
                  onPress={() => navigation.navigate("PagoEfectivo")}
                />
                <ButtonCheckOut
                  title={"Horario de entrega"}
                  subtitle={horarioEntrega != "" && horarioEntrega}
                  image={require("../assets/clock.png")}
                  onPress={() => setVisibleModalHorario(true)}
                />
              </View>
              <View style={{ flex: 1 / 4, alignItems: "center" }}>
                <AppButtonGradient
                  onPress={() => {
                    handleIrPagar(
                      codHorarioEntrega,
                      pagoTotalEfectivo,
                      pagoTotalTransf,
                      pagoParcial,
                      totalCompra,
                      numeroCelular,
                      carrito,
                      setCarrito,
                      setPagoTotalEfectivo,
                      setPagoTotalTransf,
                      setPagoParcial,
                      setHorarioEntrega,
                      setCodHorarioEntrega
                    );
                    console.log("numero celular: ", numeroCelular);
                    console.log("carrito :", carrito);
                    console.log("pago parcial: ", pagoParcial);
                    console.log("horario : ", codHorarioEntrega);
                    console.log("total compra : ", totalCompra);
                    console.log("pago total efectivo : ", pagoTotalEfectivo);
                    console.log("pago total transferencia :", pagoTotalTransf);
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
                      setPagoParcial,
                      setHorarioEntrega,
                      setCodHorarioEntrega
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
  modalHorario: {
    width: "100%",
    height: 220,
    backgroundColor: colors.white,
    position: "absolute",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    bottom: 0,
    left: 0,
    justifyContent: "flex-start",
    alignItems: "center",
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
