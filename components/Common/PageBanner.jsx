"use client";
import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import Image from "next/image";

const PageBanner = ({ headline, subHeadline, image }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  return (
    <main className="bg-yellow-500 items-center bg-cover bg-center bg-no-repeat">
      <section className="flex items-center">
        <article className="flex flex-col lg:flex-row  justify-between items-center w-full">
          <m.div
            className="w-full h-[250px] lg:w-6/12 flex flex-col items-center text-center justify-center"
            ref={sectionRef}
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ ease: "easeInOut", duration: 0.75 }}>
            <h4 className="mb-2 text-3xl w-full p-4 lg:w-2/3 text-left lg:text-5xl  text-white font-semibold leading-snug lg:leading-snug">
              {subHeadline}
            </h4>
            {/* <p className="text-gray-600 text-sm lg:text-lg">{subHeadline}</p> */}
          </m.div>
          <m.div
            className="w-full h-[550px] lg:w-6/12 p-2 flex justify-center items-center order-first lg:order-last bg-no-repeat bg-center bg-cover"
            ref={sectionRef}
            initial={{ x: 20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            style={{ backgroundImage: `url(${image})` }}></m.div>
        </article>
      </section>
    </main>
  );
};

export default PageBanner;
