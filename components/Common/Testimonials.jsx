"use client";

import Image from "next/image";
import Slider from "react-slick";
import { useRef } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { Separator } from "../ui/separator";
import { motion as m, useInView } from "framer-motion";

const Testimonials = ({ testimonialsData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    loop: true,
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
            <h3
              className={`font-semibold text-gray-800 text-4xl max-md:text-3xl text-left items-center`}>
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
        className="container mt-8 items-center"
        ref={sectionRef}
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ ease: "easeInOut", duration: 0.75 }}>
        <Slider
          ref={sliderRef}
          {...settings}
          className="flex justify-between items-center">
          {testimonialsData.map((item, index) => (
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
      </m.section>
    </main>
  );
};

export default Testimonials;
