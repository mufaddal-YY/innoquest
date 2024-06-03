import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";

const Insights = ({ resourceData }) => {
  return (
    <main className="bg-wwhite" id="insights">
      <section className="container py-[50px]">
        {resourceData.map((item) => (
          <article className="flex flex-wrap p-4">
            <h4 className="text-2xl text-[#E36C0A] lg:text-3xl font-semibold">
              IQ Insights
            </h4>
            <Separator className="my-2" />
            {item.insights.map((data) => (
              <article className="w-full md:w-1/3 lg:w-1/4 p-2">
                <article className="bg-white shadow-sm shadow-gray-50 rounded-2xl">
                  <div className="h-full md:h-[250px] lg:h-[250px] overflow-hidden rounded-t-2xl">
                    <Image width={500} height={500} src={data.image} />
                  </div>
                  <div className="p-4">
                    <div className="my-4">
                      <p className="text-sm font-regular font-gray-700">
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
                          Learn more
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

export default Insights;
