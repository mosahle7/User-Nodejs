import React from 'react';
import { Card,Button, } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';

const UserCard = ({user}) => {
  return (
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
  );
};

export default UserCard;