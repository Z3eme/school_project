"use client";
import React, { useState, useEffect } from "react";
import darkMode from "./navbar";

const carouselText = [{ text: "earn programming with us", color: {} }];

function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCharIndex((charIndex) => charIndex + 1);
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex]);

  useEffect(() => {
    if (charIndex === carouselText[textIndex].text.length) {
      setTimeout(() => {
        setCharIndex(0);
        setTextIndex((textIndex + 1) % carouselText.length);
      }, 2000);
    }
  }, [charIndex, textIndex]);

  return (
    <div className="w-full h-[80vh] z-40 m-auto text-center" id="about">
      <h1
        className="text-[4rem] dark:text-[#f5f5f5] text-[#191919] pt-32"
        id="hero"
        style={{ color: carouselText[textIndex].color }}
      >
        L{carouselText[textIndex].text.slice(0, charIndex)}
      </h1>
      <h1 className="pt-6 dark:text-[#dedede] text-[#0c0c0c]" >
        Empower your future with code – Join us, where learning meets limitless
        possibilities!
      </h1>
    </div>
  );
}

export default Hero;
