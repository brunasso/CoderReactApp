import React, {useContext} from 'react'
import './NavBar.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
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

            <Link to={'/category/:category'}>

        <NavDropdown title="Categories" id="collasible-nav-dropdown">
        <Link to={'/category/IPA'}>
            <NavDropdown.Item href="#action/3.1">IPA</NavDropdown.Item>
        </Link>

        <Link to={'/category/STOUT'}>
            <NavDropdown.Item href="#action/3.2">STOUT</NavDropdown.Item>
        </Link>
            
        <Link to={'/category/BLONDE'}>
            <NavDropdown.Item href="#action/3.3">BLONDE</NavDropdown.Item>
        </Link>

        <Link to={'/category/LAGER'}>
            <NavDropdown.Item href="#action/3.4">LAGER</NavDropdown.Item>
        </Link>
        
        </NavDropdown>
        </Link>

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
    
    