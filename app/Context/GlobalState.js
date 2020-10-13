import React, { useState } from "react";
import Context from "./context";

export const GlobalState = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (product) => {
    const item = [...carrito, product];
    setCarrito(item);
  };

  const eliminarProducto = (product) => {
    let sw = false;
    const newCarrito = carrito.filter((c) => {
      const isProduct = c.id === product.id;
      if (!sw && isProduct) {
        sw = true;
        return false;
      }
      return true;
    });
    setCarrito(newCarrito);
  };

  return (
    <Context.Provider
      value={{
        carrito: carrito,
        agregarProducto: agregarProducto,
        eliminarProducto: eliminarProducto,
      }}
    >
      {children}
    </Context.Provider>
  );
};
