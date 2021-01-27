import React from 'react'
import './NavBar.css';
import {Navbar, Nav} from 'react-bootstrap';
/* import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';  */
import 'bootstrap/dist/css/bootstrap.min.css';
import iconmarket from '../../assets/images/eMarket.png' //Importo icono de mi e-mercado para la NAV
import {CartWidget} from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'

export const NavBar = () => {
    
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to={'/'}>
            <img id="iconMarket" alt="Icon Market" src={iconmarket}/>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Link to={'/'}>
                <Nav.Link href="#Home">Home</Nav.Link>
            </Link>

            <Link to={'/category/:id'}>
            <Nav.Link href="#Categories">Categories</Nav.Link>
            </Link>

           {/*  <NavDropdown title="Cart" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}

        </Nav>
        <Nav className='Cart'>
            <Nav.Link href="#Cart"><CartWidget/></Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        <br/>
        </>
        )
    }
    
    