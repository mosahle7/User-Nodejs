import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
const NavigationBar = () => {
  return (
    <>
         <Navbar sticky="top" bg="primary" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Simple Client</Navbar.Brand>
          <Nav className="flex-grow-1 justify-content-end">
            {/* <Nav.Link as={NavLink} to="/">Home</Nav.Link> */}
            <Nav.Link as={NavLink} to="/create" className='text-white fw-bold fst-normal'>Create User</Nav.Link>
            {/* <Nav.Link as={NavLink} to="/">Home</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
};

export default NavigationBar;