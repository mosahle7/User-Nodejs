import React, { useState, useEffect } from "react";
import axios from "axios";
import * as userService from '../../services/user.service';
import { Button, Card, Col, Container, Row} from "react-bootstrap";
import Layout from "../layout/Layout";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import UListEmoji from "../svg/UListEmoji";

const gradientStyle = {
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Adjust colors as needed
    padding: '20px', // Add padding as needed
    borderRadius: '10px', // Add border radius as needed
    // color: '#fff', // Set text color
    height: '100vh',
    width: '100%',
  };

const UsersList = () => {
    
    const [users, setUsers] = useState({});

    const fetchUsers = async () => {
        // const res = await fetch(`${getAllUsersUrl}`);
        // console.log(res.json());
        try{
        const users = await userService.usersList();
        setUsers(users);
        }
        catch(error){
            toast.error(<UListEmoji/>)
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
        {Object.keys(users).length>0 ?(
        <>
        <h3 className="text-center mb-3">Users</h3>
        {Object.values(users).map(user=> ( 
            <Row key={user.id}className="justify-content-center">
             <Col lg={6}>
                 <Card>
                     <Card.Body>
                         <h4>{user.name}</h4>
                         <p>{user.email}</p>

                         {user.city && user.country && (
                            <p>{user.city} - {user.country}</p>
                         )
                         }
                         <div className='d-flex justify-content-between'>
                         <Button variant='primary'> <Link to={`/edit/${user.id}`} className="text-white text-decoration-none">Edit User</Link></Button>
                         <Button variant='danger' as={NavLink} to={`/delete/${user.id}`}>Delete User</Button>
                         </div>
                     </Card.Body>
                 </Card>
             </Col>
         </Row>
        ))}
        </>
        ) : 
        (
            <>
            <h3 className="text-center mb-3">No users found!</h3>
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
