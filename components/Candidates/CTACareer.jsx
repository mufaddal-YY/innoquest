import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";

const CTACareer = ({ careerData }) => {
  return (
    <main className="bg-gray-100">
      <section className="container">
        {careerData.map((item, index) => (
          <div className="rounded-2xl p-4 lg:p-8 bg-[#E36C0A]" key={index}>
            <div className="text-white text-sm font-regular">
              <p className="py-2">{item?.cta}</p>
              <Separator className="my-2" />
              <div className="flex flex-col lg:flex-row justify-between items-center py-2">
                <div>
                  <p className="text-white text-sm font-regular">
                    {item?.ctaDesc}
                  </p>
                </div>
                <div className="justify-start pt-4">
                  <Link
                    href={item?.ctalink}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button className="bg-white text-gray-700 hover:text-white">
                      Book Slot
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default CTACareer;
