import client from "./client2";

const endpoint = "/compra";

export const nuevaCompra = (
  idUsuario,
  carrito,
  subTotal,
  horario,
  pagoEfectivo,
  pagoTotalEfectivo,
  pagoTotalTransf
) => {
  const data = new FormData();

  data.append("numeroCelular", idUsuario);
  data.append("carrito", JSON.stringify(carrito));
  data.append("subTotalCompra", subTotal);
  data.append("valorDomicilio", 3000);
  data.append("horarioEntrega", horario);
  if (pagoEfectivo > 0) data.append("tipoPago", 3);
  if (pagoEfectivo > 0) data.append("valorEfectivo", pagoEfectivo);
  if (pagoTotalEfectivo) data.append("tipoPago", 1);
  if (pagoTotalTransf) data.append("tipoPago", 2);

  return client.post(endpoint, data);
};

export default {
  nuevaCompra,
};
