import client from "./client2";

const endpoint = "/usuarioCompra";

export const addUserInfo = (user, location) => {
  const data = new FormData();
  data.append("nombre", user.nombre);
  data.append("apellido", user.apellido);
  data.append("direccion", user.direccion);
  data.append("descripcion_direccion", user.direccionDescrip);
  data.append("numero_celular", user.numeroCelular);
  data.append("correo", user.email);

  if (location) data.append("localizacion", JSON.stringify(location));

  return client.post(endpoint, data);
};

export default {
  addUserInfo,
};
