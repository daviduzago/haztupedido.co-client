import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  FlatList,
  Image,
} from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import Context from "../Context/context";
import colors from "../config/colors";
import LottieView from "lottie-react-native";
import ProductPromo from "../components/ProductPromo";
import promocionesApi from "../api/promociones";

function Promociones() {
  const DATA = [
    {
      id: 577,
      referencia: "1783",
      imagen:
        "http://haztupedido.co/modulo/images/ARROZ DOÑA PEPA PARBOLIZADO X 500 GR.PNG.jpg",
      costo_venta: 2700,
      unidad_medida: 500,
      tipo_unidad: "Gr",
      oferta: 1,
      descuento: 20,
      producto: "Arroz doÑa pepa parbolizado",
      Subcategoria: "ARROZ",
      Categoria: "ABARROTES",
    },
    {
      id: 578,
      referencia: "1785",
      imagen:
        "http://haztupedido.co/modulo/images/ARROZ ROA MEXICANO X 300 GR.PNG.png",
      costo_venta: 5100,
      unidad_medida: 300,
      tipo_unidad: "Gr",
      oferta: 1,
      descuento: 20,
      producto: "Arroz roa mexicano",
      Subcategoria: "ARROZ",
      Categoria: "ABARROTES",
    },
    {
      id: 579,
      referencia: "1786",
      imagen:
        "http://haztupedido.co/modulo/images/ARROZ CON LECHE ROA X 150 GR.PNG.jpg",
      costo_venta: 3150,
      unidad_medida: 150,
      tipo_unidad: "Gr",
      oferta: 1,
      descuento: 30,
      producto: "Arroz con leche roa",
      Subcategoria: "ARROZ",
      Categoria: "ABARROTES",
    },
    {
      id: 580,
      referencia: "1767",
      imagen: "http://haztupedido.co/modulo/images/ARROZ ROA X 500 GR.PNG.PNG",
      costo_venta: 1750,
      unidad_medida: 500,
      tipo_unidad: "Gr",
      oferta: 1,
      descuento: 40,
      producto: "Arroz roa",
      Subcategoria: "ARROZ",
      Categoria: "ABARROTES",
    },
  ];

  const [promociones, setPromociones] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPromos = async () => {
    setLoading(true);
    const response = await promocionesApi.getPromociones();
    setPromociones(response.data);
    setLoading(false);
  };

  useEffect(() => {
    loadPromos();
  }, []);

  const colorDescuento = (item) => {
    if (item <= 10) {
      return "blue";
    } else if (item <= 20) {
      return "yellow";
    } else if (item <= 30) {
      return "red";
    } else {
      return "darkPurple";
    }
  };

  return (
    <Context.Consumer>
      {({ carrito, agregarProducto, eliminarProducto }) => (
        <View style={styles.container}>
          {Platform.OS != "android" && (
            <ActivityIndicator visible={loading}></ActivityIndicator>
          )}
          {!loading && (
            <>
              <View>
                <FlatList
                  data={promociones}
                  ListHeaderComponent={() => (
                    <View
                      style={{
                        height: 90,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginLeft: 40,
                      }}
                    >
                      {Platform.OS === "android" && (
                        <Image
                          style={{
                            width: 90,
                            height: 90,
                            resizeMode: "contain",
                          }}
                          source={require("../assets/promociones.png")}
                        ></Image>
                      )}
                      {Platform.OS != "android" && (
                        <LottieView
                          style={{
                            width: 100,
                            height: 100,
                          }}
                          ref={(animation) => {
                            animation = animation;
                          }}
                          source={require("../assets/lottie/discount.json")}
                          autoPlay
                          loop
                        />
                      )}
                      <Text style={styles.title}>Promociones</Text>
                    </View>
                  )}
                  keyExtractor={(product) => product.id.toString()}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        flex: 1,
                        height: 1,
                        width: "100%",
                        backgroundColor: colors.gray,
                      }}
                    ></View>
                  )}
                  renderItem={({ item }) => (
                    <ProductPromo
                      item={item}
                      styleLabel={{
                        backgroundColor:
                          colors[colorDescuento(item.valorDescuento)],
                      }}
                      quantity={carrito.filter((c) => c.id === item.id).length}
                      agregarProducto={() => agregarProducto(item)}
                      eliminarProducto={() => eliminarProducto(item)}
                    />
                  )}
                />
              </View>
            </>
          )}
        </View>
      )}
    </Context.Consumer>
  );
}

export default Promociones;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
  },
});
