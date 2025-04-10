import Header2 from "@/components/headers/Header4";
import Footer2 from "@/components/footers/Footer4";
import Hero from "@/components/itservicespages/manageitservice/Hero";

export const metadata = {
    title:
        "Manage IT Services || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
    description:
        "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};

export default function ManageITService() {
    return (
        <>
            <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <Hero />
                </div>
                <Footer2 />
            </div>
        </>
    );
}
