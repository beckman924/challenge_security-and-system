"use client";

import { useEffect, useRef } from "react";

import styles from "./styles.module.css";
import Interest from "./Interest/Interest";
import { INTERESTS } from "./interestsData";

export default function Interests(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = document.querySelectorAll(`.${styles.itemList} > div`);
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add(styles.fadeIn);
            }, index * 450);
          });
        }
      });
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <h2>Intereses</h2>

      <div className={styles.content}>
        <div className={styles.itemList}>
          {INTERESTS.map((interest) => (
            <Interest
              key={interest.id}
              name={interest.name}
              icon={interest.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
