import client from "./client";

const endpoint = "/client";

export const addUserInfo = (user) => {
  const data = new FormData();
  data.append("nombre", user.nombre);
  data.append("apellido", user.apellido);
  data.append("direccion", user.direccion);
  data.append("descripcion_direccion", user.direccionDescrip);
  data.append("numero_celular", user.numeroCelular);
  data.append("correo", user.email);

  return client.post(endpoint, data);
};

export default {
  addUserInfo,
};
