import axios from 'axios';
import * as userService from '../../services/user.service';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from '../layout/Layout';
import { useNavigate } from 'react-router-dom';
import CreateEmoji from '../svg/CreateEmoji';

const CreateUser = () => {
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const navigate= useNavigate();

  useEffect(() => {
    console.log('State changed',name,email,city,country);
  },[name,email,city,country]);

  const submitForm = async (ev) => {
    ev.preventDefault();

    const payload = {
      name, email, city, country,
    };


    try {
      const response = await userService.createUser(payload);

      if (response?.status){
        const getUserId = response?.user?.id;
        toast.success(CreateEmoji(getUserId));

        setName('')
        setEmail('')
        setCity('')
        setCountry('')
        
        setTimeout(() => {
          navigate('/');
        },1000);
      }
      else{
       toast.warn('An error has occurred. ')
      }
    } catch (error) {
      
      const {
        data: {
        errors : {body},
        }
      } = error.response;
      const message=body[0]?.message
      toast.error(message[0].toUpperCase() + message.substring(1) + '!');
      // console.error(error.message);
      // console.error(error.response)
  }
}
  return (
    <>
    <Layout>
      <Row className='justify-content-center'>
        <Col lg={6}>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
              type="text"
              placeholder="Name"
              onChange={(elName)=> setName(elName.target.value)}/>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
              type="text"
              placeholder=" Email"
              onChange={(elEmail)=> setEmail(elEmail.target.value)}/>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>City</Form.Label>
              <Form.Control
              type="text"
              placeholder="City"
              onChange={(elCity)=> setCity(elCity.target.value)}/>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Country</Form.Label>
              <Form.Control
              type="text"
              placeholder="Country"
              onChange={(elCountry)=> setCountry(elCountry.target.value)}/>
            </Form.Group>
            <ToastContainer />
            <Button variant='primary' type='submit' onClick={submitForm}>
              Add User
            </Button>

          </Form>
        </Col>

      </Row>

      </Layout>
    </>
  );
};

export default CreateUser;