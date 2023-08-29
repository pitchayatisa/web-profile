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
  },
  {
    slug: "crm",
    title: "CRM Application",
    description: "ui",
    link: "",
    isShow: false,
  },
  {
    slug: "defi-links",
    title: "DeFiLinks",
    description: "ui",
    link: "https://defilinks.io/",
    isShow: true,
  },
  {
    slug: "coinpro-today",
    title: "Coinpro Today",
    description: "ui",
    link: "https://coinprotoday.com/",
    isShow: true,
  },
  {
    slug: "wisdom-money",
    title: "Wisdom Money",
    description: "website",
    link: "https://wisdommoney.co.th/",
    isShow: true,
  },
  {
    slug: "adavu",
    title: "Adavu",
    description: "mobile",
    link: "https://adavu.com/",
    isShow: true,
  },
  {
    slug: "hiromitsu",
    title: "Hiromitsu",
    description: "mobile",
    link: "",
    isShow: false,
  },
];
