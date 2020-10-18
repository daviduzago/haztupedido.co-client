import client from "./client";

const endpoint = "/productoProm";

const getPromociones = () => client.get(endpoint);

export default {
  getPromociones,
};
