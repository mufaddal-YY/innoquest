"use client";
import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";
import PortableText from "react-portable-text";
import Image from "next/image";

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
    a: (props) => (
      <a className="text-blue-500 hover:underline" {...props} />
    ),
  },
};

const Opportunities = ({ workData }) => {
  return (
    <main className="bg-gray-100" id="opportunities">
      <section className="container py-[50px]">
        <h4 className="text-2xl text-[#E36C0A] mb-4 lg:text-3xl font-semibold">
          Opportunities with IQ
        </h4>
        {workData.map((item) => (
          <PortableText
            content={item.description}
            components={myPortableTextComponents}
            serializers={{
              h1: (props) => <h1 style={{ color: "red" }} {...props} />,
              h4: (props) => <h4 style={{ fontSize: "28px" }} {...props} />,
              h5: (props) => (
                <h5 className="mb-2 " style={{ fontSize: "18px" }} {...props} />
              ),
              li: ({ children }) => (
                <li className="special-list-item ml-4 list-disc leading-loose ">
                  {children}
                </li>
              ),
              normal: ({ children }) => {
                if (children.length === 1 && children[0] === "") {
                  return <br />;
                }
                return <p className="text-gray-600">{children}</p>;
              },
              a: (props) => (
                <a className="text-blue-500 hover:underline" {...props} />
              ),
            }}
          />
        ))}

        <Separator className="my-4" />
        {workData.map((item) => {
          const descriptionRef = useRef(null);
          const imageRef = useRef(null);
          const isDescriptionInView = useInView(descriptionRef, {
            once: false,
          });
          const isImageInView = useInView(imageRef, { once: false });
          return (
            <article className="flex flex-col md:flex-row lg:flex-row ">
              <article className="my-2 w-full md:w-1/2 lg:w-1/2">
                <m.div
                  className=""
                  ref={descriptionRef}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isDescriptionInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ ease: "easeInOut", duration: 0.75 }}>
                  {item.opportunities.map((data) => (
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-[#E36C0A] text-lg hover:text-gray-800">
                          <span>{data.headline}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <Separator className="mb-2" />
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
                                <h5
                                  className="mb-2 "
                                  style={{ fontSize: "18px" }}
                                  {...props}
                                />
                              ),
                              li: ({ children }) => (
                                <li className="special-list-item ml-4 list-disc leading-loose ">
                                  {children}
                                </li>
                              ),
                              normal: ({ children }) => {
                                if (
                                  children.length === 1 &&
                                  children[0] === ""
                                ) {
                                  return <br />;
                                }
                                return (
                                  <p className="text-gray-600">{children}</p>
                                );
                              },
                            }}
                          />
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </m.div>
              </article>
              <article className="my-2 w-full md:w-1/2 lg:w-1/2">
                <m.div
                  className="p-2 flex mb-4 justify-center items-center order-first lg:order-last"
                  ref={imageRef}
                  initial={{ x: 20, opacity: 0 }}
                  animate={isImageInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ ease: "easeInOut", duration: 0.75 }}>
                  <Image
                    className="rounded-xl floating-hover"
                    src={item.image}
                    width={450}
                    height={500}
                    alt="Executive Search"
                    priority
                  />
                </m.div>
              </article>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Opportunities;
