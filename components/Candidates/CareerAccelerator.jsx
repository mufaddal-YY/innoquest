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

const CareerAccelerator = ({ careerData }) => {
  return (
    <main className="bg-gray-100 flex items-center" id="career-accelerator">
      <section className="container py-[50px] flex flex-col items-center">
        {careerData.map((item, index) => {
          const descriptionRef = useRef(null);
          const imageRef = useRef(null);
          const isDescriptionInView = useInView(descriptionRef, {
            once: false,
          });
          const isImageInView = useInView(imageRef, { once: false });
          return (
            <article
              key={index}
              className="flex flex-col lg:flex-row justify-between items-center w-full">
              <m.div
                className="w-full lg:w-1/2"
                ref={descriptionRef}
                initial={{ x: -20, opacity: 0 }}
                animate={isDescriptionInView ? { x: 0, opacity: 1 } : {}}
                transition={{ ease: "easeInOut", duration: 0.75 }}>
                <h4 className="mb-2 text-2xl lg:text-3xl text-[#E36C0A] font-semibold leading-snug lg:leading-snug">
                  {item.careerAccelerator}
                </h4>
                <Separator className="my-2" />
                <div className=" text-sm text-gray-500">
                  <PortableText
                    content={item.acceleratorDesc}
                    components={myPortableTextComponents}
                    serializers={{
                      h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                      h4: (props) => (
                        <h4 style={{ fontSize: "28px" }} {...props} />
                      ),
                      h5: (props) => (
                        <h5
                          className="mb-2 "
                          style={{ fontSize: "18px" }}
                          {...props}
                        />
                      ),
                      li: ({ children }) => (
                        <li className="special-list-item ml-4 list-disc leading-snug ">
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
                ref={imageRef}
                initial={{ x: 20, opacity: 0 }}
                animate={isImageInView ? { x: 0, opacity: 1 } : {}}
                transition={{ ease: "easeInOut", duration: 0.75 }}>
                <Image
                  className="rounded-xl floating-hover"
                  src={item.acceleratorImage}
                  width={450}
                  height={500}
                  alt="Executive Search"
                  priority
                />
              </m.div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default CareerAccelerator;
