import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from 'react';


import Scrollspy from "react-scrollspy"
import Hamburger from "hamburger-react"

//CSS
import "../CSS/Navbar.css"

//SVG
import logo from "../images/j-square.svg"

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
            setScrolled()
        }

        if (window.scrollY === 0) {
            setScrollUp("")
        } else {
            if (currentScroll <= 0) {
                setScrollUp("scrolled")
            } else {
                if (currentScroll > lastScroll) {
                    setScrollUp("scroll-down")
                } else if (
                    currentScroll < lastScroll
                ) {
                    setScrollUp("scroll-up")
                }

                setLastScroll(currentScroll)
            }
        }
    }

    const [isOpen, setOpen] = useState(false)


    return (
        <Navbar expand={`md`} className={`${scrolled} ${scrollUp}`}>
            <Container fluid className="d-flex justify-content-between pe-5 ps-5  ">
                <Navbar.Brand href="#" className="animate__animated animate__fadeInDown animate__delay-1s">
                    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="180" height="180" rx="30" fill="#180979" />
                        <path d="M74.4273 141.12C66.214 141.12 59.5873 138.74 54.5473 133.98C49.5073 129.127 46.9873 122.733 46.9873 114.8V105.14C46.9873 104.673 47.1273 104.3 47.4073 104.02C47.7807 103.647 48.2007 103.46 48.6673 103.46H65.0473C65.514 103.46 65.8873 103.647 66.1673 104.02C66.5407 104.3 66.7273 104.673 66.7273 105.14V115.08C66.7273 117.787 67.4273 119.98 68.8273 121.66C70.2273 123.34 72.094 124.18 74.4273 124.18C76.854 124.18 78.7673 123.34 80.1673 121.66C81.6607 119.98 82.4073 117.787 82.4073 115.08V43.68C82.4073 43.2133 82.5473 42.84 82.8273 42.56C83.2007 42.1867 83.6207 42 84.0873 42H100.467C100.934 42 101.307 42.1867 101.587 42.56C101.961 42.84 102.147 43.2133 102.147 43.68V114.8C102.147 122.733 99.5807 129.127 94.4473 133.98C89.4073 138.74 82.734 141.12 74.4273 141.12ZM123.188 140.56C120.014 140.56 117.354 139.533 115.208 137.48C113.154 135.333 112.128 132.673 112.128 129.5C112.128 126.233 113.154 123.573 115.208 121.52C117.261 119.467 119.921 118.44 123.188 118.44C126.454 118.44 129.114 119.467 131.168 121.52C133.221 123.573 134.248 126.233 134.248 129.5C134.248 132.673 133.174 135.333 131.028 137.48C128.974 139.533 126.361 140.56 123.188 140.56Z" fill="#CDDEFF" />
                    </svg>

                    {/* {logo} */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    < Hamburger toggled={isOpen} toggle={setOpen} duration={.6} />
                </Navbar.Toggle>
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