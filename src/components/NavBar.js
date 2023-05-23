import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg">
      <Container fluid className="px-5">
       <Navbar.Brand as={NavLink} to="/">
            <img
              src="https://danto-hugo.netlify.app//images/logo.svg"
              className="d-inline-block align-top"
              alt="Danto logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='px-4'>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/latest">Latest</Nav.Link>
            <Nav.Link as={NavLink} to="/authors">Authors</Nav.Link>
            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/page/about">About</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/page/contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className='ms-auto'>
            <i className="bi bi-search"></i>
            <input type="text" placeholder='Search'/>
            <NavLink to="/page/contact" className="py-2 px-4 ms-3">Get In Touch</NavLink>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar
