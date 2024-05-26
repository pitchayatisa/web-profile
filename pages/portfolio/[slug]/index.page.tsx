import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { portfolioDetail } from "../../const/portfolio/portfolio";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

const Navbar = dynamic(() => import("../../components/layouts/navbar.page"), {
  ssr: false,
});

export default function PortfolioDetail() {
  const router = useRouter();

  return (
    <div className="relative bg-transparent dark:isolate dark:bg-gray-900">
      <Navbar />
      {portfolioDetail.map(
        (detail, index) =>
          detail.slug === router.query.slug && (
            <div key={index} className="mx-auto lg:container pb-14">
              <div className="relative isolate pt-8 pt-24 lg:pt-24 z-0">
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
                    <svg
                      x="50%"
                      y="-1"
                      className="overflow-visible fill-gray-50"
                    >
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

                {/* <!-- Image gallery --> */}
                <div className="mx-auto max-w-2xl mt-10 lg:mt-0 px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid lg:gap-x-8 lg:px-8">
                  <Link
                    href="/#portfolio"
                    className="w-fit mb-4 flex transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-orange-500 font-medium rounded-full pl-2 pr-5 py-1.5 text-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                    Back
                  </Link>
                  <div className="flex justify-center  px:4 pb-4 sm:pb-10 aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden">
                    <Carousel
                      autoPlay={true}
                      interval={3000}
                      showThumbs={false}
                      infiniteLoop={true}
                      showStatus={false}
                      showArrows={false}
                      stopOnHover={false}
                    >
                      {detail.imgGroup?.map((img, index) => (
                        <div key={index}>
                          <img
                            src={`${img.img}`}
                            alt={`${detail.description}`}
                            className=" h-[550px] w-full object-contain"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>

                {/* <!-- Product info --> */}
                <div className="mx-auto max-w-2xl px-4 pt-2 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-2">
                  <div className="lg:col-span-2 lg:pr-8 flex items-center">
                    <h1 className="text-2xl mr-3 font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-3xl">
                      {detail.title}
                    </h1>
                    {detail.isShow && (
                      <div className="w-9 h-9 cursor-pointer flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br shadow-2xl shadow-orange-400/100 dark:shadow-xl dark:shadow-orange-700/50 font-medium rounded-full">
                        <Link href={detail?.link} target="_blank">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                            />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>
                  <div className="py-10 pt-4 lg:col-span-12 lg:col-start-1 lg:pb-16 lg:pt-6">
                    {/* <!-- Description and details --> */}
                    <div>
                      <h3 className="sr-only">Description</h3>
                      <div className="space-y-6">
                        <p className="indent-14 text-base text-gray-900 dark:text-gray-300">
                          {detail.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h3 className="font-medium text-gray-900 dark:text-orange-500">
                        Tool
                      </h3>

                      <div className="mt-4">
                        <ul
                          role="list"
                          className="list-disc space-y-2 pl-4 text-sm"
                        >
                          {detail.tool?.map((tool, index) => (
                            <li
                              key={index}
                              className="text-gray-400 dark:text-orange-500"
                            >
                              <span className="text-gray-600 dark:text-gray-300">
                                {tool.nameTool}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}
