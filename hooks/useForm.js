import { useState } from "react";
import Input from "../components/Inputs";

/**
 * Contains all the logic related to a generic form. It includes form state,
 * functions to update it and a simple form JSX builder.
 * @param {object} initialForm - Object containing the initial form state data.
 * @param {function} validator - Function to validate the form fields. Receives form name and value
 * and must return an error message or an empty string.
 * @returns {object} form - Object containing the form state data.
 * @returns {function} setForm - Function to update the form state data.
 * @returns {function} handleChange - Function to handle the form state data.
 * @returns {function} formBuilder - Function to build the form.
 */

const useForm = (
  initialForm = {},
  validator = () => {},
  initialErrors = {}
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));

    const errorMessage = validator(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage || "" }));
  };

  const formBuilder = (formFields = []) => {
    return formFields.map((input) => {
      switch (input.type) {
        case "textarea":
          return (
            <div>
              <textarea
                key={input.id}
                placeholder={input.placeholder}
                className={input.className}
                value={form[input.value]}
                name={input.name}
                maxLength={input.maxLength}
                onChange={handleChange}
              />
              <p className="text-red-600">{errors[input.name]}</p>
            </div>
          );
        default:
          return (
            <Input
              key={input.id}
              placeholder={input.placeholder}
              className={input.className}
              value={form[input.value]}
              name={input.name}
              type={input.type}
              maxLength={input.maxLength}
              handleChange={handleChange}
              errorMessage={errors[input.name]}
            />
          );
      }
    });
  };

  return { form, setForm, handleChange, formBuilder, errors };
};

export default useForm;
