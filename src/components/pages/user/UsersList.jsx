import React, { useState, useEffect } from "react";
import axios from "axios";
import * as userService from '../../../services/user.service';
import { Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import Layout from "../../layout/Layout";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import UListEmoji from "../../svg/UListEmoji";
import {BulletList, Code, Facebook, Instagram} from 'react-content-loader'
import UserCard from "../../user/UserCard";

const gradientStyle = {
    // background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Adjust colors as needed
    background: 'linear-gradient(to right,#02656e,#09c7d9)',
    padding: '20px', // Add padding as needed
    borderRadius: '10px', // Add border radius as needed
    // color: '#fff', // Set text color
    height: '100vh',
    width: '100%',
  };

const UsersList = () => {
    
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchUsers = async () => {
        // const res = await fetch(`${getAllUsersUrl}`);
        // console.log(res.json());
        try{
            setIsLoading(true);
            const users = await userService.usersList();
            setUsers(users);
        }
        catch(error){
            toast.error(<UListEmoji/>);
        }
        finally{
            setIsLoading(false);
        }

    }
 
    useEffect(() => { 
        fetchUsers();
    }, []);


return (
    <>
    <div style={gradientStyle}>
    <ToastContainer/>
    <Layout>
        {isLoading ? (
            <>
            {/* <div className="text-center">
            <Spinner className="mt-5"animation="border"  variant="success"/>
            <span className="d-block mt-2 fw-bold">Loading</span>
            </div> */}
            <BulletList
            //  backgroundColor={'white'}
            width={400}
            height={200}
            // viewBox="0 0 100 100"
            style={{ width: '100%', height:'60%'}}
            />

            </>
        ):
        Object.keys(users).length>0 ?(
        <>
    
        <h3 className="text-center mb-3">Users</h3>
        <Row className="justify-content-center">
        {Object.values(users).map(user=> ( 
           
             <Col key={user.id} lg={4} className="p-1">
                 <UserCard user={user}/>
             </Col>
        
        ))}
         </Row>
        </>
        ) : 
        (
            <>
            <h3 className="text-center mt-5 mb-1 text-danger fw-bold">No users found!</h3>
            <h4 className="text-center py-4">Start adding users !</h4>
            <div className="text-center">
            <Button variant="primary" as={NavLink} to='/create'>Add Users</Button>
            </div>
            </>

        )
        }
        
    </Layout>
    </div>
    </>
    
)
}
export default UsersList;
