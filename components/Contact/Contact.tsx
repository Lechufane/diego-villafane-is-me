import React, { useRef, useState } from "react";
import classes from "./Contact.module.css";
import MapChart from "../Map/Map";
import emailjs from "@emailjs/browser";
import SubmitButton from "../ui/SubmitButton";
import ScrollToTopButton from "../ui/ScrollToUpButton";

type NullableBoolean = boolean | null;

const Contact: React.FC = () => {
  const form = useRef(null);

  const [success, setSuccess] = useState<NullableBoolean>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_2gzteos",
          "template_gqxf38p",
          form.current,
          "-gbYQsi7djBUFOZ2_"
        )
        .then(
          (result) => {
            setSuccess(true);
            console.log(result.text);
          },
          (error) => {
            setSuccess(false);
            console.error(error.text);
          }
        );
    }
  };

  return (
    <section id="#Contact" className={classes.contactSection}>
      <article className={classes.contactContainer}>
        <div className={classes.left}>
          <form
            ref={form}
            onSubmit={handleSubmit}
            action='submit'
            method='post'
            className={classes.contactForm}>
            <h2 className={classes.title}>Contact me!</h2>
            <input placeholder='Name' name='name' />
            <input placeholder='Email' name='email' />
            <textarea
              placeholder='Write your message'
              cols={30}
              rows={10}
              name='message'></textarea>
            <SubmitButton>Send</SubmitButton>
            {success ? "The message was sent, the future awaits!" : null}
          </form>
        </div>
        <div className={classes.right}>
          <MapChart />
        </div>
      </article>
    </section>
  );
};

export default Contact;
