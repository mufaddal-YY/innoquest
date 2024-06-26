"use client";
import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import { Separator } from "../ui/separator";
import PortableText from "react-portable-text";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

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

const Leadership = ({ aboutData }) => {
  return (
    <main className="bg-white flex items-center" id="leadership">
      <section className="container py-[50px] flex flex-col items-center">
        {aboutData.map((item, index) => (
          <article key={index} className="">
            <h4 className="mb-2 text-2xl lg:text-3xl text-[#E36C0A] font-semibold leading-snug lg:leading-snug ">
              <span className="text-[#E36C0A]">Leadership </span> Team
            </h4>
            <Separator className="my-2" />
            {item.leadership.map((data, index) => {
              const descriptionRef = useRef(null);
              const imageRef = useRef(null);
              const isDescriptionInView = useInView(descriptionRef, {
                once: false,
              });
              const isImageInView = useInView(imageRef, { once: false });

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row justify-between items-center w-full mb-10 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <m.div
                    className="w-full lg:w-8/12 p-2"
                    ref={descriptionRef}
                    initial={{ x: -20, opacity: 0 }}
                    animate={isDescriptionInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ ease: "easeInOut", duration: 0.75 }}>
                    <h4 className="mb-2 text-xl py-2 border-b-2 text-[#222631] font-semibold leading-snug lg:leading-snug">
                      <span className="text-[#222631]">{data.name}</span>
                    </h4>
                    <div className="py-4 text-sm text-gray-500">
                      <PortableText
                        content={data.description}
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
                        }}
                      />
                    </div>
                    <div className=" ">
                      <Link
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedinIn className="text-4xl text-white bg-[#0077b5] p-1 rounded-sm" />
                      </Link>
                    </div>
                  </m.div>
                  <m.div
                    className="w-full lg:w-4/12 p-2 flex justify-center items-center"
                    ref={imageRef}
                    initial={{ x: 20, opacity: 0 }}
                    animate={isImageInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ ease: "easeInOut", duration: 0.75 }}>
                    <Image
                      className="rounded-xl p-6 floating-hover"
                      src={data.image}
                      width={500}
                      height={400}
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
  );
};

export default Leadership;
