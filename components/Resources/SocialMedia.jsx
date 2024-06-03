import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";

const SocialMedia = ({ resourceData }) => {
  return (
    <main className="bg-white" id="social-media">
      <section className="container py-[50px]">
        {resourceData.map((item) => (
          <article className="flex flex-wrap">
            <h4 className="text-2xl text-[#E36C0A] lg:text-3xl font-semibold">
              IQ on Social Media
            </h4>
            <Separator className="my-2" />
            {item.socialMedia.map((data) => (
              <article className="w-full md:w-1/3 lg:w-1/3 md:p-4 lg:p-4 mt-4 ">
                <article className="bg-white  rounded-2xl shadow-[0px_0px_10px_1px_#edf2f7] hover:scale-[1.05] transition-transform duration-1000">
                  <div className="h-[180px] overflow-hidden rounded-t-2xl">
                    <Image width={500} height={400} src={data.image} />
                  </div>
                  <div className="p-4">
                    <div className="my-4">
                      <h4 className="mb-2 text-md font-semibold">
                        {data.headline}
                      </h4>
                      <p className="text-sm text-gray-600 font-regular font-gray-700">
                        {data.description}
                      </p>
                    </div>
                    <div className="my-4">
                      <Link
                        className=""
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="bg-[#E36C0A] flex items-center justify-center border border-[#E36C0A] text-sm text-white hover:text-gray-800 px-4 py-2 rounded-full hover:bg-white cursor-pointer">
                          Read more
                          <ChevronRight
                            className="relative top-[1px] ml-1 h-3 w-3 transition duration-200"
                            aria-hidden="true"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </article>
              </article>
            ))}
          </article>
        ))}
      </section>
    </main>
  );
};

export default SocialMedia;
