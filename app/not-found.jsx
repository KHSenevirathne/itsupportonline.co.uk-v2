import Header from "@/components/header/Header";

import Footer from "@/components/Footer";
import Notfound from "@/components/otherPages/404";
export const metadata = {
  title:
    "Not Found - IT Support",
  description:
    "IT Support services UK company in London for expert technology advice to help business growth! Trusted IT specialists by over 200+ companies For over 10 years.",
};
export default function NotFoundPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header />
        <div id="wrapper" className="wrap">
          <Notfound />
        </div>
        <Footer />
      </div>
    </>
  );
}
