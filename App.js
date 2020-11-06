import React, { Component } from "react";
import { SplashScreen } from "expo";
import { StyleSheet, View, Image, Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import colors from "./app/config/colors";
import Carrito from "./app/components/carritoIcon";
import Cart from "./app/screens/Cart";
import CheckOutForm from "./app/screens/CheckOutForm";
import CacheInfo from "./app/screens/CacheInfo";
import HeaderMainMenu from "./app/assets/headerMainMenu_welcome.png";
import MainMenu from "./app/screens/MainMenu";
import Screen from "./app/components/Screen";
import Shop from "./app/screens/Shop3";
import Product from "./app/screens/Product";
import Promociones from "./app/screens/Promociones";
import GoBackModal from "./app/components/goBackModal";
import { GlobalState } from "./app/Context/GlobalState";
import { Context } from "./app/Context/GlobalState";
import CheckOut from "./app/screens/CheckOut";
import PagoEfectivo from "./app/screens/pagoEfectivo";
import PedidoRealizado from "./app/screens/PedidoRealizado";
import DetallesPedido from "./app/screens/DetallesPedido";
import HistoryIcon from "./app/components/historyIcon";
import Help from "./app/components/HelpIcon";
import HistorialPedidos from "./app/screens/historialPedidos";
import CarritoCheckOut from "./app/screens/CarritoCheckOut";

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
    />
    <Stack.Screen
      name="Shop"
      component={Shop}
      options={{
        headerTitle: "Tu Mercado",
        headerRight: () => (
          <View style={{ marginRight: 7, marginTop: 3, flexDirection: "row" }}>
            <Help></Help>
            <Carrito cantidadItems={1} backgroundColor={colors.white}></Carrito>
          </View>
        ),
      }}
    />
    <Stack.Screen
      options={{ headerTitle: "Producto" }}
      name="Product"
      component={Product}
    />
    <Stack.Screen
      name="Cart"
      component={Cart}
      options={{
        headerTitle: "Tu Pedido",
        headerTitleAlign: "center",
        ...TransitionPresets.ModalTransition,
        headerLeft: () => <GoBackModal></GoBackModal>,
      }}
    />
    <Stack.Screen
      name="CheckOutForm"
      component={CheckOutForm}
      options={{ headerTitle: "" }}
    />
    <Stack.Screen
      name="CacheInfo"
      component={CacheInfo}
      options={{ headerTitle: "Su información", headerTitleAlign: "center" }}
    />
    <Stack.Screen name="Promociones" component={Promociones}></Stack.Screen>
    <Stack.Screen
      name="CheckOut"
      component={CheckOut}
      options={{ headerTitle: "" }}
    ></Stack.Screen>
    <Stack.Screen
      name="PagoEfectivo"
      component={PagoEfectivo}
      options={{ headerTitle: "" }}
    ></Stack.Screen>
    <Stack.Screen
      name="PedidoRealizado"
      component={PedidoRealizado}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="DetallesPedido"
      component={DetallesPedido}
      options={{
        headerLeft: () => <></>,
        headerTitle: "Detalles del pedido",
      }}
    ></Stack.Screen>
    <Stack.Screen
      name="HistorialPedidos"
      component={HistorialPedidos}
      options={{
        headerTitle: "Historial Pedidos",
      }}
    ></Stack.Screen>
    <Stack.Screen
      name="CarritoCheckOut"
      component={CarritoCheckOut}
      options={{
        headerTitle: "Carrito",
      }}
    ></Stack.Screen>
  </Stack.Navigator>
);

class App extends Component {
  render() {
    return (
      <GlobalState>
        <Screen style={styles.container}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </Screen>
      </GlobalState>
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
