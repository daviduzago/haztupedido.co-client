import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  nombre: Yup.string().required().min(5).max(50).label("Nombre"),
  apellido: Yup.string().required().min(5).max(50).label("Apellido"),
  cedula: Yup.number().required().integer().positive().min(10).label("Cédula"),
  direccion: Yup.string().required().min(10).max(50).label("Dirección"),
  email: Yup.string().required().email().label("Correo electrónico"),
  numeroCelular: Yup.number()
    .required()
    .integer()
    .positive()
    .min(10)
    .label("Número celular"),
});

function CheckOutForm() {
  //KAV KeyboardAvoidingView
  const [isKAVEnabled, setKAVEnable] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        enabled={isKAVEnabled}
        style={styles.container}
        behavior={"position"}
      >
        <Text style={styles.heading}>Ingrese sus datos para el pedido</Text>
        <AppForm
          initialValues={{
            nombre: "",
            apellido: "",
            cedula: "",
            direccion: "",
            email: "",
            numeroCelular: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <Text style={styles.inputTitle}>Nombre</Text>
          <AppFormField
            autoCapitalize="words"
            autoCorrect={false}
            onFocus={() => setKAVEnable(false)}
            name={"nombre"}
            styleContainer={styles.textInputContainer}
            styleTextInput={styles.textInput}
            placeholder={"Nombre"}
            icon={"alphabetical"}
            size={20}
            textContentType="name"
          ></AppFormField>
          <Text style={styles.inputTitle}>Apellido</Text>
          <AppFormField
            autoCapitalize="words"
            autoCorrect={false}
            onFocus={() => setKAVEnable(false)}
            name={"apellido"}
            styleContainer={styles.textInputContainer}
            styleTextInput={styles.textInput}
            placeholder={"Apellido"}
            icon={"alphabetical"}
            size={20}
          ></AppFormField>
          <Text style={styles.inputTitle}>Cédula</Text>
          <AppFormField
            keyboardType={"number-pad"}
            onFocus={() => setKAVEnable(false)}
            name={"cedula"}
            styleContainer={styles.textInputContainer}
            styleTextInput={styles.textInput}
            placeholder={"Cédula"}
            icon={"account-card-details-outline"}
            size={20}
          ></AppFormField>
          <Text style={styles.inputTitle}>Dirección</Text>
          <AppFormField
            autoCorrect={false}
            onFocus={() => setKAVEnable(false)}
            name={"direccion"}
            styleContainer={styles.textInputContainer}
            styleTextInput={styles.textInput}
            placeholder={"Dirección"}
            icon={"home"}
            size={20}
          ></AppFormField>
          <Text style={styles.inputTitle}>Correo electrónico</Text>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onFocus={() => setKAVEnable(true)}
            name={"email"}
            styleContainer={styles.textInputContainer}
            styleTextInput={styles.textInput}
            placeholder={"Correo electrónico"}
            icon={"email"}
            size={20}
            textContentType="emailAddress"
          ></AppFormField>
          <Text style={styles.inputTitle}>Número celular</Text>
          <AppFormField
            keyboardType={"number-pad"}
            onFocus={() => setKAVEnable(true)}
            name={"numeroCelular"}
            styleContainer={styles.textInputContainer}
            styleTextInput={styles.textInput}
            placeholder={"Número de celular"}
            icon={"cellphone"}
            size={20}
            textContentType="telephoneNumber"
          ></AppFormField>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <SubmitButton title={"Ir a pagar"} />
          </View>
        </AppForm>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default CheckOutForm;

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 60,
    borderRadius: 50,
    marginTop: 10,
    backgroundColor: colors.red,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { fontSize: 35, color: colors.white, fontWeight: "bold" },
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  error: { fontSize: 10, color: colors.red },
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 5,
    fontWeight: "bold",
  },
  inputTitle: {
    fontSize: 15,
    marginLeft: 27,
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
  textInput: {
    fontSize: 15,
  },
});
