import React from "react";
import "@/app/styles/girl.css";
import mitsua from "@/app/img/mitsua.png";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

export const Girl = () => {
  return (
    <section id="girl">
      <div id="descMitsua">
        <h1 className={bebas.className} id="nomMitsua">
          Miyamizu Mitsuha
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
      <img src={mitsua.src} alt={mitsua.src} id="mitsua-img" />
    </section>
  );
};
