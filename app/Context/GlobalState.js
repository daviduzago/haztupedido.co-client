import React, { useState } from "react";
import Context from "./context";

export const GlobalState = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const [pagoTotalEfectivo, setPagoTotalEfectivo] = useState(false);

  const [pagoParcial, setPagoParcial] = useState(0);

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

  const total = (product) => {
    let total = 0;
    product.forEach((element) => {
      total += element.costo_venta;
    });
    return total;
  };

  return (
    <Context.Provider
      value={{
        carrito: carrito,
        setCarrito: setCarrito,
        agregarProducto: agregarProducto,
        eliminarProducto: eliminarProducto,
        total: total,
        pagoTotalEfectivo: pagoTotalEfectivo,
        setPagoTotalEfectivo: setPagoTotalEfectivo,
        pagoParcial: pagoParcial,
        setPagoParcial: setPagoParcial,
      }}
    >
      {children}
    </Context.Provider>
  );
};
