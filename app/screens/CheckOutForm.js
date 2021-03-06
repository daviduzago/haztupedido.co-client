import React, { useState } from "react";
import * as Yup from "yup";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import ActivityIndicatorApp from "../components/ActivityIndicator";
import AsyncStorage from "@react-native-community/async-storage";
import colors from "../config/colors";
import userInfoApi from "../api/userInfo";
import useLocation from "../hooks/useLocation";
import YupLocaleES from "../config/YupLocaleES";

//Errores en español
YupLocaleES;

const validationSchema = Yup.object().shape({
  nombre: Yup.string().required().min(3).max(20).label("Nombre"),
  apellido: Yup.string().required().min(3).max(20).label("Apellido"),
  direccion: Yup.string().required().min(10).max(50).label("Dirección"),
  direccionDescrip: Yup.string().max(50).label("Descripción de direccion"),
  email: Yup.string().required().email().label("Correo electrónico"),
  numeroCelular: Yup.number()
    .required()
    .integer()
    .positive()
    .min(10)
    .label("Número celular"),
});

function CheckOutForm() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigation = useNavigation();

  const handleSubmit = async (user) => {
    setLoading(true);
    const result = await userInfoApi.addUserInfo(user, location);
    if (!result.ok) {
      setLoading(false);
      return alert("No se pudo enviar la informacion", result.originalError);
    }
    setLoading(false);
    const storeData = async (field, data) => {
      try {
        await AsyncStorage.setItem(field, data);
      } catch (e) {
        console.log(e);
      }
    };
    storeData("nombre", user.nombre);
    storeData("apellido", user.apellido);
    storeData("direccion", user.direccion);
    storeData("direccionDescrip", user.direccionDescrip);
    storeData("email", user.email);
    storeData("numeroCelular", user.numeroCelular);
    storeData("location", JSON.stringify(location));
    const navigate = () => navigation.navigate("CheckOut");
    navigate();
  };

  //KAV KeyboardAvoidingView
  const [isKAVEnabled, setKAVEnable] = useState(false);
  return (
    <>
      <ActivityIndicatorApp
        style={{ backgroundColor: "transparent", position: "absolute" }}
        visible={loading}
      ></ActivityIndicatorApp>
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
              direccion: "",
              direccionDescrip: "",
              email: "",
              numeroCelular: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Text style={styles.inputTitle}>Nombre</Text>
            <AppFormField
              maxLength={20}
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
              maxLength={20}
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
            <Text style={styles.inputTitle}>Dirección</Text>
            <AppFormField
              maxLength={40}
              autoCorrect={false}
              onFocus={() => setKAVEnable(false)}
              name={"direccion"}
              styleContainer={styles.textInputContainer}
              styleTextInput={styles.textInput}
              placeholder={"Dirección"}
              icon={"home"}
              size={20}
            ></AppFormField>
            <Text style={styles.inputTitle}>Descripción de direccion</Text>
            <AppFormField
              maxLength={40}
              autoCapitalize="words"
              autoCorrect={false}
              onFocus={() => setKAVEnable(false)}
              name={"direccionDescrip"}
              styleContainer={styles.textInputContainer}
              styleTextInput={styles.textInput}
              placeholder={"Ej: Torre 1, Apt 101, Barrio"}
              icon={"home"}
              size={20}
            ></AppFormField>
            <Text style={styles.inputTitle}>Correo electrónico</Text>
            <AppFormField
              maxLength={30}
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
              maxLength={10}
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
            <View
              style={{
                marginLeft: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 10, color: "gray" }}>
                Al hacer click en IR A PAGAR, acepta nuestros
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  textDecorationLine: "underline",
                  color: "gray",
                }}
              >
                TERMINOS Y CONDICIONES
              </Text>
              <TouchableWithoutFeedback
                onPress={() =>
                  Linking.openURL(
                    `https://haztupedido.co/politica-de-tratamiento-de-datos/`
                  )
                }
              >
                <Text
                  style={{
                    fontSize: 10,
                    textDecorationLine: "underline",
                    color: "gray",
                  }}
                >
                  POLITICA DE TRATAMIENTO DE DATOS
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </AppForm>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
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
    justifyContent: "flex-start",
    alignContent: "center",
    zIndex: 0,
  },
  error: { fontSize: 10, color: colors.red },
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 5,
    marginHorizontal: 2,
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
