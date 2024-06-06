"use client";
import { FormEvent, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import ComponentLogo from "./ComponentLogo";
import ScrollAnimation from "./ScrollAnimation";

interface ContactFormProps {
  contactMessage: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ contactMessage }) => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(contactMessage);

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    setMessage(contactMessage);
  }, [contactMessage]);

  const sendMail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      name,
      surName,
      email,
      message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSending(false);
        setIsSent(true);
        setIsMessageVisible(true);
        setTimeout(() => {
          setIsMessageVisible(false);
        }, 5000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setIsSending(false);
      });
  };

  return (
    <div className=" relative isolate bg-[url('/contact.jpg')]  bg-cover bg-no-repeat bg-center">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-16 pt-28 lg:static lg:px-8 ">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <ScrollAnimation
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-100">
                Contáctanos!
              </h2>
            </ScrollAnimation>
            <ScrollAnimation
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mt-6 text-md text-justify  text-gray-200">
                En Brigantium Box, nos encanta interactuar contigo. Ya sea que
                tengas preguntas sobre nuestros entrenamientos, curiosidad por
                nuestras instalaciones, o cualquier otra inquietud, estamos aquí
                para ayudarte.
              </p>
            </ScrollAnimation>

            <div className="mt-8 space-y-2 text-base  text-gray-200">
              <ScrollAnimation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="flex gap-x-2">
                  <div className="flex-none">
                    <ComponentLogo
                      href="https://maps.app.goo.gl/P9KDoJK2iZimi7tR6"
                      src="/location-logo.svg"
                      target="_blank"
                      alt="Location"
                      size={24}
                      classNameA="flex justify-center items-center"
                      classNameImg="rounded-md transition duration-150 ease-in-out transform hover:scale-125"
                    />
                  </div>
                  <div
                    className="text-md text-justify  text-gray-200 "
                    id="contact-mobile"
                  >
                    <h3 className="font-semibold">Dirección</h3>
                    <p className="text-sm">{process.env.NEXT_PUBLIC_ADDRESS}</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="flex gap-x-2">
                  <div className="flex-none">
                    <ComponentLogo
                      href={`tel:${process.env.NEXT_PUBLIC_TEL}`}
                      src="/phone-logo.svg"
                      alt="Phone"
                      size={24}
                      classNameA="flex justify-center items-center"
                      classNameImg="rounded-md transition duration-150 ease-in-out transform hover:scale-125"
                    />
                  </div>
                  <div className="text-md text-justify  text-gray-200">
                    <h3 className="font-semibold">Teléfono</h3>
                    <p className="text-sm">{process.env.NEXT_PUBLIC_TEL}</p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="flex gap-x-2">
                  <div className="flex-none">
                    <ComponentLogo
                      href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                      src="/mail-logo.svg"
                      alt="Mail"
                      size={24}
                      classNameA="flex justify-center items-center"
                      classNameImg="rounded-md transition duration-150 ease-in-out transform hover:scale-125 "
                    />
                  </div>
                  <div className="text-md text-justify  text-gray-200">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm">{process.env.NEXT_PUBLIC_EMAIL}</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <form
          onSubmit={sendMail}
          className="px-6 pb-14 pt-2 lg:pt-28 sm:pb-32 lg:px-8"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg w-full  bg-white p-6 rounded-lg shadow-lg relative ">
            <div className="flex flex-col space-y-4">
              <ScrollAnimation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block  text-gray-800 text-sm font-semibold "
                  >
                    Nombre
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400  focus:ring-inset focus:ring-indigo-600 "
                    />
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <label
                    htmlFor="surname"
                    className="block text-sm font-semibold  text-gray-800"
                  >
                    Apellidos
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="surname"
                      id="surname"
                      value={surName}
                      onChange={(e) => setSurName(e.target.value)}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold  text-gray-800"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold  text-gray-800"
                  >
                    Mensaje
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="block w-full h-24 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400  focus:ring-inset focus:ring-blue-400 sm:text-sm "
                      defaultValue={""}
                      required
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <ScrollAnimation
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="mt-8 flex flex-col items-center">
                <button
                  type="submit"
                  className="w-1/3 rounded-md bg-slate-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 bg-opacity-90"
                  disabled={isSending}
                >
                  {isSending ? "Enviando..." : "Enviar"}
                </button>
                <div className="h-6 mt-4">
                  {isMessageVisible && (
                    <p className="text-blue-300 text-center">
                      Mensaje enviado correctamente!
                    </p>
                  )}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
