import TermsCard from "@/components/Terms/TermsCard";
import { getTermsData } from "@/sanity/sanity_utils";

const TermsConditions = async () => {
  const termsData = await getTermsData();
  return (
    <main className="mt-14">
      <TermsCard termsData={termsData} />
    </main>
  );
};

export default TermsConditions;
