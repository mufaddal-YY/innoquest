import CareerAccelerator from "@/components/Candidates/CareerAccelerator";
import CareerCompass from "@/components/Candidates/CareerCompass";
import CareerOpportunities from "@/components/Candidates/CareerOpportunities";
import PortfolioCrafting from "@/components/Candidates/PortfolioCrafting";
import CallToAction from "@/components/Common/CallToAction";
import PageBanner from "@/components/Common/PageBanner";
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
      <CareerCompass careerData={careerData} />
      <PortfolioCrafting careerData={careerData} />
      <CareerAccelerator careerData={careerData} />
      <CallToAction />
    </main>
  );
};

export default CareerServices;
