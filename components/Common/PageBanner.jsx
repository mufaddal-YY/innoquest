"use client";
import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import Image from "next/image";

const PageBanner = ({ headline, subHeadline, image }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  return (
    <main
      className="bg-gray-50 items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./heroBg.png')" }}>
      <section className="container py-[100px] flex items-center">
        <article className="flex flex-col lg:flex-row justify-between items-center w-full">
          <m.div
            className="w-full lg:w-7/12"
            ref={sectionRef}
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ ease: "easeInOut", duration: 0.75 }}>
            <h4 className="mb-2 text-2xl lg:text-5xl text-[#222631] font-semibold leading-snug lg:leading-snug tracking-wide">
              {headline}
            </h4>
            <p className="text-gray-600 text-sm lg:text-lg">{subHeadline}</p>
          </m.div>
          <m.div
            className="w-full lg:w-5/12 p-2 flex mb-4 justify-center items-center order-first lg:order-last"
            ref={sectionRef}
            initial={{ x: 20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ ease: "easeInOut", duration: 0.75 }}>
            <Image
              className="rounded-xl"
              src={image}
              width={800}
              height={500}
              alt="Banner image"
              priority // Helps to preload the image for faster loading
            />
          </m.div>
        </article>
      </section>
    </main>
  );
};

export default PageBanner;
