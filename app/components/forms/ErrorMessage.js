import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

export default ErrorMessage;

const styles = StyleSheet.create({
  container: { width: "100%", justifyContent: "center", alignItems: "center" },
  error: { fontSize: 10, color: colors.red },
});
