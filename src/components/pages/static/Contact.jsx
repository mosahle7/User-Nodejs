import React from 'react';
import Layout from '../../layout/Layout';
import { Row, Col, Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
    <Layout>
        <Container>
          <h3 className='text-center'>Contact us</h3>
    <Row className='justify-content-center'>
    <Col md={4}>
        Contact me at <span className='fst-italic fw-bold'>sahlethappi@gmail.com</span>
    </Col>
    </Row>
    </Container>
    </Layout> 
    </>
  );
};

export default Contact;