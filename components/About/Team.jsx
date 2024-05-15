import React from "react";
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
  },
};

const Team = ({ aboutData }) => {
  return (
    <main className="bg-white flex items-center">
      <section className="container py-[50px] flex flex-col items-center">
        {aboutData.map((item, index) => (
          <article key={index} className="">
            <div
              className={`flex flex-col lg:flex-row justify-between items-center w-full mb-10 }`}>
              <div className="w-full">
                <h4 className="mb-2 text-2xl lg:text-3xl text-[#222631] font-semibold leading-snug lg:leading-snug tracking-wide">
                  Our <span className="text-[#E36C0A]">Teams</span>
                </h4>

                <div className="py-4 text-gray-500">
                  <PortableText
                    content={item.teamDescription}
                    components={myPortableTextComponents}
                    serializers={{
                      h1: (props) => <h1 style={{ color: "red" }} {...props} />,
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
            </div>
            <div className="w-full p-2 flex mb-4 justify-center items-center">
              <Image
                className="rounded-xl mb-4"
                src={item.teamImage}
                width={1200}
                height={600}
                alt="About Image"
                priority
              />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Team;
