"use client";

import Image from "next/image";
import { TextGenerateEffect } from "../ui/textEffect";

const words = `“You can dream, create, design and build the most wonderful place in the world…but it
requires people to make the dream a reality.”
`;

const HeroBanner = () => {
  return (
    <main className="bg-primary">
      <section className="container py-[100px]">
        <article className="flex justify-between items-center">
          <div className="w-full lg:w-1/2">
            <h4 className="mb-2">
              <TextGenerateEffect words={words} />
            </h4>

            <span className="text-white mt-2 text-sm">-Walt Disney</span>

            <p className="text-gray-200 pt-4">
              At InnoQuest Consulting, we specialize in matching top talent with
              ideal opportunities, making us your dedicated allies in achieving
              excellence. Our pledge is to revolutionize recruitment practices
              to deliver unparalleled excellence driven by our relentless
              pursuit of innovation.
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <Image src={""} width={600} height={400} />
          </div>
        </article>
      </section>
    </main>
  );
};

export default HeroBanner;
