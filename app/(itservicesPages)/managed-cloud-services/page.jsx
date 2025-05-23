import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/itservicespages/managecloud/Hero";
import Faq2 from "@/components/homes/Faq2";
import Cta from "@/components/innerpages/features/Cta";
import Testimonials2 from "@/components/homes/Testimonials2";
import Brands2 from "@/components/common/Brands2";

export const metadata = {
    title:
      "Managed Cloud Services - IT Support",
    description:
      "IT Support services UK company in London for expert technology advice to help business growth! Trusted IT specialists by over 200+ companies For over 10 years.",
  };

export default function ManageCloud() {
    return (
        <>
            <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
                <Header />
                <div id="wrapper" className="wrap">
                    <Hero />
                    <Cta />
                    <div className="pt-6 xl:pt-9"></div>
                    <Faq2 />
                    <Testimonials2 />
                    <div
                        id="clients_brands"
                        className="clients-brands section panel overflow-hidden"
                    >
                        <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
                            <h5
                                className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
                                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
                            >
                                Trusted by well-known brands.
                            </h5>
                            <div
                                className="block-panel panel"
                                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                            >
                                <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                                    <Brands2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
