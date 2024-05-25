"use client";
import React, { useState, useRef } from "react";

import ContactForm from "./Form";
import { motion as m, useInView } from "framer-motion";
const CallToAction = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <main className="container py-[50px] w-full lg:w-8/12">
      <m.section
        className="flex items-center bg-primary rounded-[28px]"
        ref={sectionRef}
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ ease: "easeInOut", duration: 0.75 }}>
        <article
          className="w-full lg:w-5/12 py-[200px] rounded-l-[28px] hidden lg:block bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('./contact.jpg')" }}
          role="img"
          aria-label="Contact background image"></article>
        <article className="w-full p-6 lg:w-7/12">
          <div className="w-full px-2 mx-auto">
            <header>
              <h4 className="text-xl text-white font-medium mb-4">
                Contact Us
              </h4>
            </header>
            <ContactForm />
          </div>
        </article>
      </m.section>
    </main>
  );
};

export default CallToAction;
