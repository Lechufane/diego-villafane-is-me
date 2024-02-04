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
  const formRef = useRef(null);

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

  useEffect(() => {
    logger.debug("form", form);
    logger.debug("errors", errors);
  }, [form, errors]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_2gzteos",
          "template_gqxf38p",
          form,
          "-gbYQsi7djBUFOZ2_"
        )
        .then(
          (result) => {
            setSuccess(true);
            setForm(INITIAL_FORM);
            setTimeout(() => {
              setSuccess(null);
            }, 3000);
          },
          (error) => {
            setSuccess(false);
            setForm(INITIAL_FORM);
            console.error(error.text);
            setTimeout(() => {
              setSuccess(null);
            }, 3000);
          }
        );
    }
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
            <SubmitButton disabled={!form.name || !form.email || !form.message}>
              Send
            </SubmitButton>
          </form>
          {success && (
            <div className="text-emerald-600">
              {"The message was sent, the future awaits!"}
            </div>
          )}
          {!success && (
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
