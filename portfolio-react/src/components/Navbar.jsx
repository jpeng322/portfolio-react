import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../CSS/Navbar.css"

function NavbarComp() {
    return (
        <Navbar bg="light" expand="md">
            <Container fluid className="d-flex justify-content-between p-2 ps-5 pe-5  ">
                <Navbar.Brand href="#">Jacky Peng</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='flex-grow-0'>
                    <Nav>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action3">Projects</Nav.Link>
                        <Nav.Link href="#action4">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;