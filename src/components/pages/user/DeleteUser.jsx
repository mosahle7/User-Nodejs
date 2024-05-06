import React, { useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import * as userService from '../../../services/user.service';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import Layout from '../../layout/Layout'
import DelEmoji from '../../svg/DelEmoji';


const DeleteUser = () => {
    const {userId} = useParams();
    // const [user,setUser] = useState('');
    const navigate = useNavigate();



    // const fetchUser = async() => {
    //     try{
    //         const user = await userService.retrieveUser(userId);
    //         setUser(user);
    //     }
    //     catch (err){
    //         setUser(null);
    //     }

    // }

    const yoyo = async() => {
    try{
        const response = await userService.deleteUser(userId);
        if(response?.status){
        // const userName = response.user.name;
        toast.success(DelEmoji(userId));

        setTimeout(() => {
            navigate('/');
        },1000);
    }

        else{
        toast.warn(`User couldn't be deleted`);
        setTimeout(() => {
            navigate('/');
        },1000);
        }
    }
    catch(error){
        toast.error(`User ${userId} couldn't be removed !`);
        console.error(error.message);
        // const{
        //     data:{
        //         errors: {body},
        //     },
        // } = error.response;

        // const message = body[0]?.message;
        // toast.error(message[0].toUpperCase()+message.substring(1)+'!');
        setTimeout(() => {
            navigate('/');
        },1000);
    }
}
    // useEffect(() => {
    //     fetchUser();
    // },[userId]);

  return (
    <>
     <ToastContainer/>
    <Layout>
   {/* <h1 className='text-center'>{user.name}</h1> */}
   <h3 className='text-center'>Are you sure to remove user #{userId}?</h3>
   <div className='d-flex justify-content-between mx-6'>
   <Button variant='danger' onClick={yoyo}>Delete</Button>
    
    <Button variant='primary' as={NavLink} to='/'>Cancel</Button>
   </div>
   </Layout>
   </>
  );
};

export default DeleteUser;