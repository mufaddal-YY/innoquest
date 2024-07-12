import Image from "next/image";
import React from "react";
import ContactImage from "./../../public/contact.jpg";
import ContactForm from "../Common/Form";

const ContaactForm = () => {
  return (
    <main className="container">
      <section className="flex flex-col lg:flex-row">
        <article className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-full max-w-md h-full pb-[75%]">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              src={ContactImage}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </article>
        <article className="w-full lg:w-1/2">
          <ContactForm />
        </article>
      </section>
    </main>
  );
};

export default ContaactForm;
