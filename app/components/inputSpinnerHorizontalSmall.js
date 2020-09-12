import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";

function InputSpinnerHorizontal({ color = "blue", onPress }) {
  const [quantity, setquantity] = useState(0);
  return (
    <View>
      <View style={styles.box}>
        <TouchableWithoutFeedback
          onPress={() => {
            if (quantity > 0) {
              setquantity(quantity - 1);
            }
          }}
        >
          <View style={[styles.button, { backgroundColor: colors[color] }]}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "white",
                position: "absolute",
              }}
            >
              -
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.numberBox}>
          <Text style={{ fontWeight: "500", fontSize: 15 }}>{quantity}</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            setquantity(quantity + 1);
            onPress;
          }}
        >
          <View style={[styles.button, { backgroundColor: colors[color] }]}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: "white",
                position: "absolute",
              }}
            >
              +
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default InputSpinnerHorizontal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  box: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    borderRadius: 50,
    backgroundColor: colors.white,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  numberBox: {
    width: 35,
    height: 30,
    borderRadius: 5,
    backgroundColor: colors.lightGray,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: colors.lightGreen,
    alignItems: "center",
    justifyContent: "center",
  },
});
