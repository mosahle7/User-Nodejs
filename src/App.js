import UsersList from "./components/user/UsersList";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import {createGlobalStyle, styled} from 'styled-components';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CreateUser from "./components/user/CreateUser";
import RetrieveUser from "./components/user/RetrieveUser";
import EditUser from "./components/user/EditUser";
import DeleteUser from "./components/user/DeleteUser";
import Contact from "./Contact";
const BGColor = createGlobalStyle`
body{
  background: ${(props) => (props.light ? "#f2f2f2" : "black")};
}
`


const App = () => {
  return (
    <>
    <BGColor light/>
     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/:userId" element={<RetrieveUser />} />
            <Route path="/edit/:userId" element={<EditUser/>} />
            <Route path="/delete/:userId" element={<DeleteUser />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        {/* <UsersList /> */}
    </>


  );
}

export default App;