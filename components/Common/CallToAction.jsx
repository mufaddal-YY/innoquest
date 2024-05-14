import Image from "next/image";
import React from "react";
import ContactImage from "./../../public/contact.jpg";
import ContactForm from "./Form";

const CallToAction = () => {
  return (
    <main className="container ">
      <section className="flex items-center bg-primary rounded-[20px]">
        <article
          className="w-full lg:w-5/12 py-[250px] rounded-l-[20px] hidden lg:block"
          style={{
            backgroundImage: "url('./contact.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          {/* <Image src={ContactImage} width={600} height={300} /> */}
        </article>
        <article className="w-full p-8 lg:w-7/12">
          <div className="w-full px-2 lg:w-3/4 mx-auto justify-center">
            <div>
              <h4 className="text-2xl text-white font-medium mb-4">
                Contact Us
              </h4>
            </div>

            <ContactForm />
          </div>
        </article>
      </section>
    </main>
  );
};

export default CallToAction;
