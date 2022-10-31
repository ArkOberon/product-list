import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Products from '../pages/products'
import NewProduct from '../pages/new-product'
import EditProduct from '../pages/edit-product'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Products />
      },
      {
        path: '/products/new',
        element: <NewProduct />
      },
      {
        path: '/products/edit/:id',
        element: <EditProduct />
      }
    ]       
  }
])

export default router