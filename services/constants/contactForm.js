export const inputs = [
  {
    id: 1,
    type: "text",
    name: "name",
    value: "",
    placeholder: "Name",
    maxLength: 20,
    className: "m-4 p-[20px] border-none radius-sm text-[18px] w-full",
  },
  {
    id: 2,
    type: "email",
    name: "email",
    value: "",
    placeholder: "Email",
    maxLength: 40,
    className: "m-4 p-[20px] border-none radius-sm text-[18px] w-full",
  },
  {
    id: 3,
    type: "textarea",
    name: "message",
    value: "",
    placeholder: "Write your message",
    maxLength: 200,
    className: "m-4 p-[20px] border-none radius-sm text-[18px] w-full",
  },
];

export const validator = (field, value) => {
  if (!value) return "Este campo es obligatorio";

  // const parsedValue = parseInt(value);
  const properFormats = {
    //test if value has only letters, allow spaces and accents. It must be at least 7 characters long
    name:
      /^[a-zA-ZÀ-ÿ\s]{3,40}$/g.test(value) || //test if value has only letters, allow spaces and accents and it's not longer than 40 characters
      "Este campo es inválido",
    email:
      //test if there is an @ symbol and a dot after it with at least 2 characters. there MUST be at least 1 character before the @ symbol
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/g.test(value) || "Este campo es inválido",
    message:
      //test if value it's not longer than 200 characters
      value.length < 200 || "Este campo es inválido",
  };
  if (properFormats[field] === true) return "";
  else return properFormats[field] ?? "";
};
