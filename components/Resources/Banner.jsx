"use client";

import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";

const Banner = ({ image }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  return (
    <main className="border-b border-[#E36C0A] bg-cover bg-center bg-no-repeat">
      <section className="flex">
        <article className="flex flex-col lg:flex-row justify-between w-full">
          <m.div
            className="w-full h-[350px] lg:h-[600px] xl:h-[600px] p-2 flex justify-center order-first lg:order-last bg-no-repeat bg-center bg-cover"
            ref={sectionRef}
            initial={{ x: 20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            style={{ backgroundImage: `url(${image.src})` }}></m.div>
        </article>
      </section>
    </main>
  );
};

export default Banner;
