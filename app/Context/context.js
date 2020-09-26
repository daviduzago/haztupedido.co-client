import React from "react";

export default React.createContext({
  carrito: [],
  agregarProducto: (product) => {},
  eliminarProducto: (productId) => {},
});
