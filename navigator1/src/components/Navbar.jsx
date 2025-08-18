import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, NavLink } from 'react-router';

function CommanNavbar() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark p-4">
        <Container className='d-flex'>
          <div><Navbar.Brand href="#home" className='text-white'>React-Bootstrap</Navbar.Brand></div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white'/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to='/' className='me-2 navColor'>Home</NavLink>
                <NavLink to='/about' className='me-2 navColor'>AboutUs</NavLink>
                <NavLink to='/Faq' className='me-2 navColor'>FAQ</NavLink>
                <NavLink to='/product' className='me-2 navColor'>Product</NavLink>
                <NavLink to='/login' className='ms-5 navColor'><i class="fa-solid fa-user"></i></NavLink>
                <NavLink to='/contact' className='ms-2 navColor'><i class="fa-solid fa-phone"></i></NavLink>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default CommanNavbar;