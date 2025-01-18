import React, { useState } from "react";
import Window from "./Window";
import Button from "./Button";

export default function Form() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function send(event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    if (!email.trim()) {
      alert("Por favor, ingresa tu correo electrónico.");
      return;
    }

    if (!message.trim()) {
      alert("Por favor, escribe un mensaje.");
      return;
    }

    alert("Mensaje enviado :D");
    // Opcional: Puedes usar event.target.submit() aquí si necesitas enviar el formulario manualmente.
  }

  return (
    <Window width="85%" height="auto" colors={["black", "black"]}>
      <div className="w-full pt-[20px] pr-[100px] flex flex-col justify-center items-center form-container sm:pr-[10px]">
        <form
          action="https://formspree.io/f/xpwweeze"
          method="POST"
          className="w-[90%] flex flex-col gap-10 "
        >
          <input
            type="email"
            name="email"
            placeholder="Correo"
            className="h-[44px] focus:outline focus:shadow-[4px_4px_0_0_rgba(0,0,0)]  placeholder:text-white bg-pink border-[3px] border-black focus:outline-none text-white bubblegum-sans-regular"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del correo
          />

          <textarea
            name="message"
            id=""
            placeholder="Mensaje"
            className="placeholder:text-white h-[280px] bg-blue_light border-[3px] border-black focus:shadow-[4px_4px_0_0_rgba(0,0,0)] focus:outline-none text-white bubblegum-sans-regular"
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Actualiza el estado del mensaje
          ></textarea>

          <div className="w-full mt-8 mb-4 flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-none text-black border-[3px] border-black focus:shadow-[4px_4px_0_0_rgba(0,0,0)] focus:outline-none bubblegum-sans-regular"
              onClick={send}
            >
              Enviar
              <ion-icon name="send" style={{ fontSize: "36px" }}></ion-icon>
            </button>
          </div>
        </form>
      </div>
    </Window>
  );
}
