/* Este cliente es el de haztupedido/modulo
 */
import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://haztupedido.co/modulo/api",
});

export default apiClient;
