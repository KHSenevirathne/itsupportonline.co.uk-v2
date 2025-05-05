import React from "react";
import Image from "next/image";
import Accordion2 from "@/components/common/Accordion2";
import Link from "next/link";
import { accordionItems2 } from "@/data/faq";

export default function Hero() {
    return (
        <div id="hero_header" className="hero-header section panel overflow-hidden">
            <div
                className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
                data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
            >
                <div
                    className="position-absolute rotate-45"
                    style={{
                        top: "30%",
                        left: "18%",
                    }}
                >
                    <Image
                        className="w-32px text-gray-900 dark:text-white"
                        src="/assets/images/template/star-1.svg"
                        width={193}
                        height={216}
                        alt="star-1"
                        data-uc-svg=""
                    />
                </div>
                <div
                    className="position-absolute rotate-45"
                    style={{ top: "15%", right: "18%" }}
                >
                    <Image
                        className="w-24px text-gray-900 dark:text-white"
                        src="/assets/images/template/star-2.svg"
                        width={69}
                        height={95}
                        alt="star-2"
                        data-uc-svg=""
                    />
                </div>
            </div>
            <div className="section-outer panel pt-9 lg:pt-10 pb-6 xl:pb-9">
                <div className="container max-w-lg">
                    <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
                        <div
                            className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
                            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                        >
                            <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                            VoIP Phone Services
                            </h1>
                            <div className="w-1/2 max-w-sm relative">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1418 125" className="w-full">
                                    <path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z" fill="#000"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="panel">
                        <div className="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
                            <div data-anime="onview: -100; translateX: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;">
                                <figure className="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-bottom-end-0">
                                    <Image
                                        className="media-cover image"
                                        alt="image title"
                                        src="/assets/images/template/services-06.webp"
                                        width="1200"
                                        height="1200"
                                    />
                                </figure>
                            </div>
                            <div data-anime="onview: -100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;">
                                <div
                                    className="panel vstack items-start gap-2 lg:gap-3 p-3 md:p-4 lg:p-6 xl:p-8 xl:px-9 my-2 lg:my-0"
                                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                                >
                                    <h3 className="h3 lg:h2 m-0">
                                    What is VoIP?
                                    </h3>
                                    <p className="fs-6 lg:fs-5">
                                    VoIP stands for Voice over Internet Protocol. It is a technology that allows you to make voice calls using a broadband Internet connection instead of a regular phone line. This innovative approach to communication not only enhances voice quality but also offers a range of features that traditional telephony can’t match.
                                    </p>
                                    <div className="panel w-100 mt-2 lg:mt-4">
                                        <ul
                                            className="uc-accordion-divider uc-accordion-chevron gap-5 uc-accordion"
                                            data-uc-accordion="collapsible: false"
                                            style={{ "--divider-gap": "40px" }}
                                        >
                                            <Accordion2 items = {accordionItems2} />
                                        </ul>
                                    </div>
                                    <div className="vstack sm:hstack justify-center lg:justify-start gap-1 lg:gap-2 mt-1 lg:mt-2">
                                        <Link
                                            href={`/free-consultation`}
                                            className="btn btn-md lg:btn-lg btn-primary text-white"
                                        >
                                            Free Consultation
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container max-w-lg">
                    <div className="section-inner panel mt-2 sm:mt-4 lg:mt-8">
                        <div className="sticky-scene panel vstack gap-4 sm:gap-6 xl:gap-8">
                            <div
                                className="feature-item panel px-3 lg:px-4 py-4 rounded-2 bg-secondary dark:bg-gray-800"
                                data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                            >
                                <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                                    <div className="order-0 lg:order-1">
                                        <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                                            <Image
                                                src="/assets/images/template/services-06-inner.webp"
                                                width={780}
                                                height={728}
                                                alt="Share tools quickly and confidently in minutes"
                                            />
                                        </div>
                                    </div>
                                    <div className="order-1 lg:order-0 col-12 sm:col-5">
                                        <div className="panel vstack justify-center gap-4 h-100">
                                            <div>
                                                <div className="panel vstack gap-2">
                                                    <h3 className="h4 lg:h2 m-0">Why Choose VoIP from IT Support Online?</h3>
                                                    <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                                    The right managed IT support can solve your business problems and move your company forward.
                                                    </p>
                                                    <div className="vstack gap-1">
                                                        <div className="panel hstack gap-1">
                                                            <i className="icon icon-1 unicon-checkmark-outline text-primary" />
                                                            <span className="fs-6 md:fs-5 dark:text-white text-opacity-90">
                                                                Expert Advice from Certified IT Professionals
                                                            </span>
                                                        </div>
                                                        <div className="panel hstack gap-1">
                                                            <i className="icon icon-1 unicon-checkmark-outline text-primary" />
                                                            <span className="fs-6 md:fs-5 dark:text-white text-opacity-90">
                                                                Quick & Easy Booking Process
                                                            </span>
                                                        </div>
                                                        <div className="panel hstack gap-1">
                                                            <i className="icon icon-1 unicon-checkmark-outline text-primary" />
                                                            <span className="fs-6 md:fs-5 dark:text-white text-opacity-90">
                                                                Tailored Recommendations for Your Business
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}