// components/Navbar.js
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAlignJustify, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      let currentSection = "home";
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection = entry.target.id;
        }
      });
      setActiveSection(currentSection);
    }, observerOptions);

    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section.id) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <FaAlignJustify />
        </button>
        <Link href="/" className={styles.logo}>
          <Image src="/Bevgo_Secondary_Logo.svg" alt="Bevgo Logo" width={150} height={50} priority />
        </Link>
        <ul className={styles.navLinks}>
          <li className={activeSection === "home" && pathname === "/" ? styles.active : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={activeSection === "about" || pathname === "/about" ? styles.active : ""}>
            <Link href="#about">About</Link>
          </li>
          <li className={activeSection === "business-hours" || pathname === "/business-hours" ? styles.active : ""}>
            <Link href="#business-hours">Business Hours</Link>
          </li>
          <li className={activeSection === "services" || pathname === "/services" ? styles.active : ""}>
            <Link href="#services">Services</Link>
          </li>
          <li className={activeSection === "contact" || pathname === "/contact" ? styles.active : ""}>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <Link href="https://pricing.bevgo.co.za" className="primaryButton">
          Pricing
        </Link>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={() => setMenuOpen(false)}></div>
      )}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
        <div className={styles.mobileMenuHeader}>
          <Image src="/Bevgo_Secondary_Logo.svg" alt="Bevgo Logo" width={120} height={40} priority />
          <button onClick={() => setMenuOpen(false)} className={styles.closeButton}>✕</button>
        </div>
        <ul className={styles.mobileNavLinks}>
          <li className={activeSection === "home" && pathname === "/" ? styles.active : ""}>
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className={activeSection === "about" || pathname === "/about" ? styles.active : ""}>
            <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li className={activeSection === "business-hours" || pathname === "/business-hours" ? styles.active : ""}>
            <Link href="#business-hours" onClick={() => setMenuOpen(false)}>Business Hours</Link>
          </li>
          <li className={activeSection === "services" || pathname === "/services" ? styles.active : ""}>
            <Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link>
          </li>
          <li className={activeSection === "contact" || pathname === "/contact" ? styles.active : ""}>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
          <Link href="https://pricing.bevgo.co.za" className="primaryButton">
            Pricing
          </Link>
        </ul>
        <div className={styles.mobileMenuFooter}>
          <p>Follow us</p>
          <div className={styles.socialIcons}>
            <Link href="https://www.facebook.com/profile.php?id=61570598552231" target="_blank"><FaFacebook /></Link>
            <Link href="https://www.instagram.com/bevgo_sa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><FaInstagram /></Link>
            {/* <Link href="https://twitter.com" target="_blank"><FaTwitter /></Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}