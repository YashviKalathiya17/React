import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { login } from "./redux/authSlice";

function App() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login()); // Simple login simulation
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<PrivateRoute><ProductForm /></PrivateRoute>} />
        <Route path="/login" element={<div className="container mt-3"><button className="btn btn-success" onClick={handleLogin}>Login</button></div>} />
      </Routes>
    </Router>
  );
}

export default App;
