"use client";
import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";

const PageBanner = ({ headline, subHeadline, image }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  return (
    <main className="bg-gray-900 border-b border-[#E36C0A] items-center bg-cover bg-center bg-no-repeat">
      <section className="flex items-center">
        <article className="flex flex-col lg:flex-row  justify-between items-center w-full">
          <m.div
            className="w-full  p-2 md:p-4 lg:p-6 h-[250px] lg:w-6/12 flex flex-col items-center text-center justify-center"
            ref={sectionRef}
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ ease: "easeInOut", duration: 0.75 }}>
            <h4 className="mb-2 text-3xl lg:text-5xl w-full lg:w-10/12 tracking-tight p-4 text-left lg:text-center text-white font-bold leading-snug lg:leading-snug">
              {subHeadline}
            </h4>
            
          </m.div>
          <m.div
            className="w-full h-[300px] lg:h-[550px] lg:w-6/12 p-2 flex justify-center items-center order-first lg:order-last bg-no-repeat bg-center bg-cover"
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
