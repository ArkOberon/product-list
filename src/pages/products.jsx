const Products = () => {
  return ( 
    <>
      <h2 className="text-center my-5">Product List</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
      </table>
    </>
  );
}
 
export default Products;