import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';


function Menubar() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link style={{textDecoration: 'none',color:'black',marginRight:'5px'}} to="/">Home</Link>
          <Link style={{textDecoration: 'none',color:'black',marginRight:'5px'}} to="/products">Products</Link>
          <Link style={{textDecoration: 'none',color:'black',marginRight:'5px'}} to="/product-category">Category</Link>
          <Link style={{textDecoration: 'none',color:'black' ,marginRight:'5px'}} to="wishcartorder">Cart</Link>
          <Link style={{textDecoration: 'none',color:'black' ,marginRight:'5px'}} to="register">Register</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Menubar;
