import React from 'react';
import Layout from '../../layout/Layout';
import { Col,Row } from 'react-bootstrap';

const About = () => {
  return (
    <Layout>
      <h3 className='text-center'>About Us</h3>
      <Row class="justify-content-center">
        <p className='text-center' style={{fontWeight:'bold'}}>Learning React, NodeJs and ExpressJS is so fun!</p>
      </Row>
    </Layout>
  );
};

export default About;