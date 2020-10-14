import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;

export default class Promociones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      categorias: [
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
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <Image
            style={{ borderRadius: 10, overflow: "hidden" }}
            source={require("../assets/promo.png")}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <Carousel
        layout={"stack"}
        ref={(ref) => (this.carousel = ref)}
        data={this.state.categorias}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={320}
        renderItem={this._renderItem}
        onSnapToItem={(index) => this.setState({ activeIndex: index })}
      />
    );
  }
}

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
