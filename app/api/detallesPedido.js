import client2 from "./client2";

const endpoint = "/compra/30029935555";

const getDetallesPedido = () => client2.get(endpoint);

export default {
  getDetallesPedido,
};
