import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";

const ProductForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: "", price: "", category: "", image: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.price || !form.category || !form.image) return alert("Fill all fields");
    dispatch(addProduct({ ...form, price: +form.price }));
    setForm({ title: "", price: "", category: "", image: "" });
  };

  return (
    <div className="container mt-3">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="w-50">
        <input placeholder="Title" className="form-control mb-2"
          value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Price" type="number" className="form-control mb-2"
          value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <input placeholder="Category" className="form-control mb-2"
          value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <input placeholder="Image URL" className="form-control mb-2"
          value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default ProductForm;
