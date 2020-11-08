import React, { useState } from "react";
import Context from "./context";

export const GlobalState = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const [pagoTotalEfectivo, setPagoTotalEfectivo] = useState(false);

  const [visibleDiferenciaPagar, setVisibleDiferenciaPagar] = useState(false);

  const [pagoMixto, setPagoMixto] = useState(false);

  const [pagoTotalTransf, setPagoTotalTrasf] = useState(false);

  const [pagoParcial, setPagoParcial] = useState(0);

  const [horarioEntrega, setHorarioEntrega] = useState("");

  const [codHorarioEntrega, setCodHorarioEntrega] = useState(0);

  const [totalCompra, setTotalCompra] = useState(0);

  const [modalAyuda, setModalAyuda] = useState(false);

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
      if (element.tieneDescuento === 0) {
        total += element.costo_venta;
      } else {
        total +=
          element.costo_venta -
          element.costo_venta * (element.valorDescuento / 100);
      }
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
        modalAyuda: modalAyuda,
        setModalAyuda: setModalAyuda,
        visibleDiferenciaPagar: visibleDiferenciaPagar,
        setVisibleDiferenciaPagar: setVisibleDiferenciaPagar,
      }}
    >
      {children}
    </Context.Provider>
  );
};
