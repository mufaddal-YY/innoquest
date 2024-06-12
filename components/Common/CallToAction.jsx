import Link from "next/link";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <main className="bg-[#E36C0A] py-[30px]">
      <section className="max-w-7xl mx-auto px-2 lg:px-4">
        <div className="flex flex-col justify-center">
          <div className="my-4">
            <h1 className="text-xl lg:text-[32px] text-center leading-tight font-bold text-white">
              Connect with our team to know how we can help you
            </h1>
          </div>
          <div className="flex justify-center my-2">
            <Link href={"/contact"}>
              <Button className="bg-white text-md py-4 px-6 hover:text-white text-gray-800 rounded-full border border-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CallToAction;
