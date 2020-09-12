import client from "./client";

const endpoint = "/product";

const getProductos = () => client.get(endpoint);

export default {
  getProductos,
};
