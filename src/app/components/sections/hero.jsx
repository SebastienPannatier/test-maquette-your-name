import React from "react";
import { Inter } from "next/font/google";
import "@/app/styles/hero.css";
import pers from "@/app/img/pers.png";
import ticket from "@/app/img/ticket-fixed.png";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const Hero = () => {
  return (
    <section id="hero">
      <div id="titre">
        <div id="titre-principal">
          <h1 id="nomJap" className={inter.className}>
            君の名は
          </h1>
          <h1 id="nomJapBack" className={inter.className}>
            君の名は
          </h1>
        </div>
        <h3 id="nomAng" className={inter.className}>
          your name.
        </h3>
        <img src={pers.src} alt={pers.src} id="img-pers" />
      </div>
      <img src={ticket.src} alt={ticket.src} id="ticket-fixed" />
    </section>
  );
};
