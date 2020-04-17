export interface ProductApiResponse {
  id: number
  price: number
  title: string
  image: string
  priceFormatted: string
}

export interface Product extends ProductApiResponse{
  amount: number
  subtotal: number
  subtotalFormatted: string
}

export interface ProductRefAmount {
  id: number
  amount: number
}

export interface ProductsState {
  readonly data: Product[]
  readonly loading: boolean
  readonly error: boolean
}

export enum ProductsTypes {
  ADD_TO_CART = '@products/ADD_TO_CART',
  UPDATE_AMOUNT = '@products/UPDATE_AMOUNT',
}

interface AddToCartAction {
  type: typeof ProductsTypes.ADD_TO_CART,
  payload: ProductApiResponse
}

interface UpdateAmountAction {
  type: typeof ProductsTypes.UPDATE_AMOUNT,
  payload: ProductRefAmount
}

export type ProductsActionsTypes = AddToCartAction | UpdateAmountAction;
