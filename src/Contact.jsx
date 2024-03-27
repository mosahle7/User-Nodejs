import React from 'react';
import Layout from './components/layout/Layout';
import { Row, Col, Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
    <Layout>
        <Container>
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