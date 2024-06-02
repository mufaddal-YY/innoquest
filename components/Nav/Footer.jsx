import { Logo } from "@/lib/Icons";
import { getContactsData } from "@/sanity/sanity_utils";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaFacebook, FaBlogger } from "react-icons/fa6";
import { Separator } from "../ui/separator";

const Footer = async () => {
  const contactData = await getContactsData();
  return (
    <>
      <main className="py-[20px] items-center bg-gray-100">
        <section className="container items-center flex flex-col lg:flex-row justify-between">
          <article>
            <div className="bg-primary mb-2 px-2 py-1 items-center">{Logo}</div>
          </article>
          <article>
            {contactData.map((item) => (
              <div className="flex gap-4 items-center mb-2">
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
            <article className="">
              <span className="text-xs font-regular text-white">
                © 2024 Innoquest | All Rights Reserved.
              </span>
            </article>
            <article>
              <span className="text-xs font-regular text-white">
                Privacy Policy | Terms and Conditions
              </span>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default Footer;
