import Image from "next/image";

export default function Footer() {
  return (
    <footer className="shadow-sm dark:shadow-none inset-x-0 top-0 z-50">
      <div className="mx-auto lg:container px-6 pt-2 pb-4 lg:px-8">
        <div className="w-full leading-10 mx-auto max-w-screen-xl justify-center md:justify-between text-center md:flex flex-col md:flex-row md:items-center ">
          <ul className="flex flex-wrap justify-center md:justify-start items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li className="mb-4">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <Image
                className="h-8 w-auto"
                src="/logo.png"
                alt="portfolio"
                width={100}
                height={100}
              />
            </li>
          </ul>
          <span className="text-sm mb-4 text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="hover:no-underline">
              Pitchayatisa.H
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
