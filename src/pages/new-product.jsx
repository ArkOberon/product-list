import { useState } from 'react'
import { createNewProduct } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const NewProduct = () => {

  const [name, saveName] = useState('')
  const [price, savePrice] = useState(0)

  const dispatch = useDispatch()

  const loading = useSelector((state) => state.products.loading)
  const error = useSelector(state => state.products.error)

  const addProduct = (product) => dispatch(createNewProduct(product))
  let navigate = useNavigate()

  const submitNewProduct = e => {
    e.preventDefault()

    if(name.trim() === '' || price <= 0) {
      return
    }

    addProduct({
      name,
      price
    })

    async function handleSubmit(event) {
      event.preventDefault();
      await submitForm(event.target);
      navigate("../success", { replace: true });
    }

    navigate('/', {replace: true})
  }

  return ( 
    <>
      <div className='row justify-content-center'>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Add New Product
              </h2>
              <form
                onSubmit={submitNewProduct}
              >
                <div className="form-group">
                  <label>Product Name</label>
                  <input 
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                    value={name}
                    onChange={e => saveName(e.target.value)}
                  />                  
                  <div className="form-group">
                    <label>Price</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="price"
                      value={price}
                      onChange={e => savePrice(e.target.value)}
                    />
                  </div>                  
                  <button
                    type="submit"
                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                  >
                    Add Product
                  </button>
                </div>
              </form>

              { loading ? <p>LOADING...</p> : null}
              {error ? 
                <p className='alert alert-danger p2 mt-4 text-center'>
                  Error Add Product
                </p>
                
                : null
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default NewProduct;