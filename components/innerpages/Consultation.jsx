"use client";
import { features } from "@/data/menu";
import Image from "next/image";

export default function Contact1() {
    return (
        <div id="hero_header" className="hero-header section panel overflow-hidden">
            <div
                className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
                data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
            >
                <div
                    className="position-absolute rotate-45"
                    style={{ top: "30%", left: "18%" }}
                >
                    <Image
                        className="w-32px text-gray-900 dark:text-white"
                        width={193}
                        height={216}
                        alt="star-1"
                        data-uc-svg=""
                        src="/assets/images/template/star-1.svg"
                    />
                </div>
                <div
                    className="position-absolute  rotate-45"
                    style={{ top: "15%", right: "18%" }}
                >
                    <Image
                        className="w-24px text-gray-900 dark:text-white"
                        width={69}
                        height={95}
                        alt="star-2"
                        data-uc-svg=""
                        src="/assets/images/template/star-2.svg"
                    />
                </div>
            </div>
            <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
                <div className="container max-w-xl">
                    <div
                        className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
                        data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                    >
                        <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
                            <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                                Book Your Free IT Consultation Today
                            </h1>
                            <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                                Get expert insights and tailored advice to improve your IT infrastructure, boost security, and scale your business. Our specialists are here to help you make informed, strategic decisions—completely free of charge.
                            </p>
                        </div>
                        <div className="panel rounded-3 overflow-hidden bg-secondary dark:bg-gray-800">
                            <div className="panel row child-cols-12 lg:child-cols-6 g-0">
                                <div className="order-1 lg:order-0">
                                    <div className="panel overflow-hidden rounded-3 h-100 min-h-350px">
                                        <figure className="panel h-100 m-0 rounded">
                                            <canvas className="h-100 w-100" />
                                            <Image
                                                className="media-cover image"
                                                alt="Hero image"
                                                src="/assets/images/template/hero-about-02.jpg"
                                                width="1500"
                                                height="1000"
                                            />
                                        </figure>
                                        <div className="position-cover text-white vstack justify-end p-4 lg:p-6 xl:p-9">
                                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-80" />
                                            <div className="panel z-1">
                                                <div className="vstack gap-1">
                                                    <div className="panel hstack gap-1">
                                                        <i className="icon icon-1 unicon-checkmark-outline text-white" />
                                                        <span className="fs-6 md:fs-5 text-white dark:text-white text-opacity-90">
                                                            Expert Advice from Certified IT Professionals
                                                        </span>
                                                    </div>
                                                    <div className="panel hstack gap-1">
                                                        <i className="icon icon-1 unicon-checkmark-outline text-white" />
                                                        <span className="fs-6 md:fs-5 text-white dark:text-white text-opacity-90">
                                                            Quick & Easy Booking Process
                                                        </span>
                                                    </div>
                                                    <div className="panel hstack gap-1">
                                                        <i className="icon icon-1 unicon-checkmark-outline text-white" />
                                                        <span className="fs-6 md:fs-5 text-white dark:text-white text-opacity-90">
                                                            Tailored Recommendations for Your Business
                                                        </span>
                                                    </div>
                                                    <div className="panel hstack gap-1">
                                                        <i className="icon icon-1 unicon-checkmark-outline text-white" />
                                                        <span className="fs-6 md:fs-5 text-white dark:text-white text-opacity-90">
                                                            Clear Action Plan Provided After the Session
                                                        </span>
                                                    </div>
                                                    <div className="panel hstack gap-1">
                                                        <i className="icon icon-1 unicon-checkmark-outline text-white" />
                                                        <span className="fs-6 md:fs-5 text-white dark:text-white text-opacity-90">
                                                            Confidential & Professional Guidance
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-0 lg:order-1">
                                    <form
                                        onSubmit={(e) => e.preventDefault()}
                                        className="vstack gap-2 p-3 sm:p-6 xl:p-8"
                                    >
                                        <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                                            Take the first step toward smarter IT solutions. Our free consultation helps you identify challenges, explore opportunities, and build a tech strategy that supports your business growth—no strings attached.
                                        </p>
                                        <div className="row child-cols-12 sm:child-cols-6 g-2">
                                            <div>
                                                <input
                                                    className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                                                    type="text"
                                                    placeholder="Full name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                                                    type="email"
                                                    placeholder="Your email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row child-cols-12 sm:child-cols-6 g-2">
                                            <div>
                                                <input
                                                    className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                                                    type="text"
                                                    placeholder="Phone Number"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                                                    type="email"
                                                    placeholder="Company Name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <select
                                            className="form-control w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                                            required
                                            defaultValue=""
                                        >
                                            <option value="" disabled>I'm Interested In</option>
                                            {features.map((service, index) => (
                                                <option key={index} value={service.title}>
                                                    {service.title}
                                                </option>
                                            ))}
                                        </select>

                                        <textarea
                                            className="form-control min-h-150px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                                            placeholder="Your message.."
                                            required
                                            defaultValue={""}
                                        />
                                        <button
                                            className="btn btn-primary btn-md text-white mt-2"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
