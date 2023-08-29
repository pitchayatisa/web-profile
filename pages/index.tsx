import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Inter } from "next/font/google";
import { aboutMe } from "./const/about-me/about-me";
import { experience } from "./const/experience/experience";
import { portfolio, btnPortfolio } from "./const/portfolio/portfolio";
import Aos from "aos";

const Footer = dynamic(() => import("./components/layouts/footer"), {
  ssr: false,
});
const Header = dynamic(() => import("./components/layouts/header"), {
  ssr: false,
});
const Navbar = dynamic(() => import("./components/layouts/navbar"), {
  ssr: false,
});
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [type, setType] = useState("all");
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative bg-transparent dark:isolate dark:bg-gray-900">
      {isClient ? (
        <>
          <Navbar />
          <Header />

          {/* Section About me */}
          <div
            id="about-me"
            className="mx-auto lg:container pt-8 lg:pt-24 pb-14"
          >
            <div className="relative isolate overflow-hidden px-6 pt-16 pb-16 sm:px-6 py-24 lg:flex md:gap-x-14 xl:gap-x-4 lg:px-8 lg:pt-0">
              <div className="mx-auto max-w-sm xl:max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-orange-500 sm:text-4xl">
                  About me
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-200">
                  {aboutMe.description}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a
                    href="#"
                    className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br shadow-2xl shadow-orange-400/100 dark:shadow-xl dark:shadow-orange-700/50 font-medium rounded-full px-5 py-2.5 text-center"
                  >
                    Download CV
                  </a>
                </div>
              </div>
              <div className="relative mt-16 h-[30rem] bg-white/5 ring-1 ring-white/10 shadow-2xl rounded-2xl lg:mt-8 overflow-y-auto pl-10 py-10">
                <ol className="relative border-l border-orange-200 dark:border-orange-400">
                  {experience.map((value, index) => (
                    <li className="mb-10 ml-4" key={index}>
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600"></div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-orange-500">
                        {value.position}
                      </h3>
                      <h3 className="text-base text-gray-900 dark:text-orange-500">
                        {value.company}
                      </h3>
                      <p className="mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                        {value.years}
                      </p>
                      <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">
                        <div
                          dangerouslySetInnerHTML={{ __html: value.detail }}
                        />
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Section Portfolio */}
          <div className="mx-auto lg:container pt-8 lg:pt-24 pb-14">
            <div
              id="portfolio"
              className="scroll-mt-10 relative isolate px-6 pt-16 sm:px-6 md:pt-18 lg:mt-[3rem] lg:px-8 lg:pt-0"
            >
              <div className="rounded-2xl py-12 md:py-18 px-6 md:px-0 text-center">
                <h2 className="text-3xl mb-4 font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
                  {"Client's get"}{" "}
                  <span className="text-orange-500">always exceptional</span>{" "}
                  works from me...
                </h2>
                <div className="flex items-center justify-center py-4 md:py-8 mb-4 flex-wrap">
                  {btnPortfolio.map((btn, index) => (
                    <button
                      key={index}
                      onClick={() => setType(btn.code)}
                      type="button"
                      className={`${
                        type === btn.code
                          ? "text-white bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br shadow-2xl shadow-orange-400/100 dark:shadow-xl dark:shadow-orange-700/50"
                          : "text-gray-900 dark:text-orange-500 dark:border border-orange-600 bg-gray-200 dark:bg-transparent"
                      } transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 font-medium rounded-full px-5 py-2.5 mr-3 mb-3 text-center`}
                    >
                      {btn.btnName}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                  {portfolio.map(
                    (port, _) =>
                      port.type === type &&
                      port.image.map((val, i) => (
                        <div
                          key={i}
                          onClick={() => router.push(`/portfolio/${val.slug}`)}
                          data-aos="fade-up"
                          className="relative shadow-2xl rounded-xl transition cursor-pointer transition ease-in-out duration-300 overflow-hidden"
                        >
                          <Image
                            className="h-auto max-w-full rounded-xl transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                            src={val.imgName}
                            alt="portfolio"
                            width={500}
                            height={500}
                          />
                        </div>
                      ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Section Skills */}
          <div
            id="skill"
            className="scroll-mt-12 mx-auto lg:container pt-8 lg:pt-24 pb-14"
          >
            <div className="relative isolate overflow-hidden px-6 pt-16 sm:px-6 md:pt-18 lg:mt-[3rem] lg:flex justify-between items-center gap-x-20 lg:gap-x-0 lg:px-8 lg:pt-0">
              <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  My <span className="text-orange-500">Skills</span>
                </h2>
                <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 place-items-center items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                  <div data-aos="fade-up">
                    <svg
                      height="508"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2500"
                      className="col-span-2 max-h-12 w-28 object-contain lg:col-span-1"
                      viewBox="0 0 394.00000000000006 79.433"
                    >
                      <path
                        d="M261.919.033h68.628V12.7h-27.224v66.639H289.71V12.7h-27.791V.033zM149.052.033V12.7h-55.01v20.377h44.239v12.667H94.042v20.928h55.01V79.34H80.43V12.7h-.006V.033h68.628zM183.32.066h-17.814l63.806 79.306h17.866l-31.907-39.626L247.127.126l-17.815.028-22.96 28.516L183.32.066zM201.6 56.715l-8.921-11.092-27.224 33.81h17.865l18.28-22.718z"
                        fill={theme === "dark" ? "#fff" : "#000"}
                      />
                      <path
                        clipRule="evenodd"
                        d="M80.907 79.339L17.015 0H0v79.306h13.612V16.952l50.195 62.387h17.1z"
                        fill={theme === "dark" ? "#fff" : "#000"}
                        fillRule="evenodd"
                      />
                      <path
                        d="M333.607 78.855a3.528 3.528 0 0 1-2.555-1.036c-.71-.691-1.061-1.527-1.052-2.518-.009-.963.342-1.79 1.052-2.481a3.528 3.528 0 0 1 2.555-1.036c.959 0 1.798.345 2.508 1.036.72.69 1.079 1.518 1.089 2.481a3.44 3.44 0 0 1-.508 1.79 3.675 3.675 0 0 1-1.319 1.282 3.403 3.403 0 0 1-1.77.482zM356.84 45.445h6.032v23.24c-.009 2.135-.471 3.962-1.374 5.498-.913 1.536-2.177 2.708-3.8 3.535-1.614.818-3.505 1.237-5.654 1.237-1.965 0-3.726-.355-5.294-1.046-1.568-.69-2.813-1.726-3.726-3.09-.923-1.363-1.375-3.063-1.375-5.098h6.042c.009.89.212 1.663.599 2.308a3.855 3.855 0 0 0 1.605 1.481c.691.346 1.485.519 2.379.519.969 0 1.799-.2 2.472-.61.673-.4 1.19-1 1.55-1.799.35-.79.535-1.772.544-2.935v-23.24zM387.691 54.534c-.147-1.409-.793-2.509-1.918-3.29-1.135-.79-2.601-1.182-4.4-1.182-1.263 0-2.351.191-3.255.564-.904.382-1.605.89-2.085 1.536-.479.645-.719 1.381-.738 2.208 0 .691.166 1.29.489 1.79.323.51.756.937 1.319 1.282a8.806 8.806 0 0 0 1.845.882c.682.236 1.365.436 2.047.6l3.145.772a21.74 21.74 0 0 1 3.662 1.182 12.966 12.966 0 0 1 3.163 1.872 8.384 8.384 0 0 1 2.214 2.726c.544 1.064.821 2.309.821 3.745 0 1.936-.498 3.635-1.504 5.108-1.005 1.463-2.453 2.608-4.353 3.435-1.891.818-4.178 1.236-6.871 1.236-2.601 0-4.87-.4-6.779-1.2-1.918-.79-3.413-1.954-4.492-3.48-1.079-1.527-1.66-3.39-1.743-5.58h5.977c.083 1.144.452 2.099 1.079 2.871.636.763 1.466 1.327 2.481 1.709 1.024.372 2.167.563 3.431.563 1.319 0 2.481-.2 3.486-.59.996-.391 1.78-.937 2.343-1.646.572-.7.858-1.526.867-2.472-.009-.863-.268-1.581-.766-2.145-.507-.563-1.208-1.036-2.103-1.417a21.606 21.606 0 0 0-3.154-1.027l-3.818-.964c-2.758-.7-4.944-1.763-6.54-3.19-1.604-1.427-2.398-3.317-2.398-5.69 0-1.944.535-3.653 1.615-5.116 1.069-1.463 2.536-2.6 4.39-3.408 1.863-.818 3.966-1.218 6.308-1.218 2.38 0 4.464.4 6.263 1.218 1.798.809 3.21 1.936 4.233 3.372 1.024 1.436 1.559 3.08 1.587 4.944h-5.848z"
                        fill={theme === "dark" ? "#fff" : "#000"}
                      />
                    </svg>
                  </div>
                  <Image
                    data-aos="fade-up"
                    className="col-span-2 max-h-16 w-36 object-contain lg:col-span-1"
                    src="/logo-framework/react-native.svg"
                    alt="react-native"
                    width={100}
                    height={100}
                  />
                  <Image
                    data-aos="fade-up"
                    className="col-span-2 max-h-12 w-36 object-contain lg:col-span-1"
                    src="/logo-framework/angular.svg"
                    alt="angular"
                    width={100}
                    height={100}
                  />
                  <Image
                    data-aos="fade-up"
                    className="col-span-2 max-h-12 w-36 object-contain lg:col-span-1"
                    src="/logo-framework/typescript.svg"
                    alt="typescript"
                    width={100}
                    height={100}
                  />
                  <Image
                    data-aos="fade-up"
                    className="col-span-2 max-h-12 w-36 object-contain lg:col-span-1"
                    src="/logo-framework/javascript.svg"
                    alt="javascript"
                    width={100}
                    height={100}
                  />
                  <Image
                    data-aos="fade-up"
                    className="col-span-2 max-h-12 w-28 object-contain lg:col-span-1"
                    src="/logo-framework/php.svg"
                    alt="php"
                    width={100}
                    height={100}
                  />
                  <Image
                    data-aos="fade-up"
                    className="col-span-2 max-h-12 w-36 object-contain lg:col-span-1"
                    src="/logo-framework/nodejs.svg"
                    alt="nodejs"
                    width={100}
                    height={100}
                  />
                  <Image
                    data-aos="fade-up"
                    className="col-span-2 max-h-12 w-36 object-contain lg:col-span-1"
                    src="/logo-framework/wordpress.svg"
                    alt="wordpress"
                    width={100}
                    height={100}
                  />
                  <Image
                    data-aos="fade-up"
                    className="col-span-2 max-h-12 w-32 object-contain lg:col-span-1"
                    src="/logo-framework/bootstrap.svg"
                    alt="bootstrap"
                    width={100}
                    height={100}
                  />
                  <div data-aos="fade-up">
                    <svg
                      viewBox="0 0 318 318"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2500"
                      height="2500"
                      className="col-span-2 max-h-16 w-44 object-contain lg:col-span-1"
                    >
                      <defs>
                        <path id="a" d="M0 0h318v318H0z" />
                        <mask
                          id="b"
                          fill="#fff"
                          height="318"
                          width="318"
                          x="0"
                          y="0"
                        >
                          <use />
                        </mask>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <use
                          mask="url(#b)"
                          stroke={theme === "dark" ? "#fff" : "#4a4a4a"}
                          strokeWidth="8"
                        />
                        <path
                          d="M44.284 229.416c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zm20.412 15.732l1.62 2.952c-1.368.972-3.096 1.44-4.788 1.44-3.744-.036-5.724-2.16-5.724-6.228v-10.044h-2.988v-3.312h2.988v-4.212l4.608-.54v4.752h4.428l-.468 3.312h-3.96v9.936c0 1.872.612 2.628 2.016 2.628.72 0 1.44-.216 2.268-.684zm19.62-15.192l-6.192 19.116c-1.44 4.464-4.248 7.344-9.9 7.776l-.468-3.348c3.78-.576 5.004-1.8 6.084-4.5h-1.584l-6.048-19.044h4.896l4.14 15.984 4.32-15.984zm7.308 19.584a7.55 7.55 0 0 0 3.06-.648l-.972-3.24c-.324.108-.648.18-1.08.18-.756 0-1.08-.432-1.08-1.332v-22.68l-4.608.504v22.32c0 3.132 1.764 4.896 4.68 4.896zm21.744-10.512c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm20.124-16.092l4.608.504V249h-4.068l-.324-2.412c-1.152 1.728-2.988 2.952-5.436 2.952-4.752 0-7.236-3.996-7.236-10.044 0-5.868 2.952-10.08 7.668-10.08 2.016 0 3.6.864 4.788 2.052zm-3.924 24.228c1.692 0 2.844-.828 3.924-2.448v-8.712c-1.008-1.224-2.088-2.016-3.636-2.016-2.376 0-3.96 2.016-3.96 6.588 0 4.896 1.404 6.588 3.672 6.588zM44.44 265.416c-5.472 0-8.892 4.14-8.892 10.224s3.42 9.9 8.928 9.9c2.448 0 4.428-.792 6.156-2.196l-2.052-2.916c-1.404.9-2.412 1.368-3.852 1.368-2.592 0-4.284-1.62-4.284-6.228 0-4.572 1.62-6.516 4.284-6.516 1.44 0 2.592.432 3.852 1.368l2.052-2.772c-1.8-1.548-3.708-2.232-6.192-2.232zm17.316 0c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm33.444-3.492c-2.52 0-4.284 1.224-5.724 3.204-.72-2.016-2.376-3.204-4.608-3.204-2.412 0-4.14 1.116-5.508 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.636-2.88 1.116 0 2.088.684 2.088 3.06V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.6-2.88 1.152 0 2.088.684 2.088 3.06V285h4.608v-13.788c0-3.6-2.016-5.796-5.04-5.796zm20.268 0c4.968 0 7.056 3.924 7.056 10.008 0 5.832-2.7 10.116-7.524 10.116-1.944 0-3.6-.684-4.788-2.088v8.892l-4.608.504v-26.892h4.032l.252 2.34c1.512-1.98 3.528-2.88 5.58-2.88zm-1.764 16.596c2.52 0 3.996-1.944 3.996-6.552 0-4.824-1.296-6.588-3.6-6.588-1.62 0-2.988 1.116-3.888 2.592v8.568c.9 1.332 2.052 1.98 3.492 1.98zm21.132-16.596c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm23.4-3.492c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm26.388 9.612c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm18.864-8.496c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm20.052 15.732c-.828.468-1.548.684-2.268.684-1.404 0-2.016-.756-2.016-2.628v-9.936h3.96l.468-3.312h-4.428v-4.752l-4.608.54v4.212h-2.988v3.312h2.988v10.044c0 4.068 1.98 6.192 5.724 6.228 1.692 0 3.42-.468 4.788-1.44zm10.224-15.732c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zM79.8 87.2l-36.2 22.5 36.2 22.9-3.7 4.6-37.7-23.6v-7.9l38.1-23.6m189.3 22.7v7.8l-37.7 23.6-3.7-4.9 36.1-22.6L224.4 86l3.2-4.9"
                          fill={theme === "dark" ? "#fff" : "#4a4a4a"}
                        />
                        <text
                          fill="#000"
                          fontFamily="AppleColorEmoji, Apple Color Emoji"
                          fontSize="100"
                          letterSpacing=".5"
                          transform="translate(38 44)"
                        >
                          <tspan x="70" y="100">
                            💅
                          </tspan>
                        </text>
                      </g>
                    </svg>
                  </div>
                  <div data-aos="fade-up">
                    <svg
                      height="308"
                      viewBox=".16 .18 799.8 98.72"
                      width="2500"
                      className="col-span-2 max-h-12 w-36 object-contain lg:col-span-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill={theme === "dark" ? "#fff" : "#000"}
                    >
                      <path d="m248.04 41.78h-14.42v27.79c0 7.41 4.89 7.29 14.42 6.83v11.23c-19.3 2.32-26.98-3.01-26.98-18.06v-27.79h-10.7v-12.05h10.7v-15.55l12.56-3.7v19.25h14.42zm54.98-12.05h12.56v57.9h-12.56v-8.34c-4.42 6.14-11.29 9.85-20.36 9.85-15.81 0-28.95-13.32-28.95-30.46 0-17.25 13.14-30.45 28.95-30.45 9.07 0 15.94 3.7 20.36 9.72zm-18.38 47.48c10.47 0 18.38-7.76 18.38-18.53s-7.91-18.53-18.38-18.53-18.37 7.76-18.37 18.53 7.9 18.53 18.37 18.53zm51.87-56.16c-4.42 0-8.03-3.71-8.03-7.99.01-1.05.22-2.09.62-3.06a7.997 7.997 0 0 1 4.34-4.32c.97-.4 2.02-.61 3.07-.61s2.09.21 3.07.61c.97.4 1.85.99 2.6 1.73.74.75 1.33 1.63 1.74 2.59.4.97.61 2.01.61 3.06 0 4.28-3.6 7.99-8.02 7.99zm-6.28 66.58v-57.9h12.56v57.9zm27.1 0v-84.53h12.56v84.53zm94.08-57.9h13.26l-18.26 57.9h-12.33l-12.09-39.02-12.21 39.02h-12.33l-18.26-57.9h13.26l11.28 39.95 12.21-39.95h11.98l12.09 39.95zm28.84-8.68c-4.42 0-8.02-3.71-8.02-7.99 0-1.05.21-2.09.61-3.06.41-.96 1-1.84 1.74-2.59.75-.74 1.63-1.33 2.6-1.73.98-.4 2.02-.61 3.07-.61a8.044 8.044 0 0 1 5.67 2.34c.75.75 1.34 1.63 1.74 2.59.41.97.62 2.01.62 3.06 0 4.28-3.61 7.99-8.03 7.99zm-6.28 66.58v-57.9h12.56v57.9zm80.02-35.55v35.55h-12.56v-34.27c0-8.81-5.12-13.44-13.03-13.44-8.26 0-14.77 4.87-14.77 16.68v31.03h-12.56v-57.9h12.56v7.41c3.84-6.02 10.12-8.91 18.03-8.91 13.02 0 22.33 8.8 22.33 23.85zm59.54-45.51h12.56v81.06h-12.56v-8.34c-4.42 6.14-11.28 9.85-20.35 9.85-15.82 0-28.96-13.32-28.96-30.46 0-17.25 13.14-30.45 28.96-30.45 9.07 0 15.93 3.7 20.35 9.72zm-18.37 70.64c10.46 0 18.37-7.76 18.37-18.53s-7.91-18.53-18.37-18.53c-10.47 0-18.38 7.76-18.38 18.53s7.91 18.53 18.38 18.53zm42.33-18.53c0-17.25 13.14-30.45 30.7-30.45 11.4 0 21.28 5.9 25.93 14.94l-10.81 6.25c-2.56-5.44-8.26-8.92-15.24-8.92-10.23 0-18.02 7.76-18.02 18.18s7.79 18.18 18.02 18.18c6.98 0 12.68-3.59 15.47-8.91l10.82 6.13c-4.89 9.15-14.77 15.06-26.17 15.06-17.56 0-30.7-13.32-30.7-30.46zm108.85 12.62c0 11.58-10.12 17.84-22.68 17.84-11.63 0-20-5.22-23.72-13.55l10.81-6.26c1.87 5.22 6.52 8.34 12.91 8.34 5.59 0 9.89-1.85 9.89-6.48 0-10.31-31.28-4.52-31.28-25.25 0-10.88 9.42-17.71 21.28-17.71 9.53 0 17.44 4.4 21.51 12.04l-10.58 5.91c-2.09-4.52-6.16-6.6-10.93-6.6-4.54 0-8.49 1.96-8.49 6.13 0 10.54 31.28 4.17 31.28 25.59zm53.62 0c0 11.58-10.12 17.84-22.68 17.84-11.63 0-20.01-5.22-23.73-13.55l10.82-6.26c1.86 5.22 6.51 8.34 12.91 8.34 5.58 0 9.88-1.85 9.88-6.48 0-10.31-31.28-4.52-31.28-25.25 0-10.88 9.42-17.71 21.28-17.71 9.54 0 17.45 4.4 21.52 12.04l-10.59 5.91c-2.09-4.52-6.16-6.6-10.93-6.6-4.53 0-8.49 1.96-8.49 6.13 0 10.54 31.29 4.17 31.29 25.59z" />
                      <path
                        d="m82.79.18c-22.03 0-35.81 10.97-41.32 32.91 8.27-10.97 17.91-15.09 28.93-12.35 6.28 1.57 10.77 6.11 15.75 11.14 8.1 8.18 17.48 17.66 37.96 17.66 22.03 0 35.8-10.97 41.31-32.91-8.26 10.97-17.9 15.08-28.92 12.34-6.28-1.56-10.78-6.11-15.75-11.13-8.1-8.19-17.48-17.66-37.96-17.66zm-41.32 49.36c-22.03 0-35.8 10.97-41.31 32.91 8.26-10.97 17.9-15.08 28.92-12.34 6.29 1.56 10.78 6.11 15.75 11.13 8.1 8.19 17.48 17.66 37.96 17.66 22.04 0 35.81-10.97 41.32-32.91-8.27 10.97-17.91 15.09-28.92 12.35-6.29-1.57-10.78-6.11-15.76-11.14-8.1-8.18-17.48-17.66-37.96-17.66z"
                        fill="#06b6d4"
                      />
                    </svg>
                  </div>
                  <Image
                    data-aos="fade-up"
                    className="col-span-2 max-h-12 w-14 object-contain lg:col-span-1"
                    src="/logo-framework/material-ui.svg"
                    alt="material-ui"
                    width={100}
                    height={100}
                  />
                  <div data-aos="fade-up">
                    <svg
                      width="2500"
                      height="1055"
                      viewBox="0 0 256 108"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin meet"
                      className="col-span-2 max-h-12 w-24 object-contain lg:col-span-1"
                    >
                      <path
                        d="M152.984 37.214c-5.597 0-9.765 2.748-9.765 9.362 0 4.983 2.747 8.443 9.463 8.443 5.693 0 9.56-3.355 9.56-8.65 0-6-3.46-9.155-9.258-9.155zm-11.19 46.701c-1.325 1.625-2.645 3.353-2.645 5.39 0 4.067 5.186 5.291 12.31 5.291 5.9 0 13.938-.414 13.938-5.9 0-3.261-3.867-3.462-8.753-3.768l-14.85-1.013zm30.113-46.394c1.828 2.34 3.764 5.597 3.764 10.276 0 11.292-8.851 17.904-21.667 17.904-3.259 0-6.209-.406-8.038-.914l-3.359 5.39 9.969.61c17.602 1.122 27.975 1.632 27.975 15.157 0 11.702-10.272 18.311-27.975 18.311-18.413 0-25.433-4.68-25.433-12.716 0-4.578 2.035-7.015 5.596-10.378-3.358-1.419-4.476-3.961-4.476-6.71 0-2.24 1.118-4.273 2.952-6.208 1.83-1.93 3.864-3.865 6.306-6.103-4.984-2.442-8.75-7.732-8.75-15.262 0-11.697 7.733-19.731 23.295-19.731 4.376 0 7.022.402 9.362 1.017h19.84v8.644l-9.361.713zM199.166 19.034c-5.8 0-9.157-3.36-9.157-9.161 0-5.793 3.356-8.95 9.157-8.95 5.9 0 9.258 3.157 9.258 8.95 0 5.801-3.357 9.161-9.258 9.161zM186.04 80.171v-8.033l5.19-.71c1.425-.205 1.627-.509 1.627-2.038V39.48c0-1.116-.304-1.832-1.325-2.134l-5.492-1.935 1.118-8.238h21.061V69.39c0 1.63.098 1.833 1.629 2.039l5.188.71v8.032H186.04zM255.267 76.227c-4.376 2.135-10.785 4.068-16.586 4.068-12.106 0-16.682-4.878-16.682-16.38V37.264c0-.61 0-1.017-.817-1.017h-7.12V27.19c8.955-1.02 12.513-5.496 13.632-16.585h9.666v14.45c0 .71 0 1.017.815 1.017h14.343v10.173H237.36v24.313c0 6.002 1.426 8.34 6.917 8.34 2.852 0 5.799-.71 8.24-1.626l2.75 8.954"
                        fill={theme === "dark" ? "#fff" : "#2F2707"}
                      />
                      <path
                        d="M104.529 49.53L58.013 3.017a6.86 6.86 0 0 0-9.703 0l-9.659 9.66 12.253 12.252a8.145 8.145 0 0 1 8.383 1.953 8.157 8.157 0 0 1 1.936 8.434L73.03 47.125c2.857-.984 6.154-.347 8.435 1.938a8.161 8.161 0 0 1 0 11.545 8.164 8.164 0 0 1-13.324-8.88L57.129 40.716l-.001 28.98a8.248 8.248 0 0 1 2.159 1.544 8.164 8.164 0 0 1 0 11.547c-3.19 3.19-8.36 3.19-11.545 0a8.164 8.164 0 0 1 2.672-13.328v-29.25a8.064 8.064 0 0 1-2.672-1.782c-2.416-2.413-2.997-5.958-1.759-8.925l-12.078-12.08L2.011 49.314a6.863 6.863 0 0 0 0 9.706l46.516 46.514a6.862 6.862 0 0 0 9.703 0l46.299-46.297a6.866 6.866 0 0 0 0-9.707"
                        fill="#DE4C36"
                      />
                    </svg>
                  </div>
                  <div data-aos="fade-up">
                    <svg
                      viewBox="0 -0.10000000000000853 960.6 264.50000000000006"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2500"
                      height="689"
                      className="col-span-2 max-h-12 w-24 object-contain lg:col-span-1"
                      fill={theme === "dark" ? "#fff" : "#000"}
                    >
                      <path d="M232.2 0v204l26.2.1V107h63.3V81.3h-63.3V25.7h82.4V0zM388.1 41.4c9.5 0 17.1-7.7 17.1-17.1s-7.7-17.1-17.1-17.1c-9.5 0-17.1 7.7-17.1 17.1s7.7 17.1 17.1 17.1zM374.8 67.1V204H401V67.1z" />
                      <path
                        clipRule="evenodd"
                        d="M498.3 63.1c-34.9 0-59.2 29.5-59.2 64.5s24.3 64.5 59.2 64.5c16 0 29.1-6.2 38.7-16.2V194c0 22.7-17.8 41.6-41.1 41.6-8.4 0-16.7-3.2-23.3-7.8l-13.2 22.8c10.5 6.8 23 10.7 36.4 10.7 37.2 0 67.3-30.1 67.3-67.3V67.1H537v12.2c-9.6-10-22.7-16.2-38.7-16.2zm-32.9 64.5c0-21.7 16.6-38.8 35.8-38.8s35.8 17.1 35.8 38.8-16.6 38.8-35.8 38.8-35.8-17.1-35.8-38.8z"
                        fillRule="evenodd"
                      />
                      <path d="M657.8 88.8c-15.5 0-28.1 13.2-28.1 28.7V204h-26.2V67.1h26.2v12.5c7.7-9.9 19-16.5 33.8-16.5 18.4 0 32.5 9.1 40.7 23.1 9.1-13.5 23.9-23.1 41.8-23.1 29.9 0 48.5 24.1 48.6 53.9v87h-26.2v-86.6c0-15.5-12.6-28.7-28.1-28.7s-28.1 13.2-28.1 28.7V204H686v-86.6c-.1-15.5-12.7-28.6-28.2-28.6z" />
                      <path
                        clipRule="evenodd"
                        d="M934.4 82.6c-11.7-12.1-27.7-19.5-46.2-19.5-39 0-66.8 33.1-66.8 72.5s27.7 72.5 66.8 72.5c18.5 0 34.5-7.5 46.2-19.5V204h26.2V67.1h-26.2zm-86.7 53c0-26.1 20-46.8 43.4-46.8 23.3 0 43.4 20.6 43.4 46.8 0 26.1-20 46.8-43.4 46.8-23.4-.1-43.4-20.7-43.4-46.8z"
                        fillRule="evenodd"
                      />
                      <path d="M0 0h176.3v264.4H0z" fill="none" />
                      <path
                        d="M88.1 132.2c0-24.3 19.7-44.1 44.1-44.1 24.3 0 44.1 19.7 44.1 44.1 0 24.3-19.7 44.1-44.1 44.1-24.3 0-44.1-19.8-44.1-44.1z"
                        fill="#1abcfe"
                      />
                      <path
                        d="M0 220.3c0-24.3 19.7-44.1 44.1-44.1h44.1v44.1c0 24.3-19.7 44.1-44.1 44.1-24.4 0-44.1-19.7-44.1-44.1z"
                        fill="#0acf83"
                      />
                      <path
                        d="M88.1 0v88.1h44.1c24.3 0 44.1-19.7 44.1-44.1 0-24.3-19.7-44.1-44.1-44.1H88.1z"
                        fill="#ff7262"
                      />
                      <path
                        d="M0 44.1c0 24.3 19.7 44.1 44.1 44.1h44.1V0H44.1C19.7 0 0 19.7 0 44.1z"
                        fill="#f24e1e"
                      />
                      <path
                        d="M0 132.2c0 24.3 19.7 44.1 44.1 44.1h44.1V88.1H44.1C19.7 88.1 0 107.9 0 132.2z"
                        fill="#a259ff"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section contact me */}
          <div
            id="contact-me"
            className="mx-auto lg:container pt-8 lg:pt-24 pb-10"
          >
            <div className="relative isolate px-6 pt-16 sm:px-6 md:pt-18 lg:mt-[3rem] lg:px-8 lg:pt-0">
              <div className="bg-white/5 ring-1 ring-white/10 shadow-2xl rounded-2xl py-12 md:py-18 px-6 md:px-0 text-center">
                <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
                  <span className="text-orange-500">Get in touch</span> with me
                </p>
                <p className="mt-6 text-gray-500 dark:text-gray-200">
                  If you have any questions, feedback, or need further
                  information,
                </p>
                <p className="text-gray-500 dark:text-gray-200">
                  please feel free to contact me. You can reach us by filling
                  out the contact form.
                </p>
                <div className="text-start mt-10">
                  <form
                    action="#"
                    method="POST"
                    className="mx-auto max-w-xl mt-6"
                  >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
                        >
                          Name
                        </label>
                        <div className="">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="nope"
                            className="bg-white/5 ring-1 ring-gray-300 dark:ring-white/10 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-inset placeholder:text-orange-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 dark:focus:ring-orange-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
                        >
                          Email
                        </label>
                        <div className="">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="off"
                            className="bg-white/5 ring-1 ring-gray-300 dark:ring-white/10 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-inset placeholder:text-orange-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 dark:focus:ring-orange-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
                        >
                          Message
                        </label>
                        <div className="">
                          <textarea
                            name="message"
                            id="message"
                            rows={4}
                            className="bg-white/5 ring-1 ring-gray-300 dark:ring-white/10 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-inset placeholder:text-orange-400 focus:ring-1 focus:ring-inset focus:ring-orange-500 dark:focus:ring-orange-500 sm:text-sm sm:leading-6"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 text-center">
                      <button
                        type="submit"
                        className="w-40 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br shadow-2xl shadow-orange-400/100 dark:shadow-xl dark:shadow-orange-700/50 font-medium rounded-full px-5 py-2.5 text-center"
                      >
                        {"Let's talk"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Section footer */}
          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
