import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const SLIDER_WIDTH = Dimensions.get("window").width;

function Tutorial({ onPressListo }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const DATA = [
    {
      id: 1,
      image: require("../assets/tutorial/1.png"),
    },
    {
      id: 2,
      image: require("../assets/tutorial/2.png"),
    },
    {
      id: 3,
      image: require("../assets/tutorial/3.png"),
    },
    {
      id: 4,
      image: require("../assets/tutorial/4.png"),
    },
    {
      id: 5,
      image: require("../assets/tutorial/5.png"),
    },
    {
      id: 6,
      image: require("../assets/tutorial/6.png"),
    },
    {
      id: 7,
      image: require("../assets/tutorial/7.png"),
    },
    {
      id: 8,
      image: require("../assets/tutorial/8.png"),
    },
    {
      id: 9,
      image: require("../assets/tutorial/9.png"),
    },
  ];

  const renderItem = ({ item }) => (
    <View
      style={{
        height: 520,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
  );

  return (
    <View style={styles.container}>
      <Carousel
        layout={"default"}
        ref={(ref) => (carousel = ref)}
        data={DATA}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={320}
        renderItem={(item) => renderItem(item)}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <TouchableOpacity onPress={onPressListo}>
        <View
          style={{
            width: 200,
            height: 50,
            backgroundColor: colors.yellow,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, color: colors.black }}>Listo</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Tutorial;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 600,
    backgroundColor: colors.white,
    position: "absolute",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    bottom: 0,
    left: 0,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
