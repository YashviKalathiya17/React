import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchname, setSearchname] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  const fetchUserdetail = async () => {
    try {
      const res = await fetch("http://localhost:3000/userdata");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserdetail();
  }, []);

  const adduser = () => {
    navigate("/adduser");
  };

  const DeleteUser = async (id) => {
    try {
      await fetch(`http://localhost:3000/userdata/${id}`, {
        method: "DELETE",
      });
      fetchUserdetail();
    } catch (error) {
      console.log(error);
    }
  };

  const searchAndFilter = users.filter((user) => {
    const matchesName =
      searchname === "" ||
      user.username.toLowerCase().includes(searchname.toLowerCase());
    const matchesCity =
      selectedCity === "" ||
      user.city.toLowerCase() === selectedCity.toLowerCase();
    return matchesName && matchesCity;
  });

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">User Management</h2>
        <Button
          onClick={adduser}
          variant="primary"
          className="fw-semibold shadow-sm"
        >
          + Add New User
        </Button>
      </div>

      {/* Search & Filter Card */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body d-flex flex-column flex-md-row gap-3">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder=" Search by name"
            value={searchname}
            onChange={(e) => setSearchname(e.target.value)}
          />

          <select
            className="form-select form-select-lg fw-semibold"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Filter by City</option>
            <option value="Surat">Surat</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Ahemdabad">Ahemdabad</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h5 className="fw-bold text-secondary mb-3">Users List</h5>
          <Table
            striped
            bordered
            hover
            responsive
            className="text-center align-middle"
          >
            <thead className="table-primary">
              <tr>
                <th>Profile</th>
                <th>DOB</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {searchAndFilter.length > 0 ? (
                searchAndFilter.map((ele) => (
                  <tr key={ele.id}>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src={ele.image}
                          alt=""
                          className="rounded-circle me-2 border"
                          width={40}
                          height={40}
                        />
                        <span className="fw-semibold">{ele.username}</span>
                      </div>
                    </td>
                    <td>{ele.dob}</td>
                    <td className="text-muted">{ele.email}</td>
                    <td>{ele.phoneno}</td>
                    <td>
                      <span className="badge bg-info text-dark">
                        {ele.city}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <Button
                          variant="outline-success"
                          size="sm"
                          onClick={() => navigate(`/edituser/${ele.id}`)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => DeleteUser(ele.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-danger fw-semibold py-3">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Home;
