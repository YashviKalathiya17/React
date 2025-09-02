import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import Auth from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/add" element={<PrivateRoute><ProductForm /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><ProductForm /></PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;
