import styles from "./About.module.scss"

// components/About.js
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className="titleContainer">
          <h2>About Us</h2>
          <p>Your Trusted Partner in Beverage Distribution</p>
        </div>
        <p>
          Bevgo started with a simple idea: to revolutionize the beverage distribution industry
          by making it faster, more efficient, and tailored to the needs of businesses. We saw
          the frustration that many restaurants, hotels, and retail businesses faced when trying
          to get reliable, timely beverage supplies, and we knew there had to be a better way.
        </p>
        <br/>
        <p>
          What began as a small operation has grown into a trusted distribution network. Our commitment
          to speed, quality, and customer satisfaction drives everything we do. We don\&apos;t just deliver
          drinks; we build relationships with our clients, ensuring they have exactly what they need,
          when they need it. With our fleet, advanced logistics, and dedication to service, we help
          businesses stay stocked and ready to serve their customers.
        </p>
        <br/>
        <p>
          Bevgo is more than a distributor, we\&apos;re a partner in your success. Whether you run a
          small café or a large hospitality chain, we\&apos;re here to ensure your beverage supply never
          slows you down. Join us and experience the future of beverage distribution.
        </p>
      </div>
    </section>
  );
}