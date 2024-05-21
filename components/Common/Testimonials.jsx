"use client";

import Image from "next/image";
import Slider from "react-slick";
import { useRef } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { Separator } from "@/components/ui/separator"; // Correct import path
import { motion as m, useInView } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Correct import path

const Testimonials = ({
  clientTestimonialsData,
  candidateTestimonialsData,
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  const sliderRef = useRef(null);

  return (
    <main className="bg-white items-center py-[100px]">
      <section className="container items-center">
        <article className="flex justify-between items-center">
          <div className="mb-2">
            <h3 className="font-semibold text-gray-800 text-4xl max-md:text-3xl text-left items-center">
              Testimonials
            </h3>
          </div>
          <div className="flex justify-between text-2xl mb-2">
            <div
              className="slick-arrow text-[#E36C0A] px-2"
              onClick={() => sliderRef?.current?.slickPrev()}>
              <HiMiniArrowLongLeft />
            </div>
            <div
              className="slick-arrow text-[#E36C0A] px-2"
              onClick={() => sliderRef?.current?.slickNext()}>
              <HiOutlineArrowLongRight />
            </div>
          </div>
        </article>
      </section>
      <Separator className="my-2" />
      <m.section
        ref={sectionRef}
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="container mt-8 items-center">
        <div>
          <Tabs defaultValue="client" className=" ">
            <TabsList className="grid justify-center mx-auto w-full lg:w-[400px] grid-cols-2">
              <TabsTrigger className="text-sm lg:text-md p-1" value="client">Client</TabsTrigger>
              <TabsTrigger className="text-sm lg:text-md p-1" value="candidate">
                Candidate
              </TabsTrigger>
            </TabsList>
            <TabsContent value="client">
              <Slider
                ref={sliderRef}
                {...settings}
                className="flex justify-between items-center">
                {clientTestimonialsData.map((item, index) => (
                  <div className="p-2" key={index}>
                    <div
                      className="lg:h-[350px] h-full items-center border border-[#E36C0A] rounded-2xl text-gray-700 hover:text-gray-300 bg-white hover:bg-primary hover:duration-1000 p-4"
                      style={{
                        backgroundImage: "url('./testimonialsBg.png')",
                        backgroundPosition: "right bottom",
                        backgroundSize: "50%",
                        backgroundRepeat: "no-repeat",
                      }}>
                      <div className="flex text-[#E89900]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <div className="text-sm lg:text-[12px] leading-normal font-light py-4">
                        <span>{item.description}</span>
                      </div>
                      <div className="text-sm font-medium py-4">
                        <span>{item.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </TabsContent>
            <TabsContent value="candidate">
              <Slider
                ref={sliderRef}
                {...settings}
                className="flex justify-between items-center">
                {candidateTestimonialsData.map((item, index) => (
                  <div className="p-2" key={index}>
                    <div
                      className="lg:h-[350px] h-full items-center border border-[#E36C0A] rounded-2xl text-gray-700 hover:text-gray-300 bg-white hover:bg-primary hover:duration-1000 p-4"
                      style={{
                        backgroundImage: "url('./testimonialsBg.png')",
                        backgroundPosition: "right bottom",
                        backgroundSize: "50%",
                        backgroundRepeat: "no-repeat",
                      }}>
                      <div className="flex text-[#E89900]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <div className="text-sm lg:text-[12px] leading-normal font-light py-4">
                        <span>{item.description}</span>
                      </div>
                      <div className="text-sm font-medium py-4">
                        <span>{item.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </TabsContent>
          </Tabs>
        </div>
      </m.section>
    </main>
  );
};

export default Testimonials;
