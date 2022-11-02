import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../actions/productActions';
import Product from '../components/Product';

const Products = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const loadProducts = () => dispatch( getProducts() )
    loadProducts()
  }, [])

  const products = useSelector((state)=> state.products.products)
  const error = useSelector((state) => state.products.error)
  const loading = useSelector((state) => state.products.loading)

  return ( 
    <>
      <h2 className="text-center my-5">Product List</h2>
      {error ? 
        <p className='font-weight-bold alert alert-danger text-center mt-4'>
          Error with products
        </p> : null
      }
      { loading ? <p className='text-center'>Loading...</p> : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          { products.length === 0 ? 'Products not exist' :
              products.map(products => (
                <Product 
                  key={products.id}
                  products={products}
                />
              ))
          }
        </tbody>
      </table>
    </>
  );
}
 
export default Products;