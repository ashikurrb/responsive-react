import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const {user, logOut} = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Responsive</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
{user.email?            
<Button onClick={logOut}>Logout</Button>:
<Nav.Link as={Link} to="/login">Login</Nav.Link>
}            
<Navbar.Text>
              Signed in as: <a href="login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
