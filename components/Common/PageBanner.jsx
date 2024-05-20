"use client";
import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import Image from "next/image";

const PageBanner = ({ headline, subHeadline, image }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  return (
    <main className="bg-gray-50 items-center bg-cover bg-center bg-no-repeat">
      <section className="flex items-center">
        <article className="flex flex-col lg:flex-row justify-between items-center w-full">
          <m.div
            className="w-full lg:w-6/12 flex flex-col items-center justify-center"
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
            className="w-full h-[550px] lg:w-6/12 p-2 flex justify-center items-center order-first lg:order-last bg-no-repeat bg-center bg-cover"
            ref={sectionRef}
            initial={{ x: 20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            style={{ backgroundImage: `url(${image})` }}>
            {/* 
  <Image
    className="rounded-xl"
    src={image}
    width={800}
    height={500}
    alt="Banner image"
    priority // Helps to preload the image for faster loading
  /> 
  */}
          </m.div>
        </article>
      </section>
    </main>
  );
};

export default PageBanner;
