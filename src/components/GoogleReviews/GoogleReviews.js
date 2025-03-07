// components/GoogleReviews.js
"use client"
import { useEffect } from "react";
import styles from "./GoogleReviews.module.scss";

export default function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className={styles.googleReviews}>
      <div className="elfsight-app-bf83ecc8-3c77-43c4-bd09-e1fe276ad68e" data-elfsight-app-lazy></div>
    </section>
  );
}