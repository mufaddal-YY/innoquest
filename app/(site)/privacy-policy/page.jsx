import PrivacyCard from "@/components/Privacy/PrivacyCard";
import { getPrivacyData } from "@/sanity/sanity_utils";

const PrivacyPolicy = async () => {
  const privacyData = await getPrivacyData();
  return (
    <main className="mt-14">
      <PrivacyCard privacyData={privacyData} />
    </main>
  );
};

export default PrivacyPolicy;
