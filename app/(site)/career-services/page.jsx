import CareerAccelerator from "@/components/Candidates/CareerAccelerator";
import CareerCompass from "@/components/Candidates/CareerCompass";
import CareerOpportunities from "@/components/Candidates/CareerOpportunities";
import PortfolioCrafting from "@/components/Candidates/PortfolioCrafting";
import CallToAction from "@/components/Common/CallToAction";
import PageBanner from "@/components/Common/PageBanner";
import { Separator } from "@/components/ui/separator";
import { getCareerData } from "@/sanity/sanity_utils";

const CareerServices = async () => {
  const careerData = await getCareerData();
  return (
    <main className="mt-14">
      {careerData.map((item) => (
        <PageBanner
          headline={item.headline}
          subHeadline={item.subHeadline}
          image={item.heroImage}
        />
      ))}
      <CareerOpportunities careerData={careerData} />
      <main>
        <section className="container py-[50px] flex flex-col items-center">
          <div className="">
            <h4 className="mb-2 text-xl lg:text-3xl text-gray-800 font-semibold leading-snug lg:leading-snug tracking-wide">
              <span className="text-[#E36C0A]">Career Enhancement</span>
              Solutions
            </h4>
          </div>
        </section>
        <Separator className="my-2" />
      </main>
      <CareerCompass careerData={careerData} />
      <PortfolioCrafting careerData={careerData} />
      <CareerAccelerator careerData={careerData} />
      <CallToAction />
    </main>
  );
};

export default CareerServices;
