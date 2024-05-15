"use client";
import React, { useState, useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/textEffect";

const HeroBanner = ({ homeData }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  return (
    <main
      className="bg-primary lg:h-screen items-center"
      style={{
        backgroundImage: "url('./heroBg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      {homeData.map((item) => (
        <section className="container py-[100px] items-center">
          <article className="flex flex-col lg:flex-row justify-between items-center">
            <m.div
              className="w-full lg:w-7/12"
              ref={sectionRef}
              initial={{ x: -40, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ ease: "easeInOut", duration: 0.75 }}>
              <h4 className="mb-2">
                <TextGenerateEffect words={item.headline} />
              </h4>

              <p className="text-white mb-8 text-md">~ Walt Disney</p>

              <p className="text-gray-300 text-sm lg:text-lg">
                {item.subHeadline}
              </p>
            </m.div>
            <m.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="w-full lg:w-5/12 p-2 flex mb-4 justify-center items-center order-first lg:order-last">
              <Image src={item.heroImage} width={450} height={300} />
            </m.div>
          </article>
        </section>
      ))}
    </main>
  );
};

export default HeroBanner;
