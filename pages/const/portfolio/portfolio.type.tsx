export interface Portfolio {
  type: string;
  image: Image[];
}

export interface Image {
  imgName: string;
  slug: string;
}

export interface BtnPortfolio {
  btnName: string;
  code: string;
}

export interface PortfolioDetail {
  slug: string;
  title: string;
  description: string;
  link: string;
  isShow: boolean;
  img: string;
}


