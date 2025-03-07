// components/Contact.js
"use client"
import { useEffect } from "react";
import styles from "./Contact.module.scss";
import { FaPhone  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      <div className="titleContainer">
        <h2>Contact Details</h2>
        <p>Have a question or inquiry? Reach out to us.</p>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactDetails}>
          <div className="titleContainer">
            <h2>Contact Details</h2>
            <p>Have a question or inquiry? Reach out to us.</p>
          </div>
          <ul>
            <li><MdEmail/> <strong>Email:</strong> info@bevgo.co.za</li>
            <li><FaPhone/> <strong>Phone:</strong> +27 71 619 1616</li>
            <li><IoLocationSharp/> <strong>Address:</strong> 6 Christelle Str. Denneburg, Paarl, South Africa</li>
          </ul>
        </div>
        <div className={styles.contactForm}>
          <div className="titleContainer">
            <h2>Send Quick Email</h2>
            <p>Send us an email right now!</p>
          </div>
          <div className="elfsight-app-2030526b-391f-43a1-8218-e55d9b541e38" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}