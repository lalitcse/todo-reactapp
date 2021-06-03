import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavbarBrand, Container, Navbar } from 'reactstrap'

const Heading = () => {
    return (
        <Navbar color='dark' dark>
            <Container>
                <NavbarBrand>My Team</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className='btn btn-primary' to='/add'>Add User</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Heading
