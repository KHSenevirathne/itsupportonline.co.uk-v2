import { ourservices } from "@/data/services";
import React from "react";
import Image from "next/image";

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
                                Managed IT Services
                            </h1>
                        </div>
                        <div className="sticky-scene panel vstack gap-4 sm:gap-6 xl:gap-8">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}