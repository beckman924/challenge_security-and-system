import About from "@components/About/About";
import Contact from "@components/Contact/Contact";
import Interests from "@components/Interests/Interests";
import Main from "@components/Main/Main";
import styles from "./styles.module.css";

export default function MainWrapper() {
  return (
    <main className={styles.main}>
      <Main>
        <section data-color="#393e41">
          <About />
        </section>
        <section data-color="#587B7F">
          <Interests />
        </section>
        <section data-color="#1E2019">
          <Contact />
        </section>
      </Main>
    </main>
  );
}
