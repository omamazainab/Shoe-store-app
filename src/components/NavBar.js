import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './../styles/NavBar.css'

const NavBar = () => {

    const [value, setValue] = React.useState(0);

    
        return (
            <Navbar collapseOnSelect expand="md" bg="light" sticky="top"  >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className=" bold" href="/">Home</Nav.Link>
                        <Nav.Link className=" bold" href="/products">Products</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    
}

export default NavBar
