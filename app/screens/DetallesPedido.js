import React, { useState, useEffect, useContext } from "react";
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
  FlatList,
  Platform,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import AppButtonGradient from "../components/AppButtonGradient";
import AsyncStorage from "@react-native-community/async-storage";
import ActivityIndicator from "../components/ActivityIndicator";
import detallesApi from "../api/detallesPedido";
import BillIcon from "../assets/bill.png";
import Collapsible from "react-native-collapsible";
import colors from "../config/colors";
import numeroMilesimas from "../hooks/numeroMilesimas";
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

  const getValue = async () => {
    try {
      const item = await AsyncStorage.getItem("nombre");
      setName(item);
    } catch (e) {
      console.log(e);
    }
  };

  const getDetallesPedido = async () => {
    setLoading(true);
    try {
      const item = await AsyncStorage.getItem("numeroCelular");
      const response = await detallesApi.getDetallesPedido(item);
      setDetallesPedido(response.data);
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  useEffect(() => {
    getValue();
    getDetallesPedido();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {Platform.OS != "android" && (
        <ActivityIndicator
          style={{ position: "absolute" }}
          visible={loading}
        ></ActivityIndicator>
      )}
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
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image style={styles.imageShop} source={imageShop}></Image>
          <View
            style={{
              flexDirection: "column",
              padding: 10,
              paddingTop: 15,
              justifyContent: "flex-end",
            }}
          >
            <Text style={styles.subtitle}>TuMercado</Text>
          </View>
        </View>
        <Text style={styles.textoTitulos}>
          Pedido #: {detallesPedido.codigoCompra}
        </Text>
        <Text style={[styles.textoTitulos]}>
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
                paddingBottom: 5,
                marginVertical: 2,
                borderBottomColor: colors.gray,
                borderBottomWidth: 1,
              }}
            >
              <View
                style={{
                  flex: 0.7 / 6,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Cant.</Text>
              </View>

              <View
                style={{
                  flex: 4 / 6,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 10,
                }}
              >
                <Text style={{ textTransform: "capitalize" }}>Producto</Text>
              </View>

              <View
                style={{
                  flex: 1.3 / 6,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  paddingRight: 10,
                }}
              >
                <Text>Precio</Text>
              </View>
            </View>
            <FlatList
              data={detallesPedido.ListadoProductos}
              keyExtractor={(product) => product.id.toString()}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 5,
                    marginVertical: 4,
                  }}
                >
                  <View
                    style={{
                      flex: 0.7 / 6,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>{item.cantidad}</Text>
                  </View>

                  <View
                    style={{
                      flex: 4 / 6,
                      justifyContent: "center",
                      alignItems: "flex-start",
                      paddingLeft: 10,
                    }}
                  >
                    <Text style={{ fontSize: 12, textTransform: "capitalize" }}>
                      {item.nombreProducto}
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1.3 / 6,
                      justifyContent: "center",
                      alignItems: "flex-end",
                      paddingRight: 10,
                    }}
                  >
                    <Text>${numeroMilesimas(item.subtotal)}</Text>
                  </View>
                </View>
              )}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    borderBottomColor: colors.gray,
                    borderBottomWidth: 1,
                  }}
                ></View>
              )}
            />
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
                ${detallesPedido.total}
              </Text>
              <Entypo name="chevron-thin-down" size={24} color="black" />
            </View>
          </View>
          <Collapsible collapsed={collapsibleCargos}>
            <View>
              <View style={styles.filaCargos}>
                <Text>Subtotal de los productos</Text>
                <Text>${detallesPedido.subtotal}</Text>
              </View>
              <View style={styles.filaCargos}>
                <Text>Domicilio</Text>
                <Text>${detallesPedido.valorDomicilio}</Text>
              </View>
              <View style={styles.filaCargos}>
                <Text style={{ fontWeight: "bold" }}>Total</Text>
                <Text style={{ fontWeight: "bold" }}>
                  ${detallesPedido.total}
                </Text>
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
                <Text>-$0</Text>
              </View>
              <View style={styles.filaCargos}>
                <Text>Descuento domicilio</Text>
                <Text>-$0</Text>
              </View>
              <View style={styles.filaCargos}>
                <Text style={{ fontWeight: "bold" }}>Total Descuentos</Text>
                <Text style={{ fontWeight: "bold" }}>-$0</Text>
              </View>
            </View>
          </Collapsible>
        </View>
      </TouchableWithoutFeedback>
      {/* <TouchableWithoutFeedback
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
      </TouchableWithoutFeedback> */}
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
    fontSize: 30,
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
