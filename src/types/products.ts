export type Product = {
  imgSrc: string;
  name: string;
  price: number;
  priceMinor?: number;
  rangePrice?: number;
  rangePriceMinor?: number;
};

export type ProductsList = Product[];
