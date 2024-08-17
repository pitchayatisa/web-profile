import { BtnPortfolio, Portfolio, PortfolioDetail } from "./portfolio.type";

export const portfolio: Array<Portfolio> = [
  {
    type: "all",
    image: [
      {
        link: "https://ketube.live/",
        imgName: "/portfolio/9.png",
      },
      {
        link: "https://otcgroups.com/",
        imgName: "/portfolio/8.png",
      },
      {
        link: "https://songserm.com/",
        imgName: "/portfolio/1.png",
      },
      {
        link: "crm",
        imgName: "/portfolio/2.png",
      },
      {
        link: "#",
        imgName: "/portfolio/3.png",
      },
      {
        link: "https://coinprotoday.com/",
        imgName: "/portfolio/4.png",
      },
      {
        link: "https://wisdommoney.co.th/",
        imgName: "/portfolio/5.png",
      },
      {
        link: "https://adavu.com/",
        imgName: "/portfolio/6.png",
      },
      {
        link: "hiromitsu",
        imgName: "/portfolio/7.png",
      },
    ],
  },
  {
    type: "ui",
    image: [
      {
        link: "hiromitsu",
        imgName: "/portfolio/7.png",
      },
    ],
  },
  {
    type: "website",
    image: [
      {
        link: "ketube",
        imgName: "/portfolio/9.png",
      },
      {
        link: "otc-exchange",
        imgName: "/portfolio/8.png",
      },
      {
        link: "thailand-ferry-company",
        imgName: "/portfolio/1.png",
      },
      {
        link: "defi-links",
        imgName: "/portfolio/3.png",
      },
      {
        link: "coinpro-today",
        imgName: "/portfolio/4.png",
      },
      {
        link: "wisdom-money",
        imgName: "/portfolio/5.png",
      },
      {
        link: "adavu",
        imgName: "/portfolio/6.png",
      },
    ],
  },
  {
    type: "mobile",
    image: [
      {
        link: "crm",
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
    slug: "ketube",
    title: "Ketube",
    link: "https://ketube.live/",
    isShow: true,
    img: "/portfolio/9.png",
  },
  {
    slug: "otc-exchange",
    title: "OTC EXCHANGE",
    link: "https://otcgroups.com/",
    isShow: true,
    img: "/portfolio/8.png",
  },
  {
    slug: "thailand-ferry-company",
    title: "Thailand Ferry Company",
    link: "https://songserm.com/",
    isShow: true,
    img: "/portfolio/1.png",
  },
  {
    slug: "crm",
    title: "CRM Mobile Application",
    subTitle: "(Freelance Work)",
    description:
      "Design ui and develop CRM system for mobile applications. It is an application used for tracking plans according to projects.",
    tool: [
      { nameTool: "React Native" },
      { nameTool: "Figma" },
      { nameTool: "Xcode" },
    ],
    isShow: false,
    img: "/portfolio/2.png",
    imgGroup: [
      { img: "/portfolio/crm/1.png" },
      { img: "/portfolio/crm/2.png" },
      { img: "/portfolio/crm/3.png" },
      { img: "/portfolio/crm/4.png" },
      { img: "/portfolio/crm/5.png" },
      { img: "/portfolio/crm/6.png" },
      { img: "/portfolio/crm/7.png" },
      { img: "/portfolio/crm/8.png" },
      { img: "/portfolio/crm/9.png" },
      { img: "/portfolio/crm/10.png" },
      { img: "/portfolio/crm/11.png" },
    ],
  },
  {
    slug: "defi-links",
    title: "DeFiLinks",
    link: "https://defilinks.io/",
    isShow: true,
    img: "/portfolio/3.png",
  },
  {
    slug: "coinpro-today",
    title: "Coinpro Today",
    link: "https://coinprotoday.com/",
    isShow: true,
    img: "/portfolio/4.png",
  },
  {
    slug: "wisdom-money",
    title: "Wisdom Money",
    link: "https://wisdommoney.co.th/",
    isShow: true,
    img: "/portfolio/5.png",
  },
  {
    slug: "adavu",
    title: "Adavu",
    link: "https://adavu.com/",
    isShow: true,
    img: "/portfolio/6.png",
  },
  {
    slug: "hiromitsu",
    title: "Hiromitsu",
    subTitle: "(Freelance Work)",
    description: "Ui design for hiromitsu company.",
    tool: [{ nameTool: "Figma" }],
    isShow: false,
    img: "/portfolio/7.png",
    imgGroup: [
      { img: "/portfolio/hiromitsu/1.png" },
      { img: "/portfolio/hiromitsu/2.png" },
      { img: "/portfolio/hiromitsu/3.png" },
      { img: "/portfolio/hiromitsu/4.png" },
      { img: "/portfolio/hiromitsu/5.png" },
      { img: "/portfolio/hiromitsu/6.png" },
      { img: "/portfolio/hiromitsu/7.png" },
      { img: "/portfolio/hiromitsu/8.png" },
      { img: "/portfolio/hiromitsu/9.png" },
    ],
  },
];
