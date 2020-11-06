import React, { useState } from "react";
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
      image: require("../assets/promos/promo_1.png"),
    },
    {
      id: 2,
      image: require("../assets/promos/promo_2.png"),
    },
    {
      id: 3,
      image: require("../assets/promos/promo_3.png"),
    },
    {
      id: 4,
      image: require("../assets/promos/promo_4.png"),
    },
    {
      id: 5,
      image: require("../assets/promos/promo_5.png"),
    },
    {
      id: 6,
      image: require("../assets/promos/promo_6.png"),
    },
    {
      id: 7,
      image: require("../assets/promos/promo_7.png"),
    },
    {
      id: 8,
      image: require("../assets/promos/promo_8.png"),
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Promociones")}
    >
      <View style={styles.container}>
        <Image
          style={{
            borderRadius: 10,
            overflow: "hidden",
            resizeMode: "contain",
            width: "100%",
            height: "100%",
          }}
          source={item.image}
        />
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <Carousel
      layout={"stack"}
      ref={(ref) => (carousel = ref)}
      data={DATA}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={320}
      renderItem={(item) => renderItem(item)}
      onSnapToItem={(index) => setActiveIndex(index)}
    />
  );
}
export default Promociones2;

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 10,
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
