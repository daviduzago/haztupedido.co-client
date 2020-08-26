import client from "./client";

const endpoint = "/category";

const getCategorias = () => client.get(endpoint);

export default {
  getCategorias,
};
