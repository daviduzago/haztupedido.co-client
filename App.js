import React, { Component } from "react";
import { SplashScreen } from "expo";
import { StyleSheet, View, Image } from "react-native";
import Screen from "./app/components/Screen";
import Shop from "./app/screens/Shop";
import Product from "./app/screens/Product";
import MainMenu from "./app/screens/MainMenu";
import colors from "./app/config/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Carrito from "./app/components/carritoIcon";
import Cart from "./app/screens/Cart";
import HeaderMainMenu from "./app/assets/headerMainMenu_welcome.png";
import CheckOutForm from "./app/screens/CheckOutForm";

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
          <View>
            <Image
              style={{
                width: 200,
                height: 50,
                resizeMode: "contain",
                marginLeft: 10,
              }}
              source={HeaderMainMenu}
            ></Image>
          </View>
        ),
        headerTitleAlign: "center",
        headerTitle: "",
      }}
    ></Stack.Screen>
    <Stack.Screen
      name="Shop"
      component={Shop}
      options={{
        headerTitle: "",
        headerRight: () => (
          <View style={{ marginRight: 7, marginTop: 3 }}>
            <Carrito cantidadItems={2} backgroundColor={colors.white}></Carrito>
          </View>
        ),
      }}
    ></Stack.Screen>
    <Stack.Screen
      options={{ headerTitle: "Producto" }}
      name="Product"
      component={Product}
    ></Stack.Screen>
    <Stack.Screen
      name="Cart"
      component={Cart}
      options={{ headerTitle: "Tu Pedido", headerTitleAlign: "center" }}
    ></Stack.Screen>
    <Stack.Screen
      name="CheckOutForm"
      component={CheckOutForm}
      options={{ headerTitle: "" }}
    ></Stack.Screen>
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
