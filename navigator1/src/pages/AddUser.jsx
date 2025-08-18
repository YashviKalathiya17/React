import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import { useNavigate } from 'react-router';

const AddUser = () => {

  const navigate = useNavigate();

  const [addUser, setAddUser] = useState({
    username: "",
    dob: "",
    email: "",
    phoneno: "",
    city: "",
    image: ""
  });

  const handleimage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAddUser({ ...addUser, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/userdata", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addUser)
    });
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="shadow-lg p-4 rounded-4 w-75">
        <h3 className="text-center mb-4 fw-bold text-primary">Add New User</h3>
        <Form onSubmit={handlesubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className='fw-semibold'>Username</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter Your Username"
                  value={addUser.username}
                  onChange={(e) => setAddUser({ ...addUser, username: e.target.value })} 
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className='fw-semibold'>Email Address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter Your Email"
                  value={addUser.email}
                  onChange={(e) => setAddUser({ ...addUser, email: e.target.value })} 
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className='fw-semibold'>Date of Birth</Form.Label>
                <Form.Control 
                  type="date"
                  value={addUser.dob}
                  onChange={(e) => setAddUser({ ...addUser, dob: e.target.value })} 
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className='fw-semibold'>Phone No.</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder="+91 00000 00000"
                  value={addUser.phoneno}
                  onChange={(e) => setAddUser({ ...addUser, phoneno: e.target.value })} 
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className='fw-semibold'>City</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter Your City"
                  value={addUser.city}
                  onChange={(e) => setAddUser({ ...addUser, city: e.target.value })} 
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className='fw-semibold'>Profile Image</Form.Label>
                <Form.Control 
                  type="file" 
                  onChange={handleimage} 
                  accept="image/*"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="I confirm the details are correct" required />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" className="px-5 py-2 rounded-pill fw-bold">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddUser;
