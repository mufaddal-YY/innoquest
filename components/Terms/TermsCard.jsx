import React from "react";
import PortableText from "react-portable-text";
import { Separator } from "../ui/separator";

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

const TermsCard = ({ termsData }) => {
  return (
    <main className="items-center bg-white">
      <section className="py-[50px] container">
        {termsData.map((data) => (
          <article className="p-4">
            <h4 className="mb-2 text-2xl lg:text-3xl text-[#E36C0A] font-semibold leading-snug lg:leading-snug">
              {data.headline}
            </h4>
            <Separator className="my-4" />

            <PortableText
              content={data.description}
              components={myPortableTextComponents}
              serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                h4: (props) => <h4 style={{ fontSize: "28px" }} {...props} />,
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
                  if (children.length === 1 && children[0] === "") {
                    return <br />;
                  }
                  return <p className="text-gray-600">{children}</p>;
                },
              }}
            />
          </article>
        ))}
      </section>
    </main>
  );
};

export default TermsCard;
