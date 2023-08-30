import React, { useEffect, useState } from "react";
import { introduction } from "@/pages/const/introduction/introduction";
import Atropos from "atropos/react";
import Aos from "aos";

export default function Header() {
  useEffect(() => {
    // Aos.init();
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="mx-auto lg:container pb-14">
        <div className="relative isolate px-6 pt-8 lg:pt-[13rem] sm:px-6 lg:flex justify-between items-center lg:gap-x-20 lg:px-8 lg:pt-0">
          <div className="absolute dark:hidden inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width="200"
                  height="200"
                  x="50%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth="0"
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
            <h2 className="font-bold tracking-tight text-gray-900 dark:text-gray-200 text-4xl">
              HI THERE!
            </h2>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-orange-500">
              <span className="text-gray-900 dark:text-gray-200">{"I'm"}</span>{" "}
              Pitchayatisa
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-200">
              {introduction.description}
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br shadow-2xl shadow-orange-400/100 dark:shadow-xl dark:shadow-orange-700/50 font-medium rounded-full px-5 py-2.5 text-center "
              >
                Hire Me
              </a>
            </div>
          </div>
          <div className="relative mt-10 lg:mt-0 w-full flex justify-center block m-auto -scale-x-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Atropos className="" shadowScale={1} shadowOffset={50}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="business-2.webp"
                alt="resume"
                data-atropos-offset="3"
                data-aos="fade-right"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="chat.webp"
                alt="resume"
                data-atropos-offset="5"
                data-aos="fade-down-left"
                className="absolute -top-6 2xl:right-60 xl:right-48 lg:right-24 2xl:w-20 xl:w-16 lg:w-12 hidden lg:block"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="msg.webp"
                alt="resume"
                data-atropos-offset="5"
                data-aos="fade-down-right"
                className="absolute -top-16 left-0 2xl:w-40 xl:w-32 lg:w-24 hidden lg:block"
              />
            </Atropos>
          </div>
        </div>
      </div>
    </>
  );
}
