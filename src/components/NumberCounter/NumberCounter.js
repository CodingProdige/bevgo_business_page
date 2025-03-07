// components/NumberCounter.js
"use client"
import { useEffect } from "react";
import styles from "./NumberCounter.module.scss";

export default function NumberCounter() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className={styles.numberCounter}>
      <div className="titleContainer">
        <h2>Our Achievements</h2>
        <p>See the numbers that define our success.</p>
      </div>
      <div className="elfsight-app-7239bae8-df45-432d-888e-eda0bead6e62" data-elfsight-app-lazy></div>
    </section>
  );
}