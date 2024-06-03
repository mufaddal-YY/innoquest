import Banner from "@/components/Resources/Banner";
import BannerImage from "./../../../public/workwithus.jpg";
import CallToAction from "@/components/Common/CallToAction";
import Opportunities from "@/components/WorkWithUs/Opportunities";

const WorkWithUs = async () => {
  return (
    <main className="mt-14">
      <Banner image={BannerImage} />
      <Opportunities />

      <CallToAction />
    </main>
  );
};

export default WorkWithUs;
