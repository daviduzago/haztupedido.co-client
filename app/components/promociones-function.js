import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import colors from "../config/colors";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

const SLIDER_WIDTH = Dimensions.get("window").width;

function Promociones2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  const DATA = [
    {
      id: 1,
      title: "Promocion 1",
    },
    {
      id: 2,
      title: "Promocion 2",
    },
    {
      id: 3,
      title: "Promocion 3",
    },
    {
      id: 4,
      title: "Promocion 4",
    },
  ];

  return (
    <Carousel
      layout={"stack"}
      ref={(ref) => (carousel = ref)}
      data={DATA}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={320}
      renderItem={() => (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Promociones")}
        >
          <View style={styles.container}>
            <Image
              style={{ borderRadius: 10, overflow: "hidden" }}
              source={require("../assets/promo.png")}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
      onSnapToItem={(index) => setActiveIndex(index)}
    />
  );
}
export default Promociones2;

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 10,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "white",
  },
});
