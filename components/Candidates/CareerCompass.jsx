"use client";
import React, { useState, useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import Image from "next/image";
import { Separator } from "../ui/separator";
import PortableText from "react-portable-text";
import { Button } from "../ui/button";

const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img src={value.imageUrl} alt={value.alt || "Image"} />
    ),
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url} className="callToActionInline">
          {value.text}
        </a>
      ) : (
        <div className="callToActionBlock">{value.text}</div>
      ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong style={{ color: "#E36C0A" }}>{children}</strong>
    ),
  },
};

const CareerCompass = ({ careerData }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  return (
    <main className="bg-white flex items-center" id="career-compass">
      <section className="container py-[50px] flex flex-col items-center">
        {careerData.map((item, index) => (
          <article
            key={index}
            className="flex flex-col lg:flex-row justify-between items-center w-full mb-10">
            <m.div
              className="w-full lg:w-1/2"
              ref={sectionRef}
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ ease: "easeInOut", duration: 0.75 }}>
              <h4 className="mb-2 text-xl lg:text-3xl text-[#222631] font-semibold leading-snug lg:leading-snug tracking-wide">
                {item.careerCompass}
              </h4>
              <Separator className="my-2" />
              <div className="py-4 text-gray-500">
                <PortableText
                  content={item.compassDesc}
                  components={myPortableTextComponents}
                  serializers={{
                    h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                    li: ({ children }) => (
                      <li className="special-list-item text-lg font-medium text-gray-600 list-disc leading-loose">
                        {children}
                      </li>
                    ),
                    normal: ({ children }) => {
                      if (children.length === 1 && children[0] === "") {
                        return <br />;
                      }
                      return <p>{children}</p>;
                    },
                  }}
                />
              </div>
            </m.div>
            <m.div
              className="w-full lg:w-1/2 p-2 flex mb-4 justify-center items-center order-first lg:order-last"
              ref={sectionRef}
              initial={{ x: 20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ ease: "easeInOut", duration: 0.75 }}>
              <Image
                className="rounded-xl floating-hover"
                src={item.compassImage}
                width={400}
                height={500}
                alt="Career Compass"
                priority
              />
            </m.div>
          </article>
        ))}

        <m.div
          className="rounded-2xl p-4 lg:p-8  bg-[#E36C0A]"
          ref={sectionRef}
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
          <div className="text-white text-md lg:text-lg font-regular">
            <p className="py-2">
              Our team of Talent Consultants are equipped to advice and guide
              you, and thus help setting the right direction to your career.
              Your success, is afterall, our success.
            </p>
            <Separator className="my-2" />
            <div className="flex flex-col lg:flex-row justify-between items-center py-2">
              <div>
                <p className="text-white text-md font-regular">
                  Book a slot for a free 30 minute exploratory call here to
                  speak to our career experts:
                </p>
              </div>

              <div className="justify-start pt-4">
                <Button className="bg-white text-gray-700 hover:text-white">
                  Book Slot
                </Button>
              </div>
            </div>
          </div>
        </m.div>
      </section>
    </main>
  );
};

export default CareerCompass;
