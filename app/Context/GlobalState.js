import React, { useState } from "react";
import Context from "./context";

export const GlobalState = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const [pagoTotalEfectivo, setPagoTotalEfectivo] = useState(false);

  const [pagoMixto, setPagoMixto] = useState(false);

  const [pagoTotalTransf, setPagoTotalTrasf] = useState(false);

  const [pagoParcial, setPagoParcial] = useState(0);

  const [horarioEntrega, setHorarioEntrega] = useState("");

  const [codHorarioEntrega, setCodHorarioEntrega] = useState(0);

  const [totalCompra, setTotalCompra] = useState(0);

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
    setTotalCompra(total);
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
        totalCompra: totalCompra,
        pagoTotalEfectivo: pagoTotalEfectivo,
        setPagoTotalEfectivo: setPagoTotalEfectivo,
        pagoTotalTransf: pagoTotalTransf,
        setPagoTotalTransf: setPagoTotalTrasf,
        pagoMixto: pagoMixto,
        setPagoMixto: setPagoMixto,
        pagoParcial: pagoParcial,
        setPagoParcial: setPagoParcial,
        horarioEntrega: horarioEntrega,
        setHorarioEntrega: setHorarioEntrega,
        codHorarioEntrega: codHorarioEntrega,
        setCodHorarioEntrega: setCodHorarioEntrega,
      }}
    >
      {children}
    </Context.Provider>
  );
};
