import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import colors from "./app/config/color";

const messages = [
  {
    id: 1,
    message: "Hola",
  },
];

function App(props) {
  //Messages es el arreglo llamado de la BD
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    //Eliminar el mensaje de los mensajes
    setMessages(messages.filter((m) => m.id !== messages.id));
  };
  return <View></View>;
}

export default App;

const styles = StyleSheet.create({
  container: {},
});
