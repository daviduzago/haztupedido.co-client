import { setLocale } from "yup";

const setLocaleES = () =>
  setLocale({
    string: {
      min: "Debe tener minimo ${min} caracteres",
      max: "Puede tener maximo ${max} caracteres",
    },
  });

export default setLocaleES;
