export interface ProductApiResponse {
  id: number
  price: number
  title: string
  image: string
  priceFormatted: string
}

export interface StockAmount {
  id: number
  amount: number
}

export interface ProductAmountResponse {
  data: StockAmount
}
