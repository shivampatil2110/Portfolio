import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css'
import { Outlet, Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'



const Header = () => {
  
  const transparentNavbarStyle = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  };
  
  return (
    <Navbar expand="lg" fluid style={transparentNavbarStyle} sticky='top'>
      <Container fluid>
        <Navbar.Brand href="/" className="mx-auto">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto"
            style={{ maxHeight: '100px',alignItems:'center' }}
            navbarScroll
          >
            <LinkContainer to="/">
                <Nav.Link className='home' style={{color:'white'}}>Home</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/projects">
                <Nav.Link>Project</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
            </LinkContainer>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
