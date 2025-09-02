import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../redux/productSlice";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);
  const existingProduct = products.find((p) => p.id === Number(id));

  const [form, setForm] = useState({ title: "", price: "", image: "", category: "" });

  useEffect(() => {
    if (existingProduct) setForm(existingProduct);
  }, [existingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.price || !form.image || !form.category) return;
    if (id) {
      dispatch(updateProduct(form));
    } else {
      dispatch(addProduct(form));
    }
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Edit Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} className="form-control mb-2" placeholder="Title" />
        <input name="price" value={form.price} onChange={handleChange} className="form-control mb-2" placeholder="Price" />
        <input name="image" value={form.image} onChange={handleChange} className="form-control mb-2" placeholder="Image URL" />
        <input name="category" value={form.category} onChange={handleChange} className="form-control mb-2" placeholder="Category" />
        <button className="btn btn-primary">{id ? "Update" : "Add"} Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
