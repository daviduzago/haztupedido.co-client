import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

function App() {
  const navigation = useNavigation();
  setTimeout(() => {
    const navigate = () => {
      navigation.navigate("DetallesPedido");
    };
    navigate();
  }, 3500);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2 / 3,
          justifyContent: "flex-end",
        }}
      >
        {/* <LottieView
          style={{
            width: 300,
            height: 300,
          }}
          ref={(animation) => {
            animation = animation;
          }}
          source={require("../assets/lottie/done.json")}
          autoPlay
          loop={false}
        /> */}
      </View>
      <View
        style={{
          flex: 1 / 3,
          justifyContent: "flex-start",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "500" }}>
          ¡Pedido Realizado!
        </Text>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
