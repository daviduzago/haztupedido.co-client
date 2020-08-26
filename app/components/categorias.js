import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import categoryApi from "../api/categorias";
import colors from "../config/colors";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;

export default class Categorias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      categorias: [],
    };
  }

  componentDidMount() {
    this._loadCategories();
  }

  _loadCategories = async () => {
    const response = await categoryApi.getCategorias();
    this.setState({ categorias: response.data });
  };

  _renderItem({ item }) {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Text
            numberOfLines={2}
            adjustsFontSizeToFit={true}
            style={styles.title}
          >
            {item.descripcion}
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
    padding: 2,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "white",
    textTransform: "capitalize",
  },
});
