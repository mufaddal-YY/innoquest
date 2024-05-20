import CallToAction from "@/components/Common/CallToAction";
import Testimonials from "@/components/Common/Testimonials";
import HeroBanner from "@/components/HomePage/HeroBanner";
import Services from "@/components/HomePage/Services";
import Stats from "@/components/HomePage/Stats";
import { getCandidateTestimonialsData, getClientTestimonialsData, getHomeData } from "@/sanity/sanity_utils";

export default async function Home() {
  const homeData = await getHomeData();
  const clientTestimonialsData = await getClientTestimonialsData();
  const candidateTestimonialsData = await getCandidateTestimonialsData();
  return (
    <main className="mt-4">
      <HeroBanner homeData={homeData} />
      <Testimonials clientTestimonialsData={clientTestimonialsData} candidateTestimonialsData={candidateTestimonialsData} />
      <Services homeData={homeData} />
      <Stats homeData={homeData} />
      <CallToAction />
    </main>
  );
}
