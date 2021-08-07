import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Logo from './inxeption-logo-meta.jpg';
import Button from 'react-bootstrap/Button';

const Header = () => (
  <>
  
  <Navbar bg="dark" variant="dark">
    <Container>
          <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="234.098"
          height="70"
          className="d-inline-block align-top"
        />{' '}
        <Navbar.Text>
        Log In <a href="#login"></a>
      </Navbar.Text>
        </Navbar.Brand>
    </Container>
  </Navbar>
</>

);

export default Header;