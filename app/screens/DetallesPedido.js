import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  Linking,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import AppButtonGradient from "../components/AppButtonGradient";
import AsyncStorage from "@react-native-community/async-storage";
import detallesApi from "../api/detallesPedido";
import BillIcon from "../assets/bill.png";
import Collapsible from "react-native-collapsible";
import colors from "../config/colors";
import imageShop from "../assets/groceriesBag.png";

function DetallesPedido() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [numeroCelular, setNumeroCelular] = useState("");
  const [loading, setLoading] = useState(false);
  const [detallesPedido, setDetallesPedido] = useState([]);

  const [collapsibleListado, setCollapsibleListado] = useState(true);
  const [collapsibleCargos, setCollapsibleCargos] = useState(true);
  const [collapsibleTrans, setCollapsibleTrans] = useState(true);

  const loadDetallesPedido = async () => {
    setLoading(true);
    const response = await detallesApi.getDetallesPedido();
    setDetallesPedido(response.data);
    console.log(response.data);
    setLoading(false);
  };

  const getValue = async () => {
    try {
      const item = await AsyncStorage.getItem("nombre");
      setName(item);
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

  getValue();

  useEffect(() => {
    getNumeroCelular();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          padding: 15,
          marginBottom: 15,
          backgroundColor: colors.lightGray,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>Detalles del pedido</Text>
          <LinearGradient
            style={styles.iconContainer}
            colors={["#3E0991", "#8b00de"]}
            start={[0.65, 0.7]}
            end={[0.15, 0.3]}
          >
            <Image
              style={{ width: "60%", height: "60%", resizeMode: "contain" }}
              source={BillIcon}
            />
          </LinearGradient>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            padding: 5,
            marginBottom: 10,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Image style={styles.imageShop} source={imageShop}></Image>
          <View
            style={{
              flexDirection: "column",
              padding: 10,
              justifyContent: "flex-end",
            }}
          >
            <Text style={styles.subtitle}>TuMercado</Text>
          </View>
          <View style={styles.botonCalificar}>
            <Text
              style={{
                color: colors.white,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              {detallesPedido.estado}
            </Text>
          </View>
        </View>
        <Text style={styles.textoTitulos}>
          Pedido #: {detallesPedido.codigoCompra}
        </Text>
        <Text style={styles.textoTitulos}>
          Horario de entrega: {detallesPedido.horarioEntrega}
        </Text>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          if (collapsibleListado === false) setCollapsibleListado(true);
          else setCollapsibleListado(false);
        }}
      >
        <View
          style={{
            padding: 15,
            marginBottom: 15,
            backgroundColor: colors.lightGray,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.textoTitulos}>Listado de Productos</Text>
            <Entypo name="chevron-thin-down" size={24} color="black" />
          </View>
          <Collapsible collapsed={collapsibleListado}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 5,
              }}
            >
              <Text>Cantidad</Text>
              <Text>Producto</Text>
              <Text>Precio</Text>
            </View>
          </Collapsible>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          if (collapsibleCargos === false) setCollapsibleCargos(true);
          else setCollapsibleCargos(false);
        }}
      >
        <View
          style={{
            padding: 15,
            marginBottom: 15,
            backgroundColor: colors.lightGray,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.textoTitulos}>Detalles de los cargos</Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text
                style={[
                  styles.textoTitulos,
                  { marginRight: 10, fontWeight: "bold" },
                ]}
              >
                $29.180
              </Text>
              <Entypo name="chevron-thin-down" size={24} color="black" />
            </View>
          </View>
          <Collapsible collapsed={collapsibleCargos}>
            <View>
              <View style={styles.filaCargos}>
                <Text>Subtotal de los productos</Text>
                <Text>$22.000</Text>
              </View>
              <View style={styles.filaCargos}>
                <Text>IVA</Text>
                <Text>$4.180</Text>
              </View>
              <View style={styles.filaCargos}>
                <Text style={{ fontWeight: "bold" }}>Total</Text>
                <Text style={{ fontWeight: "bold" }}>$29.180</Text>
              </View>
              <Text
                style={[
                  styles.textoTitulos,
                  {
                    marginTop: 15,
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                  },
                ]}
              >
                Descuentos*
              </Text>
              <View style={styles.filaCargos}>
                <Text>Descuento de promocion</Text>
                <Text>-$0.000</Text>
              </View>
              <View style={styles.filaCargos}>
                <Text>Descuento domicilio</Text>
                <Text>-$3.000</Text>
              </View>
              <View style={styles.filaCargos}>
                <Text style={{ fontWeight: "bold" }}>Total Descuentos</Text>
                <Text style={{ fontWeight: "bold" }}>-$3.000</Text>
              </View>
            </View>
          </Collapsible>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          if (collapsibleTrans === false) setCollapsibleTrans(true);
          else setCollapsibleTrans(false);
        }}
      >
        <View
          style={{
            padding: 15,
            marginBottom: 15,
            backgroundColor: colors.lightGray,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.textoTitulos}>Detalles de Transaccion</Text>

            <Entypo name="chevron-thin-down" size={24} color="black" />
          </View>
          <Collapsible collapsed={collapsibleTrans}>
            <Text style={{ fontSize: 10, color: "gray", marginBottom: 5 }}>
              4 Octubre 2020 9:00AM
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 5,
              }}
            >
              <Image
                style={{ resizeMode: "contain", width: 50, height: 50 }}
                source={require("../assets/epayco.png")}
              />
              <Text style={{ fontSize: 10 }}>
                Transaction ID: {"\n"}02168413
              </Text>
              <Text style={{ fontWeight: "bold" }}>$29.180</Text>
            </View>
          </Collapsible>
        </View>
      </TouchableWithoutFeedback>
      <View
        style={{
          paddingTop: 20,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <AppButtonGradient
          styleButton={{ width: 250, marginBottom: 10 }}
          onPress={() => navigation.navigate("Menu")}
          title={"Volver Menu"}
        ></AppButtonGradient>
        <TouchableWithoutFeedback
          onPress={() =>
            Linking.openURL(
              `https://wa.me/+573232258306?text=Hola, soy ${name} y necesito ayuda con mi pedido en hazTuPedido.co`
            )
          }
        >
          <View
            style={[styles.botonCalificar, { backgroundColor: colors.blue }]}
          >
            <Text
              style={{
                color: colors.white,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Necesito Ayuda
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
}

export default DetallesPedido;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.white,
  },
  botonCalificar: {
    width: 130,
    height: 35,
    backgroundColor: colors.gray,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  filaCargos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 40,
    paddingVertical: 5,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
  },
  iconContainer: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: colors.logoPurple,
    justifyContent: "center",
    alignItems: "center",
  },
  imageShop: {
    width: 60,
    height: 60,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "500",
    marginBottom: 5,
  },
  textoTitulos: {
    fontSize: 15,
    fontWeight: "500",
    marginVertical: 2,
  },
  backShop: {
    fontSize: 15,
    color: colors.red,
    textDecorationLine: "underline",
    marginLeft: 5,
  },
});
