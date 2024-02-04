import React, { useEffect, useRef, useState } from "react";
import classes from "./Contact.module.css";
import MapChart from "../Map/Map";
import emailjs from "@emailjs/browser";
import SubmitButton from "../ui/SubmitButton";
import { inputs, validator } from "@/services/constants/contactForm";
import useForm from "@/hooks/useForm";
import logger from "@/utils/logger";

type NullableBoolean = boolean | null;

interface Form {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const INITIAL_FORM: Form = {
    name: "",
    email: "",
    message: "",
  };

  const INITIAL_ERRORS: FormErrors = {
    name: "",
    email: "",
    message: "",
  };

  const [success, setSuccess] = useState<NullableBoolean>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { formBuilder, form, errors, setForm } = useForm(
    INITIAL_FORM,
    validator,
    INITIAL_ERRORS
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      if (formRef.current) {
        const response = await emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID, //service id
            process.env.NEXT_PUBLIC_TEMPLATE_ID, //template id
            formRef.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY //public key
          )
          .then(() => {
            setSuccess(true);
            setLoading(false);
            formRef.current?.reset();
            setForm(INITIAL_FORM);
            setTimeout(() => {
              setSuccess(null);
            }, 3000);
          });
      }
    } catch (error) {
      setSuccess(false);
      setLoading(false);
      logger.error(error);
    }
  };

  const handleDisabled = () => {
    //check if input is empty
    if (form.name === "" || form.email === "" || form.message === "") {
      return true;
    }
    //check if there are errors
    if (errors.name !== "" || errors.email !== "" || errors.message !== "") {
      return true;
    }
    //check if the form is loading
    if (loading) {
      return true;
    }
    return false;
  };

  return (
    <section id="#Contact" className={classes.contactSection}>
      <article className={classes.contactContainer}>
        <div className={classes.left}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            action="submit"
            method="post"
            className={classes.contactForm}
          >
            <h2 className={classes.title}>Contact me!</h2>
            {formBuilder(inputs)}
            <SubmitButton disabled={handleDisabled()} loading={loading}>
              Send
            </SubmitButton>
          </form>
          {success && (
            <div className="text-emerald-600">
              {"The message was sent, the future awaits!"}
            </div>
          )}
          {success == false && (
            <div className="text-red-600">
              {"Sorry, the message couldn't be sent."}
            </div>
          )}
        </div>
        <div className={classes.right}>
          <MapChart />
        </div>
      </article>
    </section>
  );
};

export default Contact;
