import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './../styles/NavBar.css'
import {Link} from "react-router-dom";
const NavBar = () => {



    
        return (
            <Navbar collapseOnSelect expand="md" bg="light" sticky="top"  >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className=" bold" to="/">Home</Link>
                        <Link className=" bold" to="/products">Products</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    
}

export default NavBar
