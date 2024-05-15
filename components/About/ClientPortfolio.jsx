"use client";
import React from "react";
import { Separator } from "../ui/separator";
import PortableText from "react-portable-text";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  },
};

const ClientPortfolio = ({ aboutData }) => {
  return (
    <>
      <main className="bg-gray-100 items-center" id="industries">
        <section className="container py-[100px] flex flex-col items-center">
          {aboutData.map((item, index) => (
            <article key={index} className="">
              <h4 className="mb-2 text-xl lg:text-3xl text-[#222631] font-semibold leading-snug lg:leading-snug tracking-wide">
                <span className="text-[#E36C0A]">Industries</span>
              </h4>
              <Separator className="my-2" />
              {item.industries.map((industry, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row justify-between items-center w-full mb-10 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="w-full lg:w-1/2">
                    <div className="py-4 text-gray-500">
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
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 p-2 flex mb-4 justify-center items-center">
                    <Image
                      className="rounded-xl mb-4 floating-hover"
                      src={industry.image}
                      width={500}
                      height={500}
                      alt="About Image"
                      priority
                    />
                  </div>
                </div>
              ))}
            </article>
          ))}
        </section>
      </main>
      <main className="bg-primary items-center py-[100px]">
        <section className="container ">
          <h4 className="mb-8 text-xl lg:text-3xl text-white font-semibold leading-snug lg:leading-snug tracking-wide">
            Some of <span className="text-[#E36C0A]">our customers</span>{" "}
            include:
          </h4>
          <Separator className="my-4" />

          {aboutData.map((item, index) => (
            <div className=" rounded-md flex my-8 flex-col antialiased  items-center justify-center relative overflow-hidden">
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
