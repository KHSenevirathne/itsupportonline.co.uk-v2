import Brands from "@/components/common/Brands";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Blog from "@/components/homes/Blog";
import Cta from "@/components/homes/Cta";
import Faq from "@/components/homes/Faq";
import Features from "@/components/homes/Features";
import Hero from "@/components/homes/Hero";
import Howworks from "@/components/homes/Howworks";
import Support from "@/components/homes/Support";
import Team from "@/components/homes/Team";
import Testimonials from "@/components/homes/Testimonials";
import React from "react";
export const metadata = {
  title:
    "IT Support - On Demand IT Services Specialist",
  description:
    "IT Support services UK company in London for expert technology advice to help business growth! Trusted IT specialists by over 200+ companies For over 10 years",
};
export default function Home() {
  return (
    <>
      <div className=" page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        <Header />
        <div id="wrapper" className="wrap">
          <Hero />
          <div
            id="companies_sponsores"
            className="companies-sponsores section panel overflow-hidden rounded-bottom-3 bg-secondary dark:bg-gray-700 dark:bg-opacity-50"
          >
            <div className="section-outer panel pb-4 sm:pb-8 xl:pb-9">
              <div className="container sm:max-w-lg xl:max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
                    data-anime="onview: -100; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
                  >
                    <p className="fs-6 sm:fs-5 lg:fs-4 xl:fs-3 fw-medium">
                      For over 15 years, we&apos;ve provided vital IT support for our clients
                    </p>
                    <div className="block-panel panel">
                      <div className="element-brands text-black dark:text-white mask-x">
                        <Brands />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Features />
          <hr className="w-100 m-0 d-block lg:d-none" />
          <Cta />
          <Howworks />
          <Testimonials />
          <Faq />
          <Support />
          <Team />
          <Blog />
        </div>
        <Footer />
      </div>
    </>
  );
}
