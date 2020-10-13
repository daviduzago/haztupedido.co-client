import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import categoryApi from "../api/categorias";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  Dimensions,
  SectionList,
  TouchableOpacity,
} from "react-native";
import productosApi from "../api/productos";
import Screen from "../components/Screen";
import ActivityIndicator from "../components/ActivityIndicator";
import AppTextInput from "../components/AppTextInput";
import Carousel from "react-native-snap-carousel";
import ProductShop from "../components/ProductShop";
import Promociones from "../components/promociones-function";

const SLIDER_WIDTH = Dimensions.get("window").width;

function Shop() {
  useRoute();
  const navigation = useNavigation();

  const DATA = [
    {
      categoria: "Lacteos y huevos",
      data: [
        {
          id: 528,
          referencia: "3377",
          imagen:
            "http://haztupedido.co/modulo/images/HUEVOS DE CAMPO A X 30 UNID.PNG.PNG",
          costo_venta: 13450,
          unidad_medida: 30,
          tipo_unidad: "Und",
          oferta: 0,
          producto: "Huevos de campo a",
          Subcategoria: "HUEVOS",
          Categoria: "LACTEOS Y HUEVOS",
        },
        {
          id: 529,
          referencia: "4116",
          imagen:
            "http://haztupedido.co/modulo/images/HUEVOS DE CAMPO B X 30 UNID.PNG.PNG",
          costo_venta: 11900,
          unidad_medida: 30,
          tipo_unidad: "Und",
          oferta: 0,
          producto: "Huevos de campo b",
          Subcategoria: "HUEVOS",
          Categoria: "LACTEOS Y HUEVOS",
        },
        {
          id: 530,
          referencia: "2995",
          imagen:
            "http://haztupedido.co/modulo/images/HUEVOS AAA X 15 UNID.PNG.PNG",
          costo_venta: 5600,
          unidad_medida: 15,
          tipo_unidad: "Und",
          oferta: 0,
          producto: "Huevos aaa",
          Subcategoria: "HUEVOS",
          Categoria: "LACTEOS Y HUEVOS",
        },
        {
          id: 531,
          referencia: "2367",
          imagen:
            "http://haztupedido.co/modulo/images/HUEVOS DE CAMPO AA X 15 UNID.PNG.PNG",
          costo_venta: 4550,
          unidad_medida: 15,
          tipo_unidad: "Und",
          oferta: 0,
          producto: "Huevos de campo aa",
          Subcategoria: "HUEVOS",
          Categoria: "LACTEOS Y HUEVOS",
        },
      ],
    },
    {
      categoria: "Abarrotes",
      data: [
        {
          id: 577,
          referencia: "1783",
          imagen:
            "http://haztupedido.co/modulo/images/ARROZ DOÑA PEPA PARBOLIZADO X 500 GR.PNG.jpg",
          costo_venta: 2700,
          unidad_medida: 500,
          tipo_unidad: "Gr",
          oferta: 0,
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
          oferta: 0,
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
          oferta: 0,
          producto: "Arroz con leche roa",
          Subcategoria: "ARROZ",
          Categoria: "ABARROTES",
        },
        {
          id: 580,
          referencia: "1767",
          imagen:
            "http://haztupedido.co/modulo/images/ARROZ ROA X 500 GR.PNG.PNG",
          costo_venta: 1750,
          unidad_medida: 500,
          tipo_unidad: "Gr",
          oferta: 0,
          producto: "Arroz roa",
          Subcategoria: "ARROZ",
          Categoria: "ABARROTES",
        },
      ],
    },
  ];

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCarrito, setTotalCarrito] = useState(0);
  const [categorias, setCategorias] = useState([]);
  const [DATA2, setDATA2] = useState(DATA);

  const scrollToSection = (sectionID) => {
    this.sectionListRef.scrollToLocation({
      animated: true,
      sectionIndex: sectionID,
      itemIndex: 0,
      viewPosition: 0,
    });
  };

  const loadProductos = async () => {
    setLoading(true);
    const response = await productosApi.getProductos();
    setProductos(response);
    setLoading(false);
  };

  const getCategorias = async () => {
    setLoading(true);
    const response = await categoryApi.getCategorias();
    setCategorias(response.data);
    setLoading(false);
  };

  const search = (text) => {
    const newData = DATA2.filter((item) => {
      const itemData = "" + item.data.producto.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setDATA(newData);
  };

  useEffect(() => {
    //loadProductos();
    getCategorias();
  }, []);

  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={loading}></ActivityIndicator>

      {!loading && (
        <>
          <SectionList
            ListHeaderComponent={() => (
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View
                  style={{
                    flex: 1,
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
                <View style={{ height: 50 }}>
                  <Carousel
                    layout={"default"}
                    ref={(ref) => (carousel = ref)}
                    data={categorias}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={150}
                    renderItem={({ item }) => (
                      <TouchableOpacity>
                        <LinearGradient
                          style={styles.containerCategorias}
                          colors={["#3E0991", "#8b00de"]}
                          start={[0.8, 0.2]}
                          end={[0.1, 0.8]}
                        >
                          <Text
                            numberOfLines={2}
                            adjustsFontSizeToFit={true}
                            style={styles.titleCategorias}
                          >
                            {item.Categoria}
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    )}
                    onSnapToItem={(index) => setActiveIndex(index)}
                  />
                </View>
                <Promociones></Promociones>
              </View>
            )}
            sections={DATA}
            style={{ width: "100%" }}
            keyExtractor={(item, index) => item + index}
            renderItem={({ section: { data } }) => (
              <FlatList
                style={{
                  margin: 5,
                  paddingHorizontal: 5,
                }}
                numColumns={2} // set number of columns
                columnWrapperStyle={styles.row} // space them out evenly
                data={data}
                keyExtractor={(producto) => producto.id}
                renderItem={({ item }) => (
                  <ProductShop
                    onPress={() => {
                      navigation.navigate("Product", {
                        producto: item.producto,
                        referencia: item.referencia,
                        precio: item.costo_venta,
                        imageURL: item.imagen,
                        unidadMedida: item.unidad_medida,
                        tipoUnidad: item.tipo_unidad,
                      });
                    }}
                    title={item.producto}
                    subtitle={item.referencia}
                    precio={item.costo_venta}
                    unidadMedida={item.unidad_medida}
                    tipoUnidad={item.tipo_unidad}
                    imageURL={item.imagen}
                    onPressInputSpinner={() => {
                      setTotalCarrito(totalCarrito + 1);
                    }}
                  ></ProductShop>
                )}
              />
            )}
            renderSectionHeader={({ section: { categoria } }) => (
              <View style={{ flex: 1, backgroundColor: colors.lightGray }}>
                <Text style={styles.sectionHeader}>{categoria}</Text>
              </View>
            )}
          />
        </>
      )}
    </Screen>
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
    marginVertical: 5,
    paddingLeft: 20,
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
