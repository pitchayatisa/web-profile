import { menu } from "@/pages/const/menu/menu";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className=" fixed hidden dark:block left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#F87315] opacity-10 dark:opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <header className="fixed bg-white/50 dark:bg-transparent ring-1 dark:ring-0 ring-white/10 shadow-sm dark:shadow-none inset-x-0 top-0 z-10">
        <nav
          className="flex items-center mx-auto lg:container justify-between px-6 py-2 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#"
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">Your Company</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                className="h-8 w-auto"
                src="/logo.png"
                alt="portfolio"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className="flex cursor-pointer lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="-m-2.5 z-50 cursor-pointer inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 items-center">
            {menu.map((menus, index) => (
              <Link
                key={index}
                href={`${menus.link}`}
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 font-semibold leading-6 text-gray-900 hover:text-orange-500 dark:text-white dark:hover:text-orange-500"
              >
                {menus.menu}
              </Link>
            ))}
            <div className="flex items-center">
              <button
                className={`w-fit mr-6 relative hover:scale-110 active:scale-100 duration-200`}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#F87315"
                    className="w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#F87315"
                    className="w-6 h-6"
                  >
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                )}
              </button>
              <Link
                href="/#contact-me"
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br shadow-2xl shadow-orange-400/100 dark:shadow-xl dark:shadow-orange-700/50 font-medium rounded-full px-5 py-2.5 text-center"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
          <div
            className={`${
              isOpen
                ? "right-0 translate-x-0"
                : "-right-[100rem] translate-x-full"
            } ease-in-out duration-1000 fixed inset-y-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="portfolio"
                  width={100}
                  height={100}
                />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {menu.map((menus, index) => (
                    <Link
                      key={index}
                      href={`${menus.link}`}
                      onClick={() => setIsOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white  hover:text-orange-500"
                    >
                      {menus.menu}
                    </Link>
                  ))}

                  <Link
                    href="/#contact-me"
                    onClick={() => setIsOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white  hover:text-orange-500"
                  >
                    Contact me
                  </Link>
                  <button
                    className={`w-fit mr-6 relative hover:scale-110 active:scale-100 duration-200`}
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "light" ? (
                      <svg
                        onClick={() => setIsOpen(false)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#F87315"
                        className="w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        onClick={() => setIsOpen(false)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#F87315"
                        className="w-6 h-6"
                      >
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
