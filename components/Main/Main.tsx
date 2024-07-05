"use client";

import { useEffect, useRef, ReactNode } from "react";

import styles from "./styles.module.css";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const sectionsRefs = useRef<HTMLDivElement[]>([]);

  const scrollTo = (index: number) => {
    if (!sectionsRefs.current[index]) return;
    sectionsRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const container = containerRef.current;
    const scrollIndicator = scrollIndicatorRef.current;
    if (!container || !scrollIndicator) return;

    const sections = sectionsRefs.current.map((ref, index) => ({
      ref,
      buttonIndex: index,
    }));

    const updateActiveButton = (index: number) => {
      const buttons = scrollIndicator.querySelectorAll("button");
      buttons.forEach((button, i) => {
        if (i === index) {
          button.classList.add(styles.scrollIndicator__buttonActive);
        } else {
          button.classList.remove(styles.scrollIndicator__buttonActive);
        }
      });
    };

    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor =
            entry.target.getAttribute("data-color") || "";
          sections.forEach((section, index) => {
            if (section.ref === entry.target) {
              updateActiveButton(index);
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section.ref) {
        observer.observe(section.ref);
      }
    });

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      container.scrollBy({ top: event.deltaY, behavior: "smooth" });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.main}>
      <div ref={scrollIndicatorRef} className={styles.scrollIndicator}>
        {sectionsRefs.current.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={styles.scrollIndicator__button}
          ></button>
        ))}
      </div>
      {children}
    </div>
  );
}
