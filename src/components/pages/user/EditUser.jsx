import React, { useEffect, useState } from 'react';
import { NavLink, useParams,useNavigate} from 'react-router-dom';
import * as userService from '../../../services/user.service';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Row, Col ,Button, Form} from 'react-bootstrap';
import Layout from '../../layout/Layout';


const EditUser = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [city,setCity] = useState("");
    const [country,setCountry] = useState("");

    const {userId} = useParams();
    const navigate = useNavigate();

    const poplateUserFields = async() => {
        try{
        const user = await userService.retrieveUser(userId)
        setName(user.name);
        setEmail(user.email);
        setCity(user.city);
        setCountry(user.country);
    } catch (err){
        console.error(err.message);
        toast.error(`User ${userId} couldn't be found!`);

        setTimeout(() => {
            navigate('/');
        }, 1000);


    }
}
    const submitForm = async(ev) => {
        ev.preventDefault();

        const payload = {
            name,email,city,country
        };

        try{
            const response = await userService.editUser(userId,payload);

            if (response?.status) {
                const userName = response.user.name;
                toast.success(`${userName} has been successfully updated`);

                setTimeout(() => {
                    navigate('/');
                }, 1000);
                
            }
            else{
                toast.warn(`User couldn't be updated`);

                setTimeout(() => {
                    navigate('/');
                }, 1000);
            }
        }
        catch(error) {
            const{
                data:{
                    errors: {body},
                },
            } = error.response;

            const message = body[0]?.message;
            toast.error(message[0].toUpperCase()+message.substring(1)+'!');

        }


    }
    useEffect(() => {
        poplateUserFields();
    },[userId]);

    return(
        <>
        <ToastContainer/>
        <Layout>
        <h3 className='text-center'>Edit User</h3>
        <Row className='justify-content-center'>
            <Col lg={6}>
            <Form>
           
            <Form.Group className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
              type="text"
              value={name}
              onChange={(elName)=> setName(elName.target.value)}/>
            </Form.Group> 

            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
              type="text"
              value={email}
              onChange={(elEmail)=> setEmail(elEmail.target.value)}/>
            </Form.Group> 

            <Form.Group className='mb-3'>
              <Form.Label>City</Form.Label>
              <Form.Control
              type="text"
              value={city}
              onChange={(elCity)=> setCity(elCity.target.value)}/>
            </Form.Group> 

            <Form.Group className='mb-3'>
              <Form.Label>Country</Form.Label>
              <Form.Control
              type="text"
              value={country}
              onChange={(elCountry)=> setCountry(elCountry.target.value)}/>
            </Form.Group> 

            <div className='d-flex justify-content-between'>
            <Button variant='primary' type='submit' className='' onClick={submitForm}>Save Changes</Button>
            <Button variant='primary' className='text-right' as = {NavLink} to='/'>Cancel</Button>
            </div>

            
            </Form>
            </Col>
        </Row>
        </Layout>
        </>
    );
    

    

    // const [user,setUser] = useState({});
    
    // const fetchUser = async () =>{
    //     try{
    //         const user = await userService.retrieveUser(userId);
    //         setUser(user);
    //     }

    //     catch(err) {
    //         setUser(null);
    //     }
    // }

    // useEffect(() => {
    //     fetchUser()
    // },[userId]);

    // return(
    //     <h3>{user.name}</h3>
    // )


};

export default EditUser;