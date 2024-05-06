import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as userService from '../../../services/user.service'
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Layout from '../../layout/Layout';

const RetrieveUser = () => {
    const {userId} = useParams();  
   
    const [user, setUser] =useState({})

    const fetchUser = async () => {
        try{
        const user = await userService.retrieveUser(userId);
        
        setUser(user);
        } catch (err) {
            setUser(null);
        }
    }

    useEffect(() => {
        fetchUser()
    },[userId]);

    return (
        <>
        <Layout>
            {user ? (
                <Row className="justify-content-center">
                <Col lg={5}>
        <h3 className="text-center mb-3">{user.name}</h3>
        
                 <Card>
                     <Card.Body className="text-dark">
                         <p>{user.email}</p>

                         {user.city && user.country && (
                            <p>{user.city} - {user.country}</p>
                         )
                         }
                     </Card.Body>
                 </Card>
             </Col>
             </Row>
            ) : (
                <div className='text-center text-danger fw-bold'>User cannot be found</div>

            )}
        </Layout>
        </>
    )
};


export default RetrieveUser;