import client2 from "./client2";

const endpoint = "/productoProm";

const getPromociones = () => client2.get(endpoint);

export default {
  getPromociones,
};
