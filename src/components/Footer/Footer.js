// components/Footer.js
import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerSection}>
          <h3>About Bevgo</h3>
          <p>Bevgo is your trusted beverage distribution partner, ensuring fast and reliable supply to businesses across South Africa.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Main Menu</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#business-hours">Business Hours</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact</h3>
          <ul className={styles.contactDetails}>
            <li><strong>Email:</strong> info@bevgo.co.za</li>
            <li><strong>Phone:</strong> +27 71 619 1616</li>
            <li><strong>Address:</strong> 6 Christelle Str. Denneburg, Paarl, South Africa</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Bevgo. All rights reserved.</p>
      </div>
    </footer>
  );
}