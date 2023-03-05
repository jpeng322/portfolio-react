import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../CSS/Navbar.css"
import { useState } from 'react';
import Scrollspy from "react-scrollspy"


import Hamburger from "hamburger-react"



function NavbarComp() {

    const [currentScroll, setCurrentScroll] = useState(0)
    const [lastScroll, setLastScroll] = useState(0)
    const [scrollUp, setScrollUp] = useState("")

    const [scrolled, setScrolled] = useState("")


    window.onscroll = function () {
        setCurrentScroll(window.pageYOffset)
        if (window.scrollY >= window.innerHeight) {
            setScrolled("scrolled-passed-home")

        } else {
            setScrolled("")
        }

        if (currentScroll <= 0) {
            setScrollUp("scrolled")
        }

        if (currentScroll > lastScroll) {
            setScrollUp("scroll-down")
        } else if (
            currentScroll < lastScroll
        ) {
            setScrollUp("scroll-up")
        }

        setLastScroll(currentScroll)

    }

    const [isOpen, setOpen] = useState(false)

    console.log(isOpen)

    return (
        <Navbar expand={`md`} className={`${scrolled} ${scrollUp}`}>
            <Container fluid className="d-flex justify-content-between ps-5 pe-5 ">
                <Navbar.Brand href="#">Jacky Peng</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">  < Hamburger toggled={isOpen} toggle={setOpen} duration={.6} /></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll" className='flex-grow-0'>

                    <Nav id="navbar" className="">
                        <Scrollspy className='scrollspy d-flex flex-column flex-md-row' items={['home-section', 'skills-section', 'projects-section', "contact-section"]} currentClassName="active">
                            <li className=" animate__animated animate__fadeInDown animate__delay-1s">
                                <a href="#home-section">Home</a></li>
                            <li className=" animate__animated animate__fadeInDown animate__delay-1s">
                                <a href="#skills-section">About</a></li>
                            <li className=" animate__animated animate__fadeInDown animate__delay-1s">
                                <a href="#projects-section">Projects</a></li>
                            <li className=" animate__animated animate__fadeInDown animate__delay-1s">
                                <a href="#contact-section">Contact</a></li>
                        </Scrollspy >
                    </Nav>



                </Navbar.Collapse>

            </Container>



        </Navbar >
    );
}

export default NavbarComp;