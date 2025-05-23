import Header from "@/components/header/Header";

import Footer from "@/components/Footer";
import About from "@/components/innerpages/About";
import Brands from "@/components/common/Brands2";
import About2 from "@/components/innerpages/About2";
import AboutValues from "@/components/innerpages/AboutValues";
import Feedback from "@/components/homes/Feedback";
import Timeline from "@/components/homes/Timeline";
import Team2 from "@/components/homes/Team2";
import Cta from "@/components/innerpages/Cta";
export const metadata = {
  title:
    "About - IT Support",
  description:
    "IT Support services UK company in London for expert technology advice to help business growth! Trusted IT specialists by over 200+ companies For over 10 years.",
};
export default function AboutPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header />
        <div id="wrapper" className="wrap">
          <About />
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pb-6 xl:pb-9">
              <div className="container max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="block-panel panel"
                    data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                  >
                    <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                      <Brands />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <About2 />
          <AboutValues />
          <Feedback />
          <Timeline />
          <Team2 />
          <Cta />
        </div>
        <Footer />
      </div>
    </>
  );
}
