export const required = (value) => {
  if (!value) return "Este campo es obligatorio";
  return "";
};

export const maxlength = (length) => (value) => {
  if (value.length > length)
    return `Este campo no debe tener más de ${length} caracteres`;
  return "";
};

export const maxAmountFiles = (length) => (value) => {
  if (value.length > length) return `No podés cargar más de ${length} imágenes`;
  return "";
};

export const minAmountFiles = (length) => (value) => {
  if (value.length < length) return `Cargá al menos ${length} imagenes`;
  return "";
};

export const minlength = (length) => (value) => {
  if (value.length < length)
    return `Este campo no debe tener menos de ${length} caracteres`;
  return "";
};

export const isEmail = (value) => {
  // Regular expression for basic email validation.
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(value))
    return "Ingresá una dirección de correo electrónico válida";
  return "";
};

export const isNumber = (value) => {
  //Regular expression to validate that it only contains numbers and special characters.
  const numberRegex = /^[0-9\s()\-+]+$/;
  if (!numberRegex.test(value)) return "Ingresá solo números en este campo";
  return "";
};
