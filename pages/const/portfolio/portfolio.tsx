import { BtnPortfolio, Portfolio, PortfolioDetail } from "./portfolio.type";

export const portfolio: Array<Portfolio> = [
  {
    type: "all",
    image: [
      {
        slug: "thailand-ferry-company",
        imgName: "/portfolio/1.png",
      },
      {
        slug: "crm",
        imgName: "/portfolio/2.png",
      },
      {
        slug: "defi-links",
        imgName: "/portfolio/3.png",
      },
      {
        slug: "coinpro-today",
        imgName: "/portfolio/4.png",
      },
      {
        slug: "wisdom-money",
        imgName: "/portfolio/5.png",
      },
      {
        slug: "adavu",
        imgName: "/portfolio/6.png",
      },
      {
        slug: "hiromitsu",
        imgName: "/portfolio/7.png",
      },
    ],
  },
  {
    type: "ui",
    image: [
      {
        slug: "hiromitsu",
        imgName: "/portfolio/7.png",
      },
    ],
  },
  {
    type: "website",
    image: [
      {
        slug: "thailand-ferry-company",
        imgName: "/portfolio/1.png",
      },
      {
        slug: "defi-links",
        imgName: "/portfolio/3.png",
      },
      {
        slug: "coinpro-today",
        imgName: "/portfolio/4.png",
      },
      {
        slug: "wisdom-money",
        imgName: "/portfolio/5.png",
      },
      {
        slug: "adavu",
        imgName: "/portfolio/6.png",
      },
    ],
  },
  {
    type: "mobile",
    image: [
      {
        slug: "crm",
        imgName: "/portfolio/2.png",
      },
    ],
  },
];

export const btnPortfolio: Array<BtnPortfolio> = [
  { btnName: "All Work", code: "all" },
  { btnName: "UI Design", code: "ui" },
  { btnName: "Website", code: "website" },
  { btnName: "Mobile", code: "mobile" },
];

export const portfolioDetail: Array<PortfolioDetail> = [
  {
    slug: "thailand-ferry-company",
    title: "Thailand Ferry Company",
    description: "all",
    link: "https://songserm.com/",
    isShow: true,
    img: "/portfolio/1.png"
  },
  {
    slug: "crm",
    title: "CRM Application",
    description: "ui",
    link: "",
    isShow: false,
    img: "/portfolio/2.png"
  },
  {
    slug: "defi-links",
    title: "DeFiLinks",
    description: "ui",
    link: "https://defilinks.io/",
    isShow: true,
    img: "/portfolio/3.png"
  },
  {
    slug: "coinpro-today",
    title: "Coinpro Today",
    description: "ui",
    link: "https://coinprotoday.com/",
    isShow: true,
    img: "/portfolio/4.png"
  },
  {
    slug: "wisdom-money",
    title: "Wisdom Money",
    description: "Wisdom Money Co., Ltd. is an advertising and public relations company that produces online media. with a combination of technology To get results that are new and unique and for the best efficiency, fully integrated",
    link: "https://wisdommoney.co.th/",
    isShow: true,
    img: "/portfolio/5.png"
  },
  {
    slug: "adavu",
    title: "Adavu",
    description: "Introducing the first marketplace for investing in hotels, Vacation Home Portfolio Properties & residential properties with stable passive income.",
    link: "https://adavu.com/",
    isShow: true,
    img: "/portfolio/6.png"
  },
  {
    slug: "hiromitsu",
    title: "Hiromitsu",
    description: "mobile",
    link: "",
    isShow: false,
    img: "/portfolio/7.png"
  },
];
