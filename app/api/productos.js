import client from "./client2";

const endpoint = "/product";

const getProductos = () => client.get(endpoint);

export default {
  getProductos,
};
