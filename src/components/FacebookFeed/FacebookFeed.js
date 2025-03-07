// components/FacebookFeed.js
"use client"
import { useEffect } from "react";
import styles from "./FacebookFeed.module.scss";

export default function FacebookFeed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className={styles.facebookFeed}>
      <h2>Stay Connected</h2>
      <p>Follow us on Facebook for the latest updates and promotions.</p>
      <div className="elfsight-app-b3d77a56-b88a-41f6-8acc-404c26e5459e" data-elfsight-app-lazy></div>
    </section>
  );
}