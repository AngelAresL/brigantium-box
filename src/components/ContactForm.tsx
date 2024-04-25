"use client";
import { FormEvent, useState } from "react";
import ComponentLogo from "./ComponentLogo";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Mensaje enviado correctamente");
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Contáctanos!</h1>
        <form onSubmit={sendMail} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label
              htmlFor="surname"
              className="block text-gray-700 font-medium"
            >
              Apellidos
            </label>
            <input
              type="text"
              name="surname"
              id="surname"
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg h-24"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gray-800 text-white font-medium p-2 rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Enviar
          </button>
        </form>
      </div>
      <aside className="m-20 text-center">
        <div className="address m-6">
          <ComponentLogo
            url="https://maps.app.goo.gl/P9KDoJK2iZimi7tR6"
            src="/location-logo.svg"
            alt="Location"
            size={36}
            className="m-4 rounded-md transition duration-150 ease-in-out transform hover:scale-125"
          />
          <h3>Dirección</h3>
          <p>C/ Que flipas, 123, 15002, A Coruña, España</p>
        </div>
        <div className="phone m-6">
          <ComponentLogo
            url="tel:666666666"
            src="/phone-logo.svg"
            alt="Phone"
            size={36}
            className="m-4 rounded-md transition duration-150 ease-in-out transform hover:scale-125"
          />
          <h3>Teléfono</h3>
          <p>666 66 66 66</p>
        </div>
        <div className="mail m-6">
          <ComponentLogo
            url="mailto:brigantium@brigantium.com"
            src="/mail-logo.svg"
            alt="Mail"
            size={36}
            className="m-4 rounded-md transition duration-150 ease-in-out transform hover:scale-125"
          />

          <h3>Email</h3>
          <p>brigantium@brigantium.com</p>
        </div>
      </aside>
    </div>
  );
};
export default ContactForm;
