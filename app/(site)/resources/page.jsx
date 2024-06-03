import Banner from "@/components/Resources/Banner";
import SocialMedia from "@/components/Resources/SocialMedia";
import { getResourcesData } from "@/sanity/sanity_utils";
import BannerImage from "./../../../public/resourcesBanner.jpg"
import Insights from "@/components/Resources/Insights";
import CallToAction from "@/components/Common/CallToAction";

const Resources = async () => {
  const resourceData = await getResourcesData();
  return (
    <main className="mt-14">
      <Banner image={BannerImage} />
      <SocialMedia resourceData={resourceData} />
      <Insights resourceData={resourceData} />
      <CallToAction />
    </main>
  );
};

export default Resources;
