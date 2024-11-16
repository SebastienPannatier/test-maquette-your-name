import React from "react";
import "@/app/styles/footer.css";
import { Quicksand } from "next/font/google";
import { MdArrowOutward } from "react-icons/md";

const quickSand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

export const Footer = () => {
  return (
    <footer>
      <div id="liens">
        <h1 id="contact" className={quickSand.className}>
          CONTACT
        </h1>
        <div>
          <a>
            Lorem Ipsum <MdArrowOutward />
          </a>
          <a>
            Lorem Ipsum <MdArrowOutward />
          </a>
        </div>
      </div>
      <div>
        <h1 id="footer-titre">COMIX WAVE FILMS</h1>
        <h1 id="footer-titre-back">COMIX WAVE FILMS</h1>
      </div>
    </footer>
  );
};
