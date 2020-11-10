import React from "react";
import { View, StyleSheet, ActivityIndicator, Platform } from "react-native";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

function ActivityIndicatorApp({ visible = false, style }) {
  if (!visible) return null;

  return (
    <View style={[styles.container, style]}>
      {Platform.OS === "android" && <ActivityIndicator size="large" />}
      {Platform.OS === "ios" && (
        <LottieView
          loop
          autoPlay
          source={require("../assets/lottie/loading.json")}
          ref={(animation) => {
            animation = animation;
          }}
        />
      )}
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ActivityIndicatorApp;
