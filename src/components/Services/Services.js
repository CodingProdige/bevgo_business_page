// components/Services.js
import styles from "./Services.module.scss";

export default function Services() {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <ul>
        <li>Wholesale Beverage Distribution</li>
        <li>Flexible Delivery Schedules</li>
        <li>Premium Customer Support</li>
      </ul>
    </section>
  );
}