import { Link } from 'react-router-dom'

const Product = ({products}) => {

  const { name, price, id } = products

  return ( 
    <tr>
      <td>{name}</td>
      <td><span className="font-weight-bold">€ {price}</span></td>
      <td className="accciones">
          <Link to={`/products/edit/${id}`} className='btn btn-primary mr-2'>
            Edit
          </Link>
          <button
            type='button'
            className='btn btn-danger'
          >
            Eliminar
          </button>
      </td>
    </tr>
  )
}
 
export default Product;