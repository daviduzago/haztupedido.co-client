import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Switch,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import Cash from "../assets/cash.png";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
import numeroMilesimas from "../hooks/numeroMilesimas";
import AppButtonGradient from "../components/AppButtonGradient";
import AppTextInput from "../components/AppTextInput";
import Context from "../Context/context";

function PagoEfectivo() {
  const navigation = useNavigation();
  return (
    <Context.Consumer>
      {({
        pagoTotalEfectivo,
        setPagoTotalEfectivo,
        setPagoParcial,
        pagoParcial,
        total,
        carrito,
      }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <KeyboardAvoidingView
            style={styles.container}
            enabled={false}
            behavior={"height"}
          >
            <View style={styles.container}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.title}>Metodos de Pago</Text>
                  <Text style={{ fontSize: 20, marginTop: 5 }}>
                    Total:
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: colors.red,
                      }}
                    >
                      ${numeroMilesimas(total(carrito))}
                    </Text>
                  </Text>
                </View>

                <Image
                  style={{
                    width: 80,
                    height: 80,
                    resizeMode: "contain",
                    marginTop: 20,
                  }}
                  source={Cash}
                />
              </View>
              <View>
                <Text
                  style={{
                    marginLeft: 12,
                    fontSize: 15,
                    marginTop: 10,
                    marginBottom: 3,
                  }}
                >
                  Ingrese el monto a pagar en efectivo:
                </Text>
                <AppTextInput
                  styleContainer={[
                    styles.textInputContainer,
                    { marginLeft: 10 },
                  ]}
                  icon={"cash-usd"}
                  maxLength={6}
                  onChangeText={(value) => {
                    if (value > total(carrito)) {
                      setPagoParcial(total(carrito));
                    } else setPagoParcial(value);
                  }}
                  keyboardType={"number-pad"}
                  editable={!pagoTotalEfectivo}
                ></AppTextInput>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 15,
                    marginTop: 20,
                    marginBottom: 15,
                    alignItems: "center",
                  }}
                >
                  <Switch
                    value={pagoTotalEfectivo}
                    onValueChange={() =>
                      setPagoTotalEfectivo((previousState) => !previousState)
                    }
                    trackColor={{ false: colors.gray, true: colors.logoPurple }}
                  ></Switch>
                  <Text
                    style={{ marginLeft: 10, fontSize: 15, fontWeight: "500" }}
                  >
                    Pagar el monto total en efectivo.
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  paddingVertical: 10,
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: "500", marginBottom: 3 }}
                >
                  Tambien puede pagar con transferencia
                </Text>
                {/* Bancolombia */}
                <View
                  style={{
                    flex: 1 / 3,
                    backgroundColor: "white",
                    marginVertical: 3,
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flex: 1 / 4, paddingHorizontal: 3 }}>
                    <Image
                      source={require("../assets/bancolombia.png")}
                      resizeMode={"contain"}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => Alert.alert("Numero copiado")}
                    style={{
                      flex: 3 / 4,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flex: 3 / 4,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 30, fontWeight: "500" }}>
                        01-011220-20
                      </Text>

                      <Text style={{ fontSize: 10, color: "gray" }}>
                        Haga click para copiar el numero
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/* Davivienda */}
                <View
                  style={{
                    flex: 1 / 3,
                    backgroundColor: "white",
                    marginVertical: 3,
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flex: 1 / 4, paddingHorizontal: 3 }}>
                    <Image
                      source={require("../assets/davivienda.png")}
                      resizeMode={"contain"}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => Alert.alert("Numero copiado")}
                    style={{
                      flex: 3 / 4,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flex: 3 / 4,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 30, fontWeight: "500" }}>
                        01-011220-20
                      </Text>

                      <Text style={{ fontSize: 10, color: "gray" }}>
                        Haga click para copiar el numero
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/* Nequi */}
                <View
                  style={{
                    flex: 1 / 3,
                    backgroundColor: "white",
                    marginVertical: 3,
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flex: 1 / 4, paddingHorizontal: 3 }}>
                    <Image
                      source={require("../assets/nequi.jpg")}
                      resizeMode={"contain"}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => Alert.alert("Numero copiado")}
                    style={{
                      flex: 3 / 4,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flex: 3 / 4,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 30, fontWeight: "500" }}>
                        ‭(323) 225-8306‬
                      </Text>
                      <Text style={{ fontSize: 10, color: "gray" }}>
                        Haga click para copiar el numero
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <AppButtonGradient
                  onPress={() => navigation.navigate("CheckOut")}
                  title={"Volver"}
                  styleText={{ fontSize: 40 }}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      )}
    </Context.Consumer>
  );
}

export default PagoEfectivo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
  },
  title: {
    fontSize: 30,
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
  textInputContainer: {
    backgroundColor: colors.white,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 2,
    marginTop: 5,
    marginBottom: 3,
  },
});
