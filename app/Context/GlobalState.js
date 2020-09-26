import React, { useState, createContext } from "react";
//import Context from "./context";

export const Context = createContext({
  carrito: [],
  agregarProducto: (product) => {},
  eliminarProducto: (productId) => {},
});

export const GlobalState = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (product) => {
    const item = [...carrito, product];
    setCarrito(item);
  };

  const eliminarProducto = (productId) => {
    setCarrito(carrito.splice(productId, 1));
  };
  return (
    <Context.Provider
      value={{
        carrito: carrito,
        agregarProducto: agregarProducto(),
        eliminarProducto: eliminarProducto(),
      }}
    >
      {children}
    </Context.Provider>
  );
};
