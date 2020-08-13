import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;

export default class Categorias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      categorias: [
        {
          id: 1,
          title: "Ofertas",
        },
        {
          id: 2,
          title: "Lacteos",
        },
        {
          id: 3,
          title: "Granos",
        },
        {
          id: 4,
          title: "Categoria 4",
        },
        {
          id: 5,
          title: "Categoria 5",
        },
        {
          id: 6,
          title: "Categoria muy larga de texto",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Text
            numberOfLines={2}
            adjustsFontSizeToFit={true}
            style={styles.title}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Carousel
        layout={"default"}
        ref={(ref) => (this.carousel = ref)}
        data={this.state.categorias}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={150}
        renderItem={this._renderItem}
        onSnapToItem={(index) => this.setState({ activeIndex: index })}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.darkPurple,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "white",
  },
});
