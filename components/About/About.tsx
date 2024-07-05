import styles from "./styles.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h2>Sobre mí</h2>

      <div className={styles.content}>
        <span className={styles.description}>
          <span className={styles.section}>
            <p>
              💻 Desarrollador Front-end Enfocado en Desafíos Tecnológicos 💡
            </p>
            <p>
              Soy un apasionado programador web Full Stack con un enfoque
              especializado en el desarrollo Front-end. Siempre ansío nuevos
              desafíos y me esfuerzo constantemente por mejorar mis habilidades
              de manera autodidacta.
            </p>
          </span>

          <span className={styles.section}>
            <h3>🚀 Lo Que Ofrezco:</h3>

            <ul>
              <li>Desarrollo eficiente en ECMAScript 6, React, y Next.js.</li>

              <li>
                Experiencia sólida en la gestión del estado con Redux y en la
                creación de aplicaciones escalables.
              </li>

              <li>
                Conocimientos profundos en Node.js y Express.js para el
                desarrollo del lado del servidor.
              </li>

              <li>
                Dominio en bases de datos PostgreSQL y MySQL, utilizando
                Sequelize para una gestión efectiva.
              </li>

              <li>
                Maestría en HTML y CSS para crear experiencias web impactantes y
                atractivas.
              </li>

              <li>
                Familiaridad con algoritmos y estructuras de datos para
                optimizar el rendimiento del código.
              </li>

              <li>
                Colaboración efectiva en entornos SCRUM, siendo líder y
                brindando apoyo constante al equipo.
              </li>

              <li>
                Destreza en el uso de GIT para una gestión de código fluida.
              </li>
            </ul>
          </span>

          <span className={styles.section}>
            <h3>🔧 Tecnologías que Manejo:</h3>
            <p>
              ECMAScript 6 | React | Next.js | Redux | Node.js | Express.js |
              PostgreSQL | MySQL | Sequelize | HTML | CSS | Algoritmos |
              Estructuras de Datos | SCRUM | GIT | SASS | React Native
            </p>
          </span>

          <span className={styles.section}>
            <h3>💬 Contacto:</h3>
            <a href="mailto:braiancarabajal@gmail" target="_blank">
              📧 Email: braiancarabajal@gmail.com
            </a>
            <a href="https://github.com/beckman924" target="_blank">
              💻 Github: github.com/beckman924
            </a>
            <a href="https://beckmandev.vercel.app" target="_blank">
              🌐 Portfolio: beckmandev.vercel.app
            </a>
          </span>

          <p>
            ¡Estoy emocionado por nuevas oportunidades y desafíos! ¡Contáctame
            para explorar cómo puedo aportar a tu equipo! 🚀👨‍💻
          </p>
        </span>
      </div>
    </div>
  );
}
