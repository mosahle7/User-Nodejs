import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
const Layout = (
    {children}) => {
    return(
        <>
        <Container fluid>
        {/* <ToastContainer className="Toastify__toast-container--bottom-left"  /> */}
        <NavigationBar/>
        <Container className='mt-5 mb-5'>
        {children}
        </Container>
        </Container>

        <Footer/>
        </>
    
    )
};

export default Layout;