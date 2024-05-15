import React from "react";
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
  },
};

const ExecutiveSearch = ({ employerData }) => {
  return (
    <main className="bg-white flex items-center lg:h-screen" id="executive-search">
      <section className="container py-[50px] flex flex-col items-center">
        {employerData.map((item, index) => (
          <article
            key={index}
            className="flex flex-col lg:flex-row justify-between items-center w-full mb-10">
            <div className="w-full lg:w-1/2">
              <h4 className="mb-2 text-xl lg:text-3xl text-[#222631] font-semibold leading-snug lg:leading-snug tracking-wide">
                {item.executiveSearch}
              </h4>
              <Separator className="my-2" />
              <div className="py-4 text-gray-500">
                <PortableText
                  content={item.executiveDesc}
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
            </div>
            <div className="w-full lg:w-1/2 p-2 flex mb-4 justify-center items-center order-first lg:order-last">
              <Image
                className="rounded-xl"
                src={item.executiveImage}
                width={800}
                height={500}
                alt="Executive Search"
                priority
              />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ExecutiveSearch;
