import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name,
        email,
        message,
      }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            title="map"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56677.44872097213!2d-55.96571562666527!3d-27.396303348434195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457be7f080496c3%3A0xccbff374623e7b9a!2sPosadas%2C%20Misiones!5e0!3m2!1ses!2sar!4v1687192249000!5m2!1ses!2sar"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1">
                Posadas <br />
                Misiones
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 flex justify-end">
              <div className="max-w-xs bg-gray-900 rounded shadow-md py-6 px-4">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  CORREO ELECTRÓNICO
                </h2>
                <a
                  href="mailto:francobogadoda@gmail.com"
                  className="text-indigo-400 leading-relaxed"
                >
                  francobogadoda@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  NÚMERO DE TELÉFONO
                </h2>
                <p className="leading-relaxed">
                  <a href="tel:+5493764847742">+54 9 3764847742</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            ¡Contáctame!
          </h2>
          <p className="leading-relaxed mb-5">Puedes dejarme un mensaje</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
