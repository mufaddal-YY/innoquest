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

const Values = ({ aboutData }) => {
  return (
    <main className="bg-primary flex items-center lg:h-screen" id="our-values">
      <section className="container py-[100px] flex flex-col">
        {aboutData.map((item, index) => (
          <article
            key={index}
            className="flex flex-col lg:flex-row justify-between items-center w-full mb-10">
            <div className="w-full lg:w-1/2 p-4">
              <h4 className="mb-2 text-xl lg:text-3xl text-white font-semibold leading-snug lg:leading-snug tracking-wide">
                Our <span className="text-[#E36C0A]">Values</span>
              </h4>
              <Separator className="my-2" />
              {item.ourValues.map((data, index) => (
                <div
                  key={index}
                  className={`py-4 text-gray-200 ${index !== item.ourValues.length - 1 ? "border-b-2 border-white" : ""}`}>
                  <PortableText
                    content={data.description}
                    components={myPortableTextComponents}
                    serializers={{
                      h1: (props) => <h1 style={{ color: "red" }} {...props} />,
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
              ))}
            </div>
            <div className="w-full lg:w-1/2 p-2 flex mb-4 justify-center items-center">
              <Image
                className="rounded-xl"
                src={item.valueImage}
                width={600}
                height={500}
                alt="Advantage Innoquest"
                priority
              />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Values;
