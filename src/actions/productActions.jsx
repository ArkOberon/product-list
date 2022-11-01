import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR
} from '../types'

// Create new products
export function createNewProduct(product) {
  return() => {
    console.log(product)
  }
}