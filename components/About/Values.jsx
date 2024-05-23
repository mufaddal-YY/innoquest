"use client";
import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import Image from "next/image";
import { Separator } from "../ui/separator";
import PortableText from "react-portable-text";

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

const Values = ({ aboutData }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  return (
    <main className="bg-primary flex items-center" id="our-values">
      <section className="container py-[50px] flex flex-col">
        {aboutData.map((item, index) => (
          <article
            key={index}
            className="flex flex-col lg:flex-row justify-between items-center w-full mb-10">
            <m.div
              className="w-full lg:w-1/2 p-4"
              ref={sectionRef}
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ ease: "easeInOut", duration: 0.75 }}>
              <h4 className="mb-2 text-xl lg:text-3xl text-white font-semibold leading-snug lg:leading-snug tracking-wide">
                Our <span className="text-[#E36C0A]">Values</span>
              </h4>
              <Separator className="my-2" />
              {item.ourValues.map((data, index) => (
                <div
                  key={index}
                  className={`py-4 text-sm text-gray-200 ${index !== item.ourValues.length - 1 ? "border-b-2 border-white" : ""}`}>
                  <PortableText
                    content={data.description}
                    components={myPortableTextComponents}
                    serializers={{
                      h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                      li: ({ children }) => (
                        <li className="special-list-item list-disc leading-normal mb-2">
                          {children}
                        </li>
                      ),
                      normal: ({ children }) => {
                        if (children.length === 1 && children[0] === "") {
                          return <br />;
                        }
                        return <p>{children}</p>;
                      },
                      strong: ({ children }) => (
                        <strong style={{ color: "#E36C0A" }}>{children}</strong>
                      ),
                    }}
                  />
                </div>
              ))}
            </m.div>
            <m.div
              className="w-full lg:w-1/2 p-2 flex mb-4 justify-center items-center"
              ref={sectionRef}
              initial={{ x: 20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ ease: "easeInOut", duration: 0.75 }}>
              <Image
                className="rounded-full floating-hover"
                src={item.valueImage}
                width={600}
                height={500}
                alt="Advantage Innoquest"
                priority
              />
            </m.div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Values;
