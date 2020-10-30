import { useState, useEffect } from "react";

import AsyncStorage from "@react-native-community/async-storage";

export default addProductAsync = (field, data) => {
  const [carrito, setCarrito] = useState([]);

  const getProduct = async () => {
    const item = await AsyncStorage.getItem("carrito");
    setCarrito(item);
  };
  getProduct();

  setCarrito(...carrito, data);

  const setProduct = async () => {
    await AsyncStorage.setItem(field, carrito);
  };
  setProduct;
};
