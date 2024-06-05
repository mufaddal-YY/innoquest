import Banner from "@/components/Resources/Banner";
import BannerImage from "./../../../public/workwithus.jpg";
import CallToAction from "@/components/Common/CallToAction";
import Opportunities from "@/components/WorkWithUs/Opportunities";
import { getWorkData } from "@/sanity/sanity_utils";

const WorkWithUs = async () => {
  const workData = await getWorkData();

  return (
    <main className="mt-14">
      <Banner image={BannerImage} />
      <Opportunities workData={workData} />
      <CallToAction />
    </main>
  );
};

export default WorkWithUs;
