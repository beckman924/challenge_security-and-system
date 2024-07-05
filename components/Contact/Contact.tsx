"use client";

import { useState } from "react";

import styles from "./styles.module.css";

export default function Contact() {
  const [name, setName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setName(`${data["nombre"]}!`);
  };

  return (
    <div className={styles.container}>
      <h2>Contacto</h2>

      <div className={styles.content}>
        <span className={styles.description}>
          {name === "" ? (
            <>
              <p>
                Puedes ver mis trabajos en mi{" "}
                <a href="https://beckmandev.vercel.app/" target="_blank">
                  Portfolio
                </a>
              </p>
              <p>o contactame a través de este formulario!</p>
            </>
          ) : (
            <span className={styles.name}>
              <p>Mensaje enviado, gracias por contactarme,</p>
              <p>{name}</p>
            </span>
          )}
        </span>

        <div className={styles.content__background}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                autoComplete="name"
                className={styles.formInput}
              />
              <label htmlFor="nombre">Nombre:</label>
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className={styles.formInput}
              />
              <label htmlFor="email">Email:</label>
            </div>

            <div className={styles.formGroup}>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                className={styles.formInput}
                style={{ resize: "none" }}
                minLength={20}
                maxLength={500}
              ></textarea>
              <label htmlFor="mensaje">Mensaje:</label>
            </div>

            <button type="submit" className={styles.formButton}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
