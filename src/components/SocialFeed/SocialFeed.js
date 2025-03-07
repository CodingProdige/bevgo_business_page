// components/SocialFeed.js
"use client"
import { useEffect } from "react";
import styles from "./SocialFeed.module.scss";

export default function SocialFeed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className={styles.socialFeed}>
      <div className="titleContainer">
        <h2>Our Social Feed</h2>
        <p>Stay updated with our latest social media posts.</p>
      </div>
      <div className="elfsight-app-31666a81-228d-400d-bfef-a2d790a17feb" data-elfsight-app-lazy></div>
    </section>
  );
}