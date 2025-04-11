import Header2 from "@/components/headers/Header4";

import Footer2 from "@/components/footers/Footer4";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs6 from "@/components/blog/Blogs6";
export const metadata = {
  title:
    "Blog 3 Cols || IT Support - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "IT Support - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function Blog3ColsPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <BreadCumb />
          <Blogs6 />
          <Newsletter />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
