import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../CSS/Navbar.css"
import { useState } from 'react';
function NavbarComp() {

    const [scrolled, setScrolled] = useState("")

    window.onscroll = function () {
        if (window.scrollY >= window.innerHeight) {
            setScrolled("scrolled")

        } else {
            setScrolled("")
            console.log("asdad")
        }
    }
    return (
        <Navbar expand={`md ${scrolled}`} className={scrolled}>
            <Container fluid className="d-flex justify-content-between p-2 ps-5 pe-5 ">
                <Navbar.Brand href="#">Jacky Peng</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='flex-grow-0'>
                    <Nav>
                        <Nav.Link className="pe-4 ps-4 animate__animated animate__fadeInDown animate__delay-1s" href="#home-section">Home</Nav.Link>
                        <Nav.Link className="pe-4 ps-4 animate__animated animate__fadeInDown animate__delay-1s" href="#skills-section">About</Nav.Link>
                        <Nav.Link className="pe-4 ps-4 animate__animated animate__fadeInDown animate__delay-1s" href="#projects-section">Projects</Nav.Link>
                        <Nav.Link className="pe-4 ps-4 animate__animated animate__fadeInDown animate__delay-1s" href="#contact-section">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;