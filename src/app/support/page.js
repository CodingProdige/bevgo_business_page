// app/support/page.js
import styles from './support.module.css';

export default function SupportPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Support – Bevgo Client Portal</h1>

      <p className={styles.paragraph}>
        Welcome to the support center for the Bevgo Client Portal. We’re committed to making your experience smooth and reliable. Whether you're placing orders, downloading invoices, or managing your account, we’re here to help.
      </p>

      <h2 className={styles.subheading}>📞 Need Immediate Help?</h2>
      <p className={styles.paragraph}>
        If you're facing a critical issue or urgent query, don’t hesitate to contact us directly:
      </p>
      <ul className={styles.list}>
        <li>Email: <a href="mailto:support@bevgo.co.za">support@bevgo.co.za</a></li>
        <li>Phone: +27 71 619 1616</li>
        <li>Operating Hours: Monday–Saturday, 9:00am–6:00pm (SAST)</li>
      </ul>

      <h2 className={styles.subheading}>🧾 Common Support Topics</h2>
      <ul className={styles.list}>
        <li><strong>Invoice Questions:</strong> Need help with payment terms, download links, or duplicate invoices? We're here to clarify.</li>
        <li><strong>Login Issues:</strong> Forgotten password or trouble logging in? Reach out and we’ll reset your account promptly.</li>
        <li><strong>Returns:</strong> Learn how to log returnables and track refund status inside the portal.</li>
        <li><strong>Placing Orders:</strong> A step-by-step guide is available to help you finalize orders and check delivery notes.</li>
      </ul>

      <h2 className={styles.subheading}>🗂 Additional Documentation</h2>
      <p className={styles.paragraph}>
        We're working on a public help center. In the meantime, our support team will send over any documentation you need on request. Whether it’s onboarding, invoicing, or returnable processes—we’ll provide what you need.
      </p>

      <h2 className={styles.subheading}>🧠 Tips to Avoid Issues</h2>
      <ul className={styles.list}>
        <li>Ensure your internet connection is stable when placing or finalizing orders.</li>
        <li>Keep your account details up-to-date to avoid delays with invoices or deliveries.</li>
        <li>Check the promotions section for updated rebate terms or delivery updates.</li>
      </ul>

      <p className={styles.paragraph}>
        Thanks for being part of the Bevgo community. Your success is our mission!
      </p>
    </main>
  );
}
