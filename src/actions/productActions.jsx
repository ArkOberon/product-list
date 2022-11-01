import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR
} from '../types'
import clientAxios from '../config/axios'
import Swal from 'sweetalert2'

// Create new products
export function createNewProduct(product) {
  return async (dispatch) => {
    dispatch( addProduct() )

    try {
      await clientAxios.post('/prodcts', product)
      dispatch( addProductSuccess(product) )

      Swal.fire(
        'Excelent',
        'This product added correctly',
        'success'
      )

    } catch (error) {
      console.log(error)
      dispatch( addProductError(true) )

      Swal.fire({
        icon: 'error',
        title: 'Error add product',
        text: 'try again'
      })

    }
  }
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true
})

const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
})

const addProductError = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state 
})

