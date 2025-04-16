import Header from "@/components/header/Header";

import Footer from "@/components/Footer";
import CareerHero from "@/components/innerpages/CareerHero";
import CareerBenefits from "@/components/innerpages/CareerBenefits";
import CareerOpenings from "@/components/innerpages/CareerOpenings";
import Feedback from "@/components/homes/Feedback";
import Brands from "@/components/innerpages/Brands";
import Blogs2 from "@/components/homes/Blogs2";
export const metadata = {
  title:
    "Careers - IT Support",
  description:
    "IT Support services UK company in London for expert technology advice to help business growth! Trusted IT specialists by over 200+ companies For over 10 years.",
};
export default function CareerPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header />
        <div id="wrapper" className="wrap">
          <CareerHero />
          <CareerBenefits />
          <CareerOpenings />
          <Feedback />
          <Brands />
          <Blogs2 />
        </div>
        <Footer />
      </div>
    </>
  );
}
