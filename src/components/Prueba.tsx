return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen p-4 my-10">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg relative mx-4">
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
              required
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
              required
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
              required
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
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gray-800 text-white font-medium p-2 rounded-lg hover:bg-gray-600 transition duration-200"
            disabled={isSending}
          >
            {isSending ? "Enviando..." : "Enviar"}
          </button>
        </form>
        <div className="h-6 mt-4">
          {isMessageVisible && (
            <p className="text-green-500 text-center">
              Mensaje enviado correctamente!
            </p>
          )}
        </div>
      </div>
      <aside className="m-20 text-center">
        <div className="address m-6">
          <ComponentLogo
            href="https://maps.app.goo.gl/P9KDoJK2iZimi7tR6"
            src="/location-logo.svg"
            target="_blank"
            alt="Location"
            size={36}
            classNameA="flex justify-center items-center"
            classNameImg="m-4 rounded-md transition duration-150 ease-in-out transform hover:scale-125"
          />
          <h3>Dirección</h3>
          <p>{process.env.NEXT_PUBLIC_ADDRESS}</p>
        </div>
        <div className="phone m-6">
          <ComponentLogo
            href={`tel:${process.env.NEXT_PUBLIC_TEL}`}
            src="/phone-logo.svg"
            alt="Phone"
            size={36}
            classNameA="flex justify-center items-center"
            classNameImg="m-4 rounded-md transition duration-150 ease-in-out transform hover:scale-125"
          />
          <h3>Teléfono</h3>
          <p>{process.env.NEXT_PUBLIC_TEL}</p>
        </div>
        <div className="mail m-6">
          <ComponentLogo
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            src="/mail-logo.svg"
            alt="Mail"
            size={36}
            classNameA="flex justify-center items-center"
            classNameImg="m-4 rounded-md transition duration-150 ease-in-out transform hover:scale-125"
          />

          <h3>Email</h3>
          <p>{process.env.NEXT_PUBLIC_EMAIL}</p>
        </div>
      </aside>
    </div>
  );