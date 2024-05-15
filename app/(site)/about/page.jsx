import React from "react";
import CallToAction from "@/components/Common/CallToAction";
import PageBanner from "@/components/Common/PageBanner";
import { getAboutData } from "@/sanity/sanity_utils";
import AboutUs from "@/components/About/AboutUs";
import Advantage from "@/components/About/Advantage";
import about from "@/sanity/schemas/about";
import ClientPortfolio from "@/components/About/ClientPortfolio";
import Leadership from "@/components/About/Leadership";
import Team from "@/components/About/Team";
import Values from "@/components/About/Values";

const About = async () => {
  const aboutData = await getAboutData();

  return (
    <main className="mt-14">
      {aboutData.map((item) => (
        <PageBanner
          headline={item.headline}
          subHeadline={item.subHeadline}
          image={item.heroImage}
        />
      ))}

      <AboutUs aboutData={aboutData} />
      <Advantage aboutData={aboutData} />
      <ClientPortfolio aboutData={aboutData} />
      <Leadership aboutData={aboutData} />
      <Team aboutData={aboutData} />
      <Values aboutData={aboutData} />

      <CallToAction />
    </main>
  );
};

export default About;
