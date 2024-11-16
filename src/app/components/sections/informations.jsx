"use client";
import { React, useEffect } from "react";
import "@/app/styles/informations.css";
import { Quicksand, Inter } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const quickSand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const Informations = () => {
  useEffect(() => {
    // Animation Zoom In avec ScrollTrigger
    gsap.from("#synopsis p, #synopsis h1", {
      scale: 0.8, // Zoom initial (80% de la taille originale)
      opacity: 0, // Complètement transparent
      duration: 1.2, // Durée de l'animation
      ease: "power4.out", // Type d'animation (douce en sortie)
      stagger: {
        amount: 0.4, // Décalage entre les paragraphes
      },
      scrollTrigger: {
        trigger: "#informations", // Élément déclencheur
        start: "top 80%", // Début de l'animation
        end: "bottom 20%", // Fin de l'animation
        toggleActions: "play none none none", // Actions de déclenchement
      },
    });
    gsap.from("#information-title, #info-detail h1, #details a", {
      top: -10,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: {
        amount: 0.4, // Décalage entre les paragraphes
      },
      scrollTrigger: {
        trigger: "#informations", // Élément déclencheur
        start: "top 80%", // Début de l'animation
        end: "bottom 20%", // Fin de l'animation
        toggleActions: "play none none none", // Actions de déclenchement
      },
    });
  }, []);

  return (
    <section id="informations">
      <h1 className={quickSand.className} id="information-title">
        INFORMATION
      </h1>
      <div id="info-detail">
        <div id="details">
          <h1 className={quickSand.className}>Details</h1>
          <a>Le champo</a>
          <a>51 Rue des Écoles, Paris</a>
          <a>02.05 / 20:00</a>
        </div>
        <div id="synopsis">
          <h1 className={quickSand.className}>Synopsis</h1>
          <p className={inter.className}>
            Mitsuha Miyamizu, a high school girl, yearns to live the life of a
            boy in the bustling city of Tokyo—a dream that stands in stark
            contrast to her present life in the countryside. Meanwhile in the
            city, Taki Tachibana lives a busy life as a high school student
            while juggling his part-time job and hopes for a future in
            architecture.
          </p>
          <p className={inter.className}>
            One day, Mitsuha awakens in a room that is not her own and suddenly
            finds herself living the dream life in Tokyo—but in Taki&apos;s
            body! Elsewhere, Taki finds himself living Mitsuha&apos;s life in
            the humble countryside. In pursuit of an answer to this strange
            phenomenon, they begin to search for one another.
          </p>
          <p className={inter.className}>
            Kimi no Na wa. revolves around Mitsuha and Taki&apos;s actions,
            which begin to have a dramatic impact on each other&apos;s lives,
            weaving them into a fabric held together by fate and circumstance.
          </p>
        </div>
      </div>
    </section>
  );
};
