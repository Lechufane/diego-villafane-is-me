import React, { useRef, useState } from "react";
import classes from "./Contact.module.css";
import MapChart from "../Map/Map";
import emailjs from "@emailjs/browser";
import SubmitButton from "../ui/SubmitButton";
import ScrollToTopButton from "../ui/ScrollToUpButton";

type NullableBoolean = boolean | null;

const Contact: React.FC = () => {
  const form = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
            setName("");
            setEmail("");
            setMessage("");
            setTimeout(() => {
              setSuccess(null);
            }, 3000);
            console.log(result.text);
          },
          (error) => {
            setSuccess(false);
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
            ref={form}
            onSubmit={handleSubmit}
            action='submit'
            method='post'
            className={classes.contactForm}>
            <h2 className={classes.title}>Contact me!</h2>
            <input
              type="text"
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder='Write your message'
              cols={30}
              rows={10}
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <SubmitButton>Send</SubmitButton>
          </form>
          {success === true && (
            <div className={classes.success}>
              The message was sent, the future awaits!
            </div>
          )}
          {success === false && (
            <div className={classes.error}>Sorry, the message couldn't be sent.</div>
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
