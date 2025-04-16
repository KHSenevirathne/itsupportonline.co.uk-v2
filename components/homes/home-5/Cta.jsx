"use client";
import { openContactModal } from "@/utlis/toggleContactModal";
import Link from "next/link";

export default function Cta() {
  return (
    <div id="pre_cta" className="pre-cta section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:pb-9 xl:pt-0">
        <div className="container max-w-xl">
          <div className="section-inner">
            <div
              className="vstack items-center gap-2 xl:gap-3 max-w-400px lg:max-w-750px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h4 xl:h3 m-0">Success through technology</h2>
              <p className="fs-6 sm:fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
              Looking for expert IT support to keep your business running smoothly?
              </p>
              <div className="hstack justify-center gap-1 lg:gap-2 mt-1">
                <Link
                  href={`/services`}
                  className="btn btn-md rounded-default bg-white dark:bg-gray-700 dark:text-white border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs"
                  
                >
                  <i className="icon-narrow unicon-event-schedule fw-bold"></i>
                  <span>Our Services</span>
                </Link>
                <Link
                  href={`/free-consultation`}
                  className="btn btn-md btn-primary rounded-default text-white shadow-xs"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
