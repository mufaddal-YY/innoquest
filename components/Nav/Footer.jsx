import localFont from "next/font/local";
import { Logo } from "@/lib/Icons";
import { getContactsData } from "@/sanity/sanity_utils";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaFacebook, FaBlogger } from "react-icons/fa6";
import { Separator } from "../ui/separator";

const myFont = localFont({
  src: "./../../public/copperplate-gothic-light.ttf",
});

const Footer = async () => {
  const contactData = await getContactsData();

  return (
    <>
      <main className="py-[20px] items-center bg-gray-100">
        <section className="container items-center flex flex-col lg:flex-row justify-between">
          <article className="flex flex-col justify-center">
            <div className="flex justify-center">
              <div className="inline-block bg-primary px-2 py-1">{Logo}</div>
            </div>
          </article>
          <article>
            {contactData.map((item) => (
              <div className="flex gap-4 items-center my-2">
                <Link
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className="text-2xl text-gray-700">
                    <FaLinkedin />
                  </span>
                </Link>
                <Link
                  href={item.facebook}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className="text-2xl text-gray-700">
                    <FaFacebook />
                  </span>
                </Link>
                <Link
                  href={item.blogSpot}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className="text-2xl text-gray-700">
                    <FaBlogger />
                  </span>
                </Link>
              </div>
            ))}
          </article>
        </section>
      </main>
      <main className=" items-center">
        <section className="bg-primary py-[20px]">
          <div className="container flex flex-col lg:flex-row justify-between items-center">
            
            <article className="text-center lg:text-left">
              <span className="text-xs font-regular text-white">
                © 2024 Red Velvette Integrated Services | All Rights Reserved.
              </span>
            </article>
            
            <article className="flex items-center gap-2">
              <Link href={"/privacy-policy"}>
                <span className="text-xs font-regular text-white">
                  Privacy Policy
                </span>
              </Link>
              <Separator
                className="border border-white h-4"
                orientation="vertical"
              />
              <Link href={"/terms-conditions"}>
                <span className="text-xs font-regular text-white">
                  Terms and Conditions
                </span>
              </Link>
            </article>
          </div>

          <Separator className="my-2" />

          <article className="text-center  p-1">
            <span className=" font-regular text-[9px] leading-tight text-gray-300">
              InnoQuest Consulting is a part of Red Velvette Integrated
              Services. Please be aware - InnoQuest Consulting does not charge a
              fee from candidates at any stage of the recruitment process. To
              report any misrepresentation or fraud, please mail us at  <a href="mailto:contact@innoquest.in">contact@innoquest.in</a>
            </span>
          </article>
        </section>
      </main>
    </>
  );
};

export default Footer;
