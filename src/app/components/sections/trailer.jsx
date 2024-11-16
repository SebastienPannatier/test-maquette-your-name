"use client";
import React, { useEffect, useState } from "react";
import "@/app/styles/trailer.css";
import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  display: "swap",
});

const Trailer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2024-11-23T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00" });
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
        });
      }
    };

    const interval = setInterval(updateCountdown, 60000); // Update every minute
    updateCountdown(); // Initial call to set immediately

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section id="trailer">
      <div id="content">
        <iframe
          id="youtube-trailer"
          src="https://www.youtube.com/embed/NooIc3dMncc"
          title="Kimi no Na wa (Your Name) Trailer"
        />
        <div id="coming-back">
          <h1 id="coming-back-text" className={funnelDisplay.className}>
            COMING BACK SOON
          </h1>
          <div id="countdown" className={funnelDisplay.className}>
            <div id="days">
              <a id="dtime">{timeLeft.days}</a>
              <a id="dtext">days</a>
            </div>
            <a>:</a>
            <div id="hours">
              <a id="htime">{timeLeft.hours}</a>
              <a id="htext">hours</a>
            </div>
            <a>:</a>
            <div id="minutes">
              <a id="mtime">{timeLeft.minutes}</a>
              <a id="mtext">minutes</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trailer;
