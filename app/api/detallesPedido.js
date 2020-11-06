import client2 from "./client2";

const endpoint = "/compra/";

const getDetallesPedido = (numero) => client2.get(endpoint + numero);

export default {
  getDetallesPedido,
};
