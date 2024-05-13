"use client";

import Image from "next/image";
import { TextGenerateEffect } from "../ui/textEffect";

const HeroBanner = ({ homeData }) => {
  return (
    <main
      className="bg-primary lg:h-screen items-center"
      style={{
        backgroundImage: "url('./heroBg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      {homeData.map((item) => (
        <section className="container py-[100px] items-center">
          <article className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-7/12">
              <h4 className="mb-2">
                <TextGenerateEffect words={item.headline} />
              </h4>

              <span className="text-white mb-4 text-sm">-Walt Disney</span>

              <p className="text-gray-300 py-4 text-sm lg:text-lg">{item.subHeadline}</p>
            </div>
            <div className="w-full lg:w-5/12 p-2 flex mb-4 justify-center items-center order-first lg:order-last">
              <Image src={item.heroImage} width={600} height={400} />
            </div>
          </article>
        </section>
      ))}
    </main>
  );
};

export default HeroBanner;
