import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget/CartWidget"

export const NavBar = () => {
    return (<header>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">AutosLucar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    </header>)
}
