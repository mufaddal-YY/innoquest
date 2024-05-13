import { Logo } from "@/lib/Icons";
import { getContactsData } from "@/sanity/sanity_utils";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaFacebook, FaBlogger } from "react-icons/fa6";
import { Separator } from "../ui/separator";

const Footer = async () => {
  const contactData = await getContactsData();
  return (
    <main className="bg-white py-[50px] items-center ">
      <section className="container items-center flex flex-col lg:flex-row justify-between">
        <article>
          <div className="bg-primary px-4 py-2 items-center">{Logo}</div>
        </article>
        <article>
          {contactData.map((item) => (
            <div className="flex gap-4 items-center">
              <Link href={item.linkedin}>
                <span className="text-2xl text-[#0a66c2]">
                  <FaLinkedin />
                </span>
              </Link>
              <Link href={item.facebook}>
                <span className="text-2xl text-[#3b5998]">
                  <FaFacebook />
                </span>
              </Link>
              <Link href={item.blogSpot}>
                <span className="text-2xl text-[#FF5722]">
                  <FaBlogger />
                </span>
              </Link>
            </div>
          ))}
        </article>
      </section>{" "}
      <Separator className="my-4" />
      <section className="container flex flex-col lg:flex-row justify-between items-center">
        <article className="">
          <span className="text-sm font-regular text-gray-600">
            © 2024 Innoquest | All Rights Reserved.
          </span>
        </article>
        <article> <span className="text-sm font-regular text-gray-600">
            Privacy Policy | Terms and Conditions
          </span></article>
      </section>
    </main>
  );
};

export default Footer;
