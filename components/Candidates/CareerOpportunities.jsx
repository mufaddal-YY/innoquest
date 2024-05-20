"use client";
import React, { useState, useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import Image from "next/image";
import { Separator } from "../ui/separator";
import PortableText from "react-portable-text";
import { Button } from "../ui/button";
import Link from "next/link";

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

const CareerOpportunities = ({ careerData }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  return (
    <main className="bg-primary flex items-center" id="career-opportunities">
      <section className="container py-[50px] flex flex-col items-center">
        {careerData.map((item, index) => (
          <article
            key={index}
            className="flex flex-col lg:flex-row text-center mx-auto justify-between items-center w-full mb-10">
            <m.div
              className="w-full p-4"
              ref={sectionRef}
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ ease: "easeInOut", duration: 0.75 }}>
              <h4 className="mb-2 text-xl lg:text-3xl text-white font-semibold leading-snug lg:leading-snug tracking-wide">
                {item.careerOpp}
              </h4>

              <div className="py-4 text-gray-200">
                <PortableText
                  content={item.careerOppSub}
                  components={myPortableTextComponents}
                  serializers={{
                    h1: (props) => <h1 {...props} />,
                    h4: (props) => (
                      <h4 className="text-lg lg:text-2xl" {...props} />
                    ),
                    li: ({ children }) => (
                      <li className="special-list-item">{children}</li>
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

              <div className="flex gap-4 justify-center mx-auto">
                <div className="my-2">
                  <Link href={"https://innoquest-careers.blogspot.com/"}>
                    <Button className="bg-[#E36C0A]  px-4 border border-[#E36C0A]">
                      Explore Blog
                    </Button>
                  </Link>
                </div>

                <div className="my-2">
                  <Link href={"/"}>
                    <Button className="bg-[#E36C0A]  px-4 border border-[#E36C0A]">
                      Linkedin
                    </Button>
                  </Link>
                </div>
              </div>
            </m.div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default CareerOpportunities;
