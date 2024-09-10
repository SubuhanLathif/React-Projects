import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const MyNavbar = () => {
return (
    <Navbar bg="transparent" expand="lg" className='container-fluid p-3 fixed-top'>
    <Navbar.Brand as={Link} to="/" className='text-light'>
    <img src="../src/assets/react-bootstrap-logo.svg" alt="Site-Logo" width={40}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0' />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto gap-lg-5 gap-md-0">
    <Nav.Link as={Link} to="/" className='text-light'>Home</Nav.Link>
    <Nav.Link as={Link} to="/about" className='text-light'>About</Nav.Link>
    <Nav.Link as={Link} to="/services" className='text-light'>Services</Nav.Link>
    <Nav.Link as={Link} to="/contact" className='text-light'>Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
)
}
