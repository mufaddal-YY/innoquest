"use client";
import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import { Separator } from "../ui/separator";
import PortableText from "react-portable-text";
import Image from "next/image";
import { InfiniteMovingCards } from "../ui/movingCards";

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

const ClientPortfolio = ({ aboutData }) => {
  return (
    <>
      <main className="bg-gray-100 items-center" id="industries">
        <section className="container py-[50px] flex flex-col items-center">
          {aboutData.map((item, index) => (
            <article key={index} className="">
              <h4 className="mb-2 text-2xl lg:text-3xl text-[#222631] font-semibold leading-snug lg:leading-snug">
                <span className="text-[#E36C0A]">Industries</span>
              </h4>
              <Separator className="my-2" />
              {item.industries.map((industry, subIndex) => {
                const descriptionRef = useRef(null);
                const imageRef = useRef(null);
                const isDescriptionInView = useInView(descriptionRef, {
                  once: false,
                });
                const isImageInView = useInView(imageRef, { once: false });

                return (
                  <div
                    key={subIndex}
                    className={`flex flex-col lg:flex-row justify-between items-center w-full mb-6 ${subIndex % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <m.div
                      className="w-full lg:w-2/3"
                      ref={descriptionRef}
                      initial={{ x: -20, opacity: 0 }}
                      animate={isDescriptionInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ ease: "easeInOut", duration: 0.75 }}>
                      <div className="py-4 text-[15px] text-gray-500">
                        <PortableText
                          content={industry.industryDesc}
                          components={myPortableTextComponents}
                          serializers={{
                            h1: (props) => (
                              <h1 style={{ color: "red" }} {...props} />
                            ),
                            h4: (props) => (
                              <h4 style={{ fontSize: "28px" }} {...props} />
                            ),
                            h5: (props) => (
                              <h5 style={{ fontSize: "18px" }} {...props} />
                            ),
                            li: ({ children }) => (
                              <li className="special-list-item list-disc leading-loose ">
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
                    </m.div>
                    <m.div
                      className="w-full lg:w-1/3 p-2 flex mb-4 justify-center items-center"
                      ref={imageRef}
                      initial={{ x: 20, opacity: 0 }}
                      animate={isImageInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ ease: "easeInOut", duration: 0.75 }}>
                      <Image
                        className="rounded-xl mb-4 floating-hover"
                        src={industry.image}
                        width={400}
                        height={500}
                        alt="About Image"
                        priority
                      />
                    </m.div>
                  </div>
                );
              })}
            </article>
          ))}
        </section>
      </main>
      <main className="bg-primary items-center py-[100px]">
        <section className="container ">
          <h4 className="mb-8 text-xl lg:text-3xl text-white font-semibold leading-snug lg:leading-snug">
            Some of <span className="text-[#E36C0A]">our customers</span>{" "}
            include:
          </h4>
          <Separator className="my-4" />

          {aboutData.map((item, index) => (
            <div
              key={index}
              className="rounded-md flex my-8 flex-col antialiased items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={item.clientele}
                direction="right"
                speed="slow"
              />
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default ClientPortfolio;
