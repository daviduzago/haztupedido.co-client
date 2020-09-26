import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Cash from "../assets/cash.png";
import { CheckBox } from "react-native-elements";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
import AppButtonGradient from "../components/AppButtonGradient";
import AppTextInput from "../components/AppTextInput";

function PagoEfectivo() {
  const navigation = useNavigation();
  const [pagoTotal, setpagoTotal] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>CheckOut</Text>
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
            Ingrese el monto a pagar en efectivo:{" "}
          </Text>
          <AppTextInput
            styleContainer={[styles.textInputContainer, { marginLeft: 10 }]}
            icon={"cash-usd"}
            maxLength={6}
            keyboardType={"number-pad"}
          ></AppTextInput>
          <CheckBox
            title={"Pagar monto entero en efectivo"}
            checked={pagoTotal}
            onPress={() => {
              if (pagoTotal == false) {
                setpagoTotal(true);
              } else {
                setpagoTotal(false);
              }
            }}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <AppButtonGradient
            onPress={() => navigation.navigate("CheckOut")}
            title={"Listo"}
            styleText={{ fontSize: 40 }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
