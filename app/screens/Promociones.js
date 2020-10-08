import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import colors from "../config/colors";
import ProductPromo from "../components/ProductPromo";
import { FlatList } from "react-native-gesture-handler";

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
      descuento: 10,
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

  const [loading, setLoading] = useState(false);

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
    <View style={styles.container}>
      <ActivityIndicator visible={loading}></ActivityIndicator>
      {!loading && (
        <>
          <View
            style={{
              height: 90,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginLeft: 40,
            }}
          >
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
            <Text style={styles.title}>Promociones</Text>
          </View>
          <View>
            <FlatList
              data={DATA}
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
                  imageURL={item.imagen}
                  title={item.producto}
                  subtitle={item.referencia}
                  precio={
                    item.costo_venta - item.costo_venta * (item.descuento / 100)
                  }
                  precioSinDescuento={item.costo_venta}
                  descuento={item.descuento}
                  styleLabel={{
                    backgroundColor: colors[colorDescuento(item.descuento)],
                  }}
                ></ProductPromo>
              )}
            />
          </View>
        </>
      )}
    </View>
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
