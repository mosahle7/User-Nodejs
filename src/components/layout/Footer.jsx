import React from 'react';
import { Col, Container ,Row} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
      <hr />
        <Row className='justify-content-center mt-5 mb-5'>
        <Col md={{span:3, offset:1}}>
        <NavLink to='/contact'><h4 className='text-decoration-underline '>Contact</h4></NavLink>
            
        </Col>
        <Col md={{span:3, offset:1}}>
        <NavLink to='/create'><h4 className='text-decoration-underline'>Add A User</h4></NavLink>
      
        </Col>
        <Col md={{span:3, offset:1}}>
        <NavLink to='/about'> <h4 className='text-decoration-underline'>About Us</h4></NavLink>
        </Col>
        </Row>
    </Container>
  );
};

export default Footer;