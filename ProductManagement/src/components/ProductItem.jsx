import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, updateProduct } from "../redux/productSlice";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(product);

  const handleUpdate = () => {
    dispatch(updateProduct(form));
    setIsEditing(false);
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          {isEditing ? (
            <>
              <input value={form.title} className="form-control mb-2"
                onChange={(e) => setForm({ ...form, title: e.target.value })} />
              <input value={form.price} type="number" className="form-control mb-2"
                onChange={(e) => setForm({ ...form, price: +e.target.value })} />
              <button className="btn btn-success me-2" onClick={handleUpdate}>Save</button>
              <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          ) : (
            <>
              <h5>{product.title}</h5>
              <p>₹{product.price}</p>
              <p>{product.category}</p>
              {isAuthenticated && (
                <>
                  <button className="btn btn-warning me-2" onClick={() => setIsEditing(true)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
