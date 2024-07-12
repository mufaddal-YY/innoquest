import Link from "next/link";
import React from "react";
import { MdCall, MdEmail } from "react-icons/md";
import { Separator } from "../ui/separator";
import { FaBlogger, FaFacebook, FaLinkedin } from "react-icons/fa";

const ContactDetails = ({ contactData }) => {
  return (
    <main className="mt-14 bg-gray-100">
      {contactData.map((item) => (
        <section className="container flex flex-col gap-4 py-[100px]">
          <article className="justify-center mx-auto">
            <div className="justify-center mx-auto text-center">
              <h4 className="font-semibold text-2xl lg:text-3xl md:text-2xl py-4 text-[#E36C0A]">
                Reach Out and Connect: We're Here to Help!
              </h4>
            </div>
          </article>
          <article className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center mx-auto space-y-4 w-full lg:w-1/2">
              <div className="flex items-center justify-center text-white hover:text-[#E36C0A] rounded-full p-4 bg-[#E36C0A] hover:bg-white border border-[#E36C0A] w-20 h-20 mx-auto">
                <MdEmail className="h-8 w-8" />
              </div>
              <div>
                <Link href={`mailto:${item.email}`}>
                  <h4 className="text-lg font-regular text-gray-800">
                    {item.email}
                  </h4>
                </Link>
              </div>
            </div>

            {item.phone && (
              <div className="text-center mx-auto space-y-4 w-full lg:w-1/2">
                <div className="flex items-center justify-center text-white hover:text-[#E36C0A] rounded-full p-4 bg-[#E36C0A] hover:bg-white border border-[#E36C0A] w-20 h-20 mx-auto">
                  <MdCall className="h-8 w-8" />
                </div>
                <div>
                  <Link href={`tel:${item.phone}`}>
                    <h4 className="text-lg font-regular text-gray-800">
                      {item.phone}
                    </h4>
                  </Link>
                </div>
              </div>
            )}
          </article>
          <Separator className="my-4" />
          <div className="mx-auto justify-center">
            <h5 className="text-2xl text-[#E36C0A]">Follow us on:</h5>
          </div>
          <article className="flex flex-row gap-4 items-center">
            <div className="text-center space-y-4">
              <Link href={item.linkedin}>
                <div className="flex items-center justify-center hover:text-white text-[#E36C0A] border border-[#E36C0A] rounded-full p-4 bg-white hover:bg-primary w-20 h-20 mx-auto">
                  <FaLinkedin className="h-8 w-8" />
                </div>
              </Link>
            </div>
            <div className="text-center space-y-4">
              <Link href={item.facebook}>
                <div className="flex items-center justify-center hover:text-white text-[#E36C0A] border border-[#E36C0A] rounded-full p-4 bg-white hover:bg-primary w-20 h-20 mx-auto">
                  <FaFacebook className="h-8 w-8" />
                </div>
              </Link>
            </div>
            <div className="text-center space-y-4">
              <Link href={item.blogSpot}>
                <div className="flex items-center justify-center hover:text-white text-[#E36C0A] border border-[#E36C0A] rounded-full p-4 bg-white hover:bg-primary w-20 h-20 mx-auto">
                  <FaBlogger className="h-8 w-8" />
                </div>
              </Link>
            </div>
          </article>
        </section>
      ))}
    </main>
  );
};

export default ContactDetails;
