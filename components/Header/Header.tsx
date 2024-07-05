import Image from "next/image";

import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.username}>Braian Carabajal</h1>

      <Image
        src="/Braian.webp"
        alt="Imagen de perfil"
        className={styles.profileImage}
        width={50}
        height={50}
      />
    </header>
  );
}
