import React, { Component } from "react";
import { SplashScreen } from "expo";
import { StyleSheet, View, Text } from "react-native";
import Screen from "./app/components/Screen";
import Shop from "./app/screens/Shop";
import Product from "./app/screens/Product";
import MainMenu from "./app/screens/MainMenu";
import colors from "./app/config/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Avatar from "./app/components/avatar";

SplashScreen.preventAutoHide();
setTimeout(SplashScreen.hide, 3000);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Menu"
      component={MainMenu}
      options={{
        headerLeft: () => (
          <View style={{ paddingLeft: 15, flexDirection: "row" }}>
            <Avatar></Avatar>
            <Text style={styles.greetingText}>Hola! </Text>
          </View>
        ),
        headerTitleAlign: "center",
        headerTitle: "",
      }}
    ></Stack.Screen>
    <Stack.Screen
      name="Shop"
      component={Shop}
      options={{ headerTitle: "" }}
    ></Stack.Screen>
    <Stack.Screen name="Product" component={Product}></Stack.Screen>
  </Stack.Navigator>
);

class App extends Component {
  render() {
    return (
      <Screen style={styles.container}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Screen>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.white,
  },
  greetingText: {
    width: "100%",
    fontSize: 25,
    color: colors.black,
    fontWeight: "500",
    backgroundColor: colors.white,
    marginLeft: 10,
  },
});
