import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <div className="row">
        {items.map((p) => (
          <div key={p.id} className="col-md-4 mb-3">
            <ProductItem product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
