import React, { useState } from "react";
import { Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import categoryApi from "../api/categorias";
import colors from "../config/colors";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;

function Categorias2({ onPress }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const getCategorias = async () => {
    const response = await categoryApi.getCategorias();
    setCategorias(response.data);
  };

  const DATA = [
    {
      id: 1,
      categoria: "ABARROTES",
    },
    {
      id: 2,
      categoria: "LACTEOS Y HUEVOS",
    },
    {
      id: 3,
      categoria: "DESPENSA",
    },
    {
      id: 4,
      categoria: "ASEO DEL HOGAR",
    },
    {
      id: 5,
      categoria: "CUIDADO DE LA ROPA",
    },
    {
      id: 6,
      categoria: "CUIDADO PERSONAL",
    },
    {
      id: 7,
      categoria: "CARNES FRÍAS Y EMBUTIDOS",
    },
    {
      id: 8,
      categoria: "PANADERÍA Y AREPAS",
    },
    {
      id: 9,
      categoria: "FRUTAS Y VEGETALES",
    },
    {
      id: 10,
      categoria: "DULCES Y PASABOCAS",
    },
    {
      id: 11,
      categoria: "TRAGOS",
    },
  ];

  return (
    <Carousel
      layout={"default"}
      ref={(ref) => (carousel = ref)}
      data={DATA}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={150}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={onPress}>
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
              {item.categoria}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
      onSnapToItem={(index) => setActiveIndex(index)}
    />
  );
}

export default Categorias2;

const styles = StyleSheet.create({
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
