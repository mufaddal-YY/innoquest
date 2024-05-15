import CallToAction from "@/components/Common/CallToAction";
import PageBanner from "@/components/Common/PageBanner";
import EfficiencySolution from "@/components/Employers/EfficiencySolution";
import ExecutiveSearch from "@/components/Employers/ExecutiveSearch";
import NicheHiring from "@/components/Employers/NicheHiring";
import ProfessionalSearch from "@/components/Employers/ProfessionalSearch";
import { getEmployerData } from "@/sanity/sanity_utils";

const EmployerServices = async () => {
  const employerData = await getEmployerData();

  return (
    <main className="mt-14">
      {employerData.map((item) => (
        <PageBanner
          headline={item.headline}
          subHeadline={item.subHeadline}
          image={item.heroImage}
        />
      ))}

      <ExecutiveSearch employerData={employerData} />
      <ProfessionalSearch employerData={employerData} />
      <NicheHiring employerData={employerData} />
      <EfficiencySolution employerData={employerData} />

      <CallToAction />
    </main>
  );
};

export default EmployerServices;
