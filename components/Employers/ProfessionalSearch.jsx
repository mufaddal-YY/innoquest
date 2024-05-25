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

const ProfessionalSearch = ({ employerData }) => {
  return (
    <main className="bg-primary flex items-center" id="professional-search">
      <section className="container py-[50px] flex flex-col items-center">
        {employerData.map((item, index) => {
          const descriptionRef = useRef(null);
          const imageRef = useRef(null);
          const isDescriptionInView = useInView(descriptionRef, {
            once: false,
          });
          const isImageInView = useInView(imageRef, { once: false });

          return (
            <article
              key={index}
              className="flex flex-col lg:flex-row justify-between items-center w-full mb-10">
              <m.div
                className="w-full lg:w-1/2 p-4"
                ref={descriptionRef}
                initial={{ x: 20, opacity: 0 }}
                animate={isDescriptionInView ? { x: 0, opacity: 1 } : {}}
                transition={{ ease: "easeInOut", duration: 0.75 }}>
                <PortableText
                  content={item.professionalSearch}
                  components={myPortableTextComponents}
                  serializers={{
                    h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                    h4: (props) => (
                      <h4
                        className="text-xl lg:text-3xl text-[#E36C0A] font-semibold leading-snug lg:leading-snug"
                        {...props}
                      />
                    ),
                    h6: (props) => (
                      <h6
                        className="text-lg lg:text-xl text-white font-medium leading-snug lg:leading-snug"
                        {...props}
                      />
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
                <Separator className="my-2" />
                <div className="py-4 text-gray-200">
                  <PortableText
                    content={item.professionalDesc}
                    components={myPortableTextComponents}
                    serializers={{
                      h1: (props) => <h1 style={{ color: "red" }} {...props} />,
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
              </m.div>
              <m.div
                className="w-full lg:w-1/2 p-2 flex mb-4 justify-center items-center order-first"
                ref={imageRef}
                initial={{ x: -20, opacity: 0 }}
                animate={isImageInView ? { x: 0, opacity: 1 } : {}}
                transition={{ ease: "easeInOut", duration: 0.75 }}>
                <Image
                  className="rounded-xl floating-hover"
                  src={item.professionalImage}
                  width={600}
                  height={500}
                  alt="Professional Search"
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

export default ProfessionalSearch;
