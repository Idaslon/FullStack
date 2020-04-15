export enum ProductsTypes {
  ADD_TO_CART = '@products/ADD_TO_CART',
  LOAD_REQUEST = '@products/LOAD_REQUEST',
  LOAD_SUCCESS = '@products/LOAD_SUCCESS',
  LOAD_FAILURE = '@products/LOAD_FAILURE',
}

export interface ProductApiResponse {
  id: number
  title: string
  price: number
  image: string
}

export interface Product extends ProductApiResponse{
  priceFormatted: string
}

export interface ProductsState {
  readonly data: Product[]
  readonly loading: boolean
  readonly error: boolean
}
