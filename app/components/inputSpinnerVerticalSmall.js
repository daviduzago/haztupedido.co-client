import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";

function InputSpinnerVertical({
  color = "blue",
  onPressAgregar,
  onPressEliminar,
}) {
  const [quantity, setquantity] = useState(0);
  return (
    <View>
      <View style={styles.box}>
        <TouchableWithoutFeedback onPress={onPressAgregar}>
          <View style={[styles.button, { backgroundColor: colors[color] }]}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "white",
              }}
            >
              +
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.numberBox}>
          <Text style={{ fontWeight: "500", fontSize: 12 }}>{quantity}</Text>
        </View>
        <TouchableWithoutFeedback onPress={onPressEliminar}>
          <View style={[styles.button, { backgroundColor: colors[color] }]}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "white",
              }}
            >
              -
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default InputSpinnerVertical;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  box: {
    height: 110,
    width: 40,
    borderRadius: 50,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  numberBox: {
    width: 30,
    height: 25,
    borderRadius: 5,
    backgroundColor: colors.lightGray,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
});
