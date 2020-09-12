import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ActivityIndicator({ visible = false, style }) {
  if (!visible) return null;

  return (
    <View style={[styles.container, style]}>
      <LottieView
        loop
        autoPlay
        source={require("../assets/lottie/loading.json")}
        ref={(animation) => {
          animation = animation;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: colors.lightGray,
    zIndex: 1000,
  },
});

export default ActivityIndicator;
