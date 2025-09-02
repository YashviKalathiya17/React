import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/productSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">Category: {product.category}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/edit/${product.id}`} className="btn btn-warning">Edit</Link>
          <button className="btn btn-danger" onClick={() => dispatch(deleteProduct(product.id))}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
