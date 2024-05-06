import React, { useState } from 'react';
import Layout from '../../layout/Layout';
import VForm from '../../visme/VForm';
import { ToastContainer, toast } from 'react-toastify';

const CreateUser = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [city, setCity] = useState('');
  // const [country, setCountry] = useState('');

  // const handleFormSubmit = ({ name, email, city, country }) => {
  //   setName(name);
  //   setEmail(email);
  //   setCity(city);
  //   setCountry(country);
  // };
  // console.log(name,email);

  // const submitForm = (event) => {
  //   event.preventDefault();
  //   // Add logic to submit the form data (if needed)
  // };

  const handleFormSubmit = () => {
    toast.success('Eureka !')
  }

  handleFormSubmit();
  console.log('mahn');
  return (
    <>
   
    <Layout>
    <ToastContainer />
      {/* <handleFormSubmit /> */}
      <VForm />
      {/* Render form elements using name, email, city, country states */}
      {/* <div className='text-white'>Name: {name}</div> */}
    </Layout>
    </>
  );
};

export default CreateUser;
