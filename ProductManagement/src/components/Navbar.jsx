import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">ProductApp</Link>
      <div className="ms-auto">
        <Link className="btn btn-light me-2" to="/">Products</Link>
        {isAuthenticated && <Link className="btn btn-light me-2" to="/add">Add Product</Link>}
        {isAuthenticated ? (
          <button className="btn btn-danger" onClick={() => dispatch(logout())}>Logout</button>
        ) : (
          <Link className="btn btn-success" to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
