import Header4 from "@/components/headers/Header4";

import Footer4 from "@/components/footers/Footer4";
export const metadata = {
  title:
    "Home || IT Support - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "IT Support - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header4 />
        <div id="wrapper" className="wrap"></div>
        <Footer4 />
      </div>
    </>
  );
}
