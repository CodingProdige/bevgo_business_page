// components/WhatsAppChat.js
"use client"
import { useEffect } from "react";
import styles from "./WhatsAppChat.module.scss";

export default function WhatsAppChat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className={styles.whatsappChat}>
      <div className="elfsight-app-88fac95a-a48b-48c4-8633-f49419d697f4" data-elfsight-app-lazy></div>
    </section>
  );
}