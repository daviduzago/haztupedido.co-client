import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import colors from "../config/colors";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  SectionList,
  Platform,
  Modal,
} from "react-native";
import productosApi from "../api/productos";
import Screen from "../components/Screen";
import ActivityIndicatorApp from "../components/ActivityIndicator";
import AppTextInput from "../components/AppTextInput";
import ProductShop from "../components/ProductShop";
import Promociones from "../components/promociones-function";
import Context from "../Context/context";
import Tutorial from "./tutorial";

function Shop() {
  useRoute();
  let timerWrite = undefined;
  const navigation = useNavigation();

  const DATA = [
    {
      Categoria: "Abarrotes",
      data: [
        [
          {
            id: 421,
            referencia: "1047",
            nombreProducto: "Colada maizena la original",
            imagen:
              "http://haztupedido.co/moduloapi/categoria/COLADA MAIZENA LA ORIGINAL X 380 GR.PNG",
            costo_venta: 8800,
            unidad_medida: 380,
            tipo_unidad: "GR",
            tieneDescuento: 0,
            descuentoD: 0,
            subcategoria: "Harinas y mezclas listas",
            categoria: "Abarrotes",
          },
          {
            id: 422,
            referencia: "1051",
            nombreProducto: "Colada toning 7 cereales surtida",
            imagen:
              "http://haztupedido.co/moduloapi/categoria/COLADA TONING 7 CEREALES SURTIDA.PNG",
            costo_venta: 2850,
            unidad_medida: 200,
            tipo_unidad: "GR",
            tieneDescuento: 0,
            descuentoD: 0,
            subcategoria: "Harinas y mezclas listas",
            categoria: "Abarrotes",
          },
        ],
      ],
    },
    {
      Categoria: "Lacteos y huevos",
      data: [
        [
          {
            id: 380,
            referencia: "964",
            nombreProducto: "Baby klim 2 lata",
            imagen:
              "http://haztupedido.co/moduloapi/categoria/BABY KLIM 2 LATA.PNG",
            costo_venta: 21150,
            unidad_medida: 400,
            tipo_unidad: "GR",
            tieneDescuento: 0,
            descuentoD: 0,
            subcategoria: "Leche en polvo",
            categoria: "Lacteos y huevos",
          },
          {
            id: 381,
            referencia: "965",
            nombreProducto: "Baby klim 1 lata",
            imagen:
              "http://haztupedido.co/moduloapi/categoria/BABY KLIM 1 LATA.PNG",
            costo_venta: 23800,
            unidad_medida: 400,
            tipo_unidad: "GR",
            tieneDescuento: 0,
            descuentoD: 0,
            subcategoria: "Leche en polvo",
            categoria: "Lacteos y huevos",
          },
          {
            id: 578,
            referencia: "1393",
            nombreProducto: "Queso crema alpina cremosino",
            imagen:
              "http://haztupedido.co/moduloapi/categoria/QUESO CREMA ALPINA CREMOSINO.PNG",
            costo_venta: 6400,
            unidad_medida: 380,
            tipo_unidad: "GR",
            tieneDescuento: 0,
            descuentoD: 0,
            subcategoria: "Cremas",
            categoria: "Lacteos y huevos",
          },
          {
            id: 404,
            referencia: "1007",
            nombreProducto: "Klim 1+",
            imagen: "http://haztupedido.co/moduloapi/categoria/KLIM 1+.PNG",
            costo_venta: 17200,
            unidad_medida: 500,
            tipo_unidad: "GR",
            tieneDescuento: 0,
            descuentoD: 0,
            subcategoria: "Leche en polvo",
            categoria: "Lacteos y huevos",
          },
          {
            id: 405,
            referencia: "1009",
            nombreProducto: "Klim 3+",
            imagen: "http://haztupedido.co/moduloapi/categoria/KLIM 3+.PNG",
            costo_venta: 16050,
            unidad_medida: 500,
            tipo_unidad: "GR",
            tieneDescuento: 0,
            descuentoD: 0,
            subcategoria: "Leche en polvo",
            categoria: "Lacteos y huevos",
          },
          {
            id: 406,
            referencia: "1011",
            nombreProducto: "Klim deslactosado",
            imagen:
              "http://haztupedido.co/moduloapi/categoria/KLIM DESLACTOSADO.PNG",
            costo_venta: 12450,
            unidad_medida: 360,
            tipo_unidad: "GR",
            tieneDescuento: 0,
            descuentoD: 0,
            subcategoria: "Leche en polvo",
            categoria: "Lacteos y huevos",
          },
        ],
      ],
    },
    {
      Categoria: "Despensa",
      data: [
        [
          {
            id: 435,
            referencia: "1078",
            nombreProducto: "Choco krispis",
            imagen:
              "http://haztupedido.co/moduloapi/categoria/CHOCO KRISPIS.PNG",
            costo_venta: 20400,
            unidad_medida: 700,
            tipo_unidad: "GR",
            tieneDescuento: 0,
            descuentoD: 0,
            subcategoria: "Cereales",
            categoria: "Despensa",
          },
          {
            id: 436,
            referencia: "1079",
            nombreProducto: "Zucaritas",
            imagen:
              "http://haztupedido.co/moduloapi/categoria/ZUCARITAS 300 GR.PNG",
            costo_venta: 8500,
            unidad_medida: 300,
            tipo_unidad: "GR",
            tieneDescuento: 0,
            descuentoD: 0,
            subcategoria: "Cereales",
            categoria: "Despensa",
          },
          {
            id: 437,
            referencia: "1080",
            nombreProducto: "Zukcaritas",
            imagen: "http://haztupedido.co/moduloapi/categoria/ZUCARITAS.PNG",
            costo_venta: 12250,
            unidad_medida: 450,
            tipo_unidad: "GR",
            tieneDescuento: 0,
            descuentoD: 0,
            subcategoria: "Cereales",
            categoria: "Despensa",
          },
          {
            id: 438,
            referencia: "1081",
            nombreProducto: "Choc okrispis pops",
            imagen:
              "http://haztupedido.co/moduloapi/categoria/CHOCO KRISPIS POPS.PNG",
            costo_venta: 8500,
            unidad_medida: 230,
            tipo_unidad: "GR",
            tieneDescuento: 0,
            descuentoD: 0,
            subcategoria: "Cereales",
            categoria: "Despensa",
          },
        ],
      ],
    },
  ];

  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);
  const [dataRender, setDataRender] = useState([]);

  const loadProductos = async () => {
    setLoading(true);
    const response = await productosApi.getProductos();
    setProductos(response.data);
    setDataRender(response.data);
    setLoading(false);
  };

  const handleSearch = (value) => {
    window.clearInterval(timerWrite);
    timerWrite = setTimeout(() => {
      if (value && value.length) {
        const minValue = value.toLowerCase();
        const result = productos.map((d) => ({
          categoria: d.Categoria,
          data: [
            d.data[0].filter(
              (item) =>
                item.nombreProducto.toLowerCase().indexOf(minValue) > -1 ||
                item.categoria.toLowerCase().indexOf(minValue) > -1
            ),
          ],
        }));
        setDataRender(result.filter((r) => r.data[0].length));
      } else {
        setDataRender(productos);
      }
    }, 1000);
  };

  useEffect(() => {
    loadProductos();
  }, []);

  return (
    <Context.Consumer>
      {({
        agregarProducto,
        eliminarProducto,
        carrito,
        modalAyuda,
        setModalAyuda,
      }) => (
        <Screen style={styles.container}>
          <ActivityIndicatorApp visible={loading}></ActivityIndicatorApp>
          {!loading && (
            <View>
              <Modal
                animationType={"slide"}
                transparent={true}
                visible={modalAyuda}
              >
                <Tutorial onPressListo={() => setModalAyuda(false)} />
              </Modal>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: "cover",
                    marginLeft: 10,
                  }}
                  source={require("../assets/groceriesBag.png")}
                />
                <AppTextInput
                  onChangeText={handleSearch}
                  icon={"shopping-search"}
                  placeholder={"Buscar productos o categorias"}
                  size={18}
                  styleContainer={{
                    width: "80%",
                    marginLeft: 8,
                    height: 40,
                    backgroundColor: "white",
                  }}
                  styleTextInput={{ fontSize: 15 }}
                />
              </View>
              <SectionList
                stickySectionHeadersEnabled={true}
                ListHeaderComponent={() => (
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <Promociones></Promociones>
                  </View>
                )}
                sections={dataRender}
                initialNumToRender={30}
                maxToRenderPerBatch={6}
                style={{ width: "100%" }}
                keyExtractor={(item, index) => (item + index).toString()}
                renderItem={({ item }) => (
                  <FlatList
                    style={{
                      margin: 5,
                      paddingHorizontal: 5,
                    }}
                    numColumns={2} // set number of columns
                    columnWrapperStyle={styles.row} // space them out evenly
                    data={item}
                    keyExtractor={(producto) => producto.id.toString()}
                    renderItem={({ item }) => (
                      <ProductShop
                        item={item}
                        onPressProducto={() => {
                          navigation.navigate("Product", {
                            item: item,
                          });
                        }}
                        onPressAgregar={() => agregarProducto(item)}
                        onPressEliminar={() => eliminarProducto(item)}
                        carrito={carrito}
                      ></ProductShop>
                    )}
                  />
                )}
                renderSectionHeader={({ section: { Categoria } }) => (
                  <View style={{ flex: 1, backgroundColor: colors.lightGray }}>
                    <Text style={styles.sectionHeader}>{Categoria}</Text>
                  </View>
                )}
              />
            </View>
          )}
        </Screen>
      )}
    </Context.Consumer>
  );
}

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  containerImageShop: {
    height: 100,
    width: 100,
    top: 70,
    left: 20,
    position: "absolute",
  },
  shopTitle: {
    fontSize: 35,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
    position: "absolute",
    top: "50%",
    left: "32%",
    color: colors.black,
    textShadowColor: "white",
    textShadowRadius: 15,
    textShadowOffset: { width: -1, height: 1 },
  },
  shopSubtitle: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "black",
    position: "absolute",
    textDecorationLine: "underline",
    top: "73%",
    left: "34%",
    color: "black",
    textShadowColor: "white",
    textShadowRadius: 15,
    textShadowOffset: { width: -1, height: 1 },
  },
  sectionHeader: {
    fontSize: 30,
    fontWeight: "500",
    paddingLeft: 20,
    textTransform: "capitalize",
  },
  carrito: {
    position: "absolute",
    top: "4%",
    right: "3%",
  },
  containerCategorias: {
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.darkPurple,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  titleCategorias: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "white",
    textTransform: "capitalize",
  },
  gradient: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "100%",
  },
});
