import React from "react";
import "@/app/styles/dude.css";
import taki from "@/app/img/taki.png";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

export const Dude = () => {
  return (
    <section id="dude">
      <img src={taki.src} alt={taki.src} id="taki-img" />
      <div id="descTaki">
        <h1 className={bebas.className} id="nomTaki">
          Taki Tachibana
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Porttitor dui aliquet nisi
          nunc accumsan mauris sit pharetra. Orci nunc augue lectus quisque elit
          egestas eleifend non. Morbi tellus lectus suscipit amet. Egestas dui
          auctor etiam feugiat nulla egestas at erat. Lorem ipsum dolor sit amet
          consectetur. Porttitor dui aliquet nisi nunc accumsan mauris sit
          pharetra. Orci nunc augue lectus quisque elit egestas eleifend non.
          Morbi tellus lectus suscipit amet. Egestas dui auctor etiam feugiat
          nulla egestas at erat.
        </p>
      </div>
    </section>
  );
};
