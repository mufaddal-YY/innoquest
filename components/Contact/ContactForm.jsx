import Image from "next/image";
import React from "react";
import ContactImage from "./../../public/contact.jpg";
import ContactForm from "../Common/Form";

const ContaactForm = () => {
  return (
    <main className="container">
      <section className="flex flex-col lg:flex-row">
        <article className="w-full lg:w-1/2">
          <Image
            className="rounded-xl"
            src={ContactImage}
            width={300}
            height={400}
          />
        </article>
        <article className="w-full lg:w-1/2">
          <ContactForm />
        </article>
      </section>
    </main>
  );
};

export default ContaactForm;
