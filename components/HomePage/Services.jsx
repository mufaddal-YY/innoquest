"use client";
import Image from "next/image";
import React from "react";
import EmployerImage from "./../../public/employer.jpg";
import CareerImage from "./../../public/career.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

const Services = () => {
  return (
    <main className="items-center overflow-hidden">
      <section className="items-center overflow-hidden">
        <article className="flex flex-col lg:flex-row  justify-between items-center overflow-hidden">
          <div className="w-full lg:w-1/2 h-[500px] lg:h-screen relative p-8 hover:scale-[1.1] hover:duration-1000 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeIn",
                duration: 1.2,
              }}
              className="absolute inset-0 lg:px-6 sm:px-2 max-w-7xl mx-auto flex items-center justify-center p-2 py-[100px] z-20 overflow-hidden">
              <div className="text-center">
                <h4 className="lg:text-5xl md:text-3xl text-[28px] text-white leading-normal md:leading-snug lg:leading-snug font-medium mb-4">
                  Employer Services
                </h4>
                <p className="lg:w-3/4 w-full mx-auto text-white leading-tight font-regular mb-8">
                  Considering recruiting top talent for your Organization?
                </p>
                <Link href={"/employer-services"}>
                  <button className="rounded-full px-4 py-3 text-white text-md font-regular  bg-[#E36C0A] hover:bg-transparent border border-[#E36C0A] hover:text-white hover:border hover:border-[#E36C0A]">
                    Explore Our Services
                  </button>
                </Link>
              </div>
            </motion.div>
            <div className="w-full h-full absolute inset-0 overflow-hidden">
              <Image
                className="object-cover"
                layout="fill"
                src={EmployerImage}
                alt=""
              />
            </div>{" "}
            <div className="absolute inset-0 bg-black opacity-80 "></div>
          </div>

          <div className="w-full lg:w-1/2 h-[500px] lg:h-screen relative p-8 hover:scale-[1.1] hover:duration-1000 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeIn",
                duration: 1.2,
              }}
              className="absolute inset-0 lg:px-6 sm:px-2 max-w-7xl mx-auto flex items-center justify-center p-2 py-[100px] z-20 overflow-hidden">
              <div className="text-center">
                <h4 className="lg:text-5xl md:text-3xl text-[28px] text-white leading-normal md:leading-snug lg:leading-snug font-medium mb-4">
                  Career Services
                </h4>
                <p className="lg:w-3/4 w-full mx-auto text-white leading-tight font-regular mb-8">
                  Enthusiastic about advancing your career?
                </p>
                <Link href={"/career-services"}>
                  <button className="rounded-full px-4 py-3 text-white text-md font-regular bg-[#E36C0A] hover:bg-transparent border border-[#E36C0A] hover:text-white hover:border hover:border-[#E36C0A]">
                    Explore Our Services
                  </button>
                </Link>
              </div>
            </motion.div>
            <div className="w-full h-full absolute inset-0 overflow-hidden">
              <Image
                className="object-cover"
                layout="fill"
                src={CareerImage}
                alt=""
              />
            </div>{" "}
            <div className="absolute inset-0 bg-black opacity-80"></div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Services;
