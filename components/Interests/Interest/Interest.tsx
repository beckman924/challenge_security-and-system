import Image from "next/image";
import styles from "./styles.module.css";

interface InterestProps {
  name: string;
  icon: string;
}
export default function Interest({ name, icon }: InterestProps) {
  return (
    <div className={styles.item}>
      <h3 className={styles.item__title}>{name}</h3>
      <Image
        src={`/${icon}.png`}
        alt="Controller"
        width={100}
        height={100}
      />
    </div>
  );
}
