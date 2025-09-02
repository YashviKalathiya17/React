import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.products);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let filteredProducts = list
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter(p => filter ? p.category === filter : true);

  if (sort === "low") filteredProducts.sort((a, b) => a.price - b.price);
  if (sort === "high") filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <div className="container mt-3">
      <h2>Product List</h2>

      <div className="d-flex mb-3">
        <input className="form-control me-2" placeholder="Search by title"
          value={search} onChange={(e) => setSearch(e.target.value)} />
        <select className="form-control me-2" onChange={(e) => setFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>
        <select className="form-control" onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="row">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
