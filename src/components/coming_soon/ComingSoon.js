'use client';

import Image from 'next/image';
import styles from './ComingSoon.module.scss';

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <Image
        src="/Bevgo_Secondary_Logo.svg" // Replace with your actual logo
        alt="Bevgo Logo"
        width={300}
        height={150}
        className={styles.logo}
      />
      <h1 className={styles.title}>New Business Page Incomming!</h1>
      <p className={styles.subtitle}>Exciting updates are on the way! We are currently working on our business page to better serve our customers.</p>
      <p className={styles.description}>Our online store has been removed due to a conflict of interest, but we are still fully operational and ready to serve our valued clients. You can still browse our updated pricing and find our contact details via the link below.</p>
      <a
        href="https://pricing.bevgo.co.za"
        className={styles.button}
        target='_blank'
      >
        View Price List & Contact Us
      </a>
    </div>
  );
}
