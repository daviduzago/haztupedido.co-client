import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";

function InputSpinner() {
  const [quantity, setquantity] = useState(0);
  return (
    <View>
      <View style={styles.box}>
        <TouchableHighlight>
          <View style={styles.button}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "white",
              }}
            >
              +
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.numberBox}>
          <Text style={{ fontWeight: "500", fontSize: 15 }}>{quantity}</Text>
        </View>
        <View style={styles.button}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "white",
            }}
          >
            -
          </Text>
        </View>
      </View>
    </View>
  );
}

export default InputSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  box: {
    height: 120,
    width: 45,
    borderRadius: 50,
    backgroundColor: colors.white,
    justifyContent: "center",
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
    justifyContent: "center",
    alignItems: "center",
  },
});
