import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD,
  START_DOWNLOAD_SUCCESS,
  START_DOWNLOAD_ERROR
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

export function getProducts() {
  return async (dispatch) => {
    dispatch( downloadProducts() )

    try {
      const response = await clientAxios.get('/products')
      dispatch(downloadProductsSuccess(response.data))
    } catch (error) {
      dispatch(downloadProductsError(error))
    }

  }
}

const downloadProducts = () => ({
  type: START_DOWNLOAD,
  payload: true
})

const downloadProductsSuccess = (products) => ({
  type: START_DOWNLOAD_SUCCESS,
  payload: products
})

const downloadProductsError = () => ({
  type: START_DOWNLOAD_ERROR,
  payload: true
})


