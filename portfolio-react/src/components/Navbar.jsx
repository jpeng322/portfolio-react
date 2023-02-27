import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../CSS/Navbar.css"

function NavbarComp() {
    return (
        <Navbar bg="light" expand="md">
            <Container fluid className="d-flex justify-content-between p-2 ps-5 pe-5  ">
                <Navbar.Brand href="#">Jacky Peng</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='flex-grow-0'>
                    <Nav>
                        <Nav.Link className="pe-4 ps-4" href="#home-section">Home</Nav.Link>
                        <Nav.Link className="pe-4 ps-4" href="#skills-section">About</Nav.Link>
                        <Nav.Link className="pe-4 ps-4" href="#projects-section">Projects</Nav.Link>
                        <Nav.Link className="pe-4 ps-4" href="#contact-section">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;