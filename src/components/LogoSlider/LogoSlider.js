// components/LogoSlider.js
"use client"
import { useEffect } from "react";
import styles from "./LogoSlider.module.scss";

export default function LogoSlider() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className={styles.logoSlider}>
      <h2>Our Trusted Partners</h2>
      <p>We collaborate with top brands to bring you the best.</p>
      <div className="elfsight-app-21787529-6a8e-4189-b8a2-4f1d8b2b4035" data-elfsight-app-lazy></div>
    </section>
  );
}