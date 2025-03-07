// components/Hero.js
"use client";

import styles from "./Hero.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { useEffect } from "react";

const slides = [
  { image: "/in_front_of_vehicle.png", title: "Fast & Reliable Delivery", text: "We ensure quick turnaround times for your beverage supply." },
  { image: "/coca_cola_truck.jpeg", title: "Premium Quality Products", text: "We partner with top brands to bring you the best beverages." },
  { image: "/vehicle_mockup.jpg", title: "Customer Satisfaction First", text: "Your business success is our priority." }
];

export default function Hero() {
  useEffect(() => {
    // Dynamically set styles for Swiper's next and prev buttons
    document.querySelectorAll(".swiper-button-next, .swiper-button-prev").forEach(button => {
      button.style.color = "white";
      button.style.backgroundColor = "rgba(0,0,0,0.5)";
      button.style.padding = "1rem";
      button.style.width = "3rem";
      button.style.height = "3rem";
      button.style.borderRadius = "50%";
      button.style.display = "flex";
      button.style.alignItems = "center";
      button.style.justifyContent = "center";
    });

    // Change the `::after` icons
    document.querySelector(".swiper-button-next")?.setAttribute("style", "color: white !important;");
    document.querySelector(".swiper-button-prev")?.setAttribute("style", "color: white !important;");
    document.querySelector(".swiper-pagination")?.setAttribute("style", "display: none !important;");

    document.styleSheets[0].insertRule(`
      .swiper-button-next::after, 
      .swiper-button-prev::after {
        font-size: 1.5rem !important;
        color: white !important;
      }
    `, document.styleSheets[0].cssRules.length);
  }, []);

  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className={styles.swiperContainer}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Image src={slide.image} alt={slide.title} layout="fill" objectFit="cover" priority />
            <div className={styles.overlayText}>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
        {/* <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div> */}
        <div className="swiper-pagination" style={{ display: "none",position: "absolute", bottom: "15px", left: "50%", transform: "translateX(-50%)" }}></div>
      </Swiper>
    </section>
  );
}

