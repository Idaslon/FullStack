export interface ProductApi {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
  image: string;
}

export interface StockApi {
  id: number;
  amount: number;
}
