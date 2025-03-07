// components/BusinessHours.js
import styles from "./BusinessHours.module.scss";


export default function BusinessHours() {
    return (
      <section id="business-hours" className={styles.businessHoursSection}>
        <div className={styles.businessHoursContainer}>
            <div className="titleContainer">
                <h2>Our Business Hours</h2>
                <p>See the numbers that define our success.</p>
            </div>
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
          <div className="elfsight-app-4268f331-2a63-4cba-927e-e63ffc1219c7" data-elfsight-app-lazy></div>
        </div>
      </section>
    );
  }