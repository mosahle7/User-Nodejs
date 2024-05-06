import UsersList from "./components/pages/user/UsersList";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import {createGlobalStyle, styled} from 'styled-components';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CreateUser from "./components/pages/user/CreateUser";
import RetrieveUser from "./components/pages/user/RetrieveUser";
import EditUser from "./components/pages/user/EditUser";
import DeleteUser from "./components/pages/user/DeleteUser";
import VForm from "./components/visme/VForm";
import Contact from "./components/pages/static/Contact";
import MyComponent from "./VismeData";
import About from "./components/pages/static/About";

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
            <Route path="/form" element={<VForm />}  />
            <Route path="/visme" element={<MyComponent />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
        {/* <UsersList /> */}
    </>


  );
}

export default App;