import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import categoryApi from "../api/categorias";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

const SLIDER_WIDTH = Dimensions.get("window").width;

function Categorias2({ onPress }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [categorias, setCategorias] = useState([]);

  const navigation = useNavigation();

  const getCategorias = async () => {
    const response = await categoryApi.getCategorias();
    setCategorias(response.data);
  };

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <Carousel
      layout={"default"}
      ref={(ref) => (carousel = ref)}
      data={categorias}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={150}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <LinearGradient
            style={styles.container}
            colors={["#3E0991", "#8b00de"]}
            start={[0.8, 0.2]}
            end={[0.1, 0.8]}
          >
            <Text
              numberOfLines={2}
              adjustsFontSizeToFit={true}
              style={styles.title}
            >
              {item.Categoria}
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
