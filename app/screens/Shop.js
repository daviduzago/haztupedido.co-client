import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";
import colors from "../config/colors";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  ImageBackground,
  SectionList,
} from "react-native";
import productosApi from "../api/productos";
import Screen from "../components/Screen";
import ActivityIndicator from "../components/ActivityIndicator";
import AppTextInput from "../components/AppTextInput";
import Categorias2 from "../components/categorias-function";
import ProductShop from "../components/ProductShop";
import Animated from "react-native-reanimated";
import Street from "../assets/street.jpg";
import Promociones from "../components/promociones";
import LottieView from "lottie-react-native";
import { ScreenStackHeaderRightView } from "react-native-screens";

function Shop({ route }) {
  useRoute();

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

  const loadProductos = async () => {
    setLoading(true);
    const response = await productosApi.getProductos();
    setProductos(response);
    setLoading(false);
  };

  useEffect(() => {
    //loadProductos();
  }, []);

  const navigation = useNavigation();
  const scrollY = new Animated.Value(0);
  const startHeaderHeight = 175 + useHeaderHeight();
  const startSearchCategory = 130 + useHeaderHeight();
  const startFlatListHeight = 270 + useHeaderHeight();

  const headerY = Animated.interpolate(scrollY, {
    inputRange: [0, startHeaderHeight],
    outputRange: [0, -startHeaderHeight],
    extrapolate: "clamp",
  });
  const searchCategoryY = Animated.interpolate(scrollY, {
    inputRange: [0, startSearchCategory],
    outputRange: [0, -startSearchCategory],
    extrapolate: "clamp",
  });
  const flatListY = Animated.interpolate(scrollY, {
    inputRange: [0, startFlatListHeight],
    outputRange: [0, -useHeaderHeight() - 240],
    extrapolate: "clamp",
  });
  // const promocionY = Animated.interpolate(scrollY, {
  //   inputRange: [0, startHeaderHeight],
  // });
  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={loading}></ActivityIndicator>
      {!loading && (
        <>
          <Animated.View
            style={{
              flex: 1,
              position: "absolute",
              backgroundColor: "white",
              top: 0,
              right: 0,
              elevation: 1000,
              left: 0,
              height: 170,
              transform: [{ translateY: headerY }],
            }}
          >
            <ImageBackground
              style={{ height: "100%", width: "100%", opacity: 0.4 }}
              source={Street}
              resizeMode={"cover"}
            ></ImageBackground>
            <LottieView
              style={{
                position: "absolute",
                right: -3,
                bottom: -16,
                width: 200,
                height: 200,
              }}
              ref={(animation) => {
                animation = animation;
              }}
              source={require("../assets/lottie/delivery-riding.json")}
              autoPlay
              loop
            />

            <View style={styles.containerImageShop}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/groceriesBag.png")}
              />
            </View>

            <Text style={styles.shopTitle}>{route.params.title}</Text>
            <Text style={styles.shopSubtitle}>Horario de atención</Text>
          </Animated.View>

          <Animated.View
            style={{
              flex: 1,
              position: "absolute",
              top: 171,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              transform: [{ translateY: searchCategoryY }],
            }}
          >
            <AppTextInput
              icon={"shopping-search"}
              placeholder={"Buscar productos o categorias"}
              size={22}
            ></AppTextInput>
            <View style={{ height: 50 }}>
              <Categorias2></Categorias2>
            </View>
            <Animated.View
              style={{
                height: 120,
                position: "absolute",
                zIndex: -1,
                top: 120,
                transform: [{ translateY: headerY }],
              }}
            >
              <Promociones></Promociones>
            </Animated.View>
          </Animated.View>
          <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              {
                nativeEvent: { contentOffset: { y: scrollY } },
              },
            ])}
            style={{
              flex: 1,
              position: "absolute",
              top: 400,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              transform: [{ translateY: flatListY }],
            }}
            contentContainerStyle={{
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <SectionList
              sections={DATA}
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
                <Text style={styles.sectionHeader}>{categoria}</Text>
              )}
            />
          </Animated.ScrollView>
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
});
