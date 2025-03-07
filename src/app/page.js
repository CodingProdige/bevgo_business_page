// app/page.js
import styles from "@/app/page.module.css"
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Contact from "@/components/Contact/Contact";
import FacebookFeed from "@/components/FacebookFeed/FacebookFeed";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import LogoSlider from "@/components/LogoSlider/LogoSlider";
import WhatsAppChat from "@/components/WhatsAppChat/WhatsAppChat";
import SocialFeed from "@/components/SocialFeed/SocialFeed";
import NumberCounter from "@/components/NumberCounter/NumberCounter";
import OpenWidget from "@/components/OpenWidget/OpenWidget";
import BusinessHours from "@/components/BusinessHours/BusinessHours";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <NumberCounter />
      <LogoSlider />
      <About />
      <BusinessHours />
      <Services />
      {/* <FacebookFeed /> */}
      <SocialFeed />
      <WhatsAppChat />
      <GoogleReviews />
      <OpenWidget /> {/** Google Review Embed from openwidget.com */}
      <Contact />
    </div>
  );
}
