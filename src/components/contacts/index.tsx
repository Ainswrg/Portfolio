import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import styles, { contacts } from '../../style';

enum EmailID {
  SERVICE_ID = 'service_9g3sj8i',
  TEMPLATE_ID = 'template_4snly7i',
  PUBLIC_KEY = 'xBKY28TDUzcHHJe0X',
}

export const Contacts: React.FC = () => {
  const form = useRef<any>();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      EmailID.SERVICE_ID,
      EmailID.TEMPLATE_ID,
      form.current,
      EmailID.PUBLIC_KEY,
    );
    const currTarget = e.target as HTMLFormElement;

    currTarget.reset();
  };

  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div
        className={`${styles.container} gap-10 grid grid-cols-[1fr] sm:w-[58%] lg:grid-cols-[30%_58%] lg:gap-[12%]`}
      >
        <div className="flex flex-col gap-5">
          <article className={`${contacts.option}`}>
            <MdOutlineEmail className={`${contacts.icon}`} />
            <h4>Email</h4>
            <h5>jaslan.daulenov@gmail.com</h5>
            <a
              className={`${contacts.link}`}
              href="mailto:jaslan.daulenov@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className={`${contacts.option}`}>
            <FaTelegramPlane className={`${contacts.icon}`} />
            <h4>Telegram</h4>
            <h5>jas1anD</h5>
            <a
              className={`${contacts.link}`}
              href="https://t.me/jas1anD"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className={`${contacts.option}`}>
            <BsWhatsapp className={`${contacts.icon}`} />
            <h4>WhatsApp</h4>
            <h5>+79328634812</h5>
            <a
              className={`${contacts.link}`}
              href="https://api.whatsapp.com/send?phone=89328634812"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className={`${contacts.input}`}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={`${contacts.input}`}
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your message"
            required
            className={`${contacts.input}`}
          />
          <button
            type="submit"
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
