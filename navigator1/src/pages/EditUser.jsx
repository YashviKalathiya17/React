
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
const EditUser = () => {
  const navigate = useNavigate()

  const { id } = useParams();

  const [user, setUser] = useState({
    username: "",
    dob: "",
    email: "",
    phoneno: "",
    city: "",
    image: ""
  });

  console.log('EditUser', user);

  const loadUserWithId = async () => {
    const res = await fetch(`http://localhost:3000/userdata/${id}`);
    const data = await res.json();
    setUser(data);
  };
  const edituser = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/userdata/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    navigate("/");
  };

  const handleimage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, image: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }
  useEffect(() => {
    loadUserWithId();
  }, []);
  return (
    <>
      <Form className='w-50 mx-auto' onSubmit={edituser}>
        <Button className='bg-transparent text-dark border fw-bold mt-5 w-100 mx-auto'>Edit Your Details </Button>
        <div className='d-flex justify-content-between gap-2'>
          <div className='w-100'>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold'>UserName</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })} />
            </Form.Group>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </Form.Group>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold'>Date of Birth</Form.Label>
              <Form.Control type="Date" placeholder="Enter Your Username"
                value={user.dob}
                onChange={(e) => setUser({ ...user, dob: e.target.value })} />
            </Form.Group>
          </div>
          <div className='w-100'>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold'>Phone No.</Form.Label>
              <Form.Control type="tel" placeholder="+91 00000 00000" 
              value={user.phoneno}
              onChange={(e) => setUser({ ...user, phoneno: e.target.value })} />
            </Form.Group>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold'>City</Form.Label>
              <Form.Control type="text" placeholder="Enter Your City" 
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })} />
            </Form.Group>
            <Form.Group className="mt-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold'>Image </Form.Label>
              <Form.Control type="file" onChange={handleimage} />
            </Form.Group>
          </div>
        </div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className='text-center'>
          <Button variant="primary" type="submit" className='w-50'>
            Edit
          </Button>
        </div>
      </Form>
    </>
  )
}

export default EditUser