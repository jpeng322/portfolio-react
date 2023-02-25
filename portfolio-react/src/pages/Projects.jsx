import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


//hooks
import { useState } from 'react';

//css
import "../CSS/Projects.css"

///images
import CatSheet from "../images/cat-cheetah-sheet.png"
// import Cat2Sheet from "../images/cat-cheetah-sheet.png"
import EtchSketch from "../images/etchsketch.jpg"
import JournalApp from "../images/journal-app.png/"
import Pokedex from "../images/pokedex.png"
import TicTacToe from "../images/tic-tac-toe-pic.png"

const Projects = () => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    // const boxStyle = {
    //    <!-- ... -->
    // };

    return (
        <Container fluid className="projects-section">
            <Row className="d-flex flex-column text-center">
                <Col className="projects-header p-4 ">My recent work</Col>
                <Col className="projects-header-subtext">Here are a few past design projects I've worked on.</Col>
            </Row>
            <Row className="d-flex justify-content-center ">
                <Col className="project-container d-flex border border-success" xs={10} md={12} lg={11} xl={12} xxl={12}>
                    <Row className="project-container-row d-flex justify-content-center ">

                        <Col className="container-transition d-flex justify-content-center m-3 p-0" xs={11} sm={8} md={5} lg={5} xl={3}>
                            <Image className="project-image img-fluid m-3" src={CatSheet}></Image>
                            <Col className="middle">
                                <div className="text-header">A fully responsive website that allows users to find information
                                    on numerous cat breeds. Some features of the site include routing to different
                                    pages, pagination of images, and filtering of cat breeds.</div>
                                <a href="https://www.google.com/" target='_blank' className="text">Visit Website</a>
                                <footer>
                                    <div className="text-languages">
                                        JS 
                                        <span> •  </span>
                                        <span> CSS </span>
                                        <span> • </span>
                                        <span> HTML </span>
                                    </div>
                                </footer>
                                <div>
                                    <a href="https://github.com/jpeng322/Etch-a-Sketch-Project" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="footer-github">
                                            <title>GitHub</title>
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </Col>
                        </Col>

                        <Col className="container-transition d-flex justify-content-center m-3 p-0" xs={11} sm={8} md={5} lg={5} xl={3}>
                            <Image className="project-image img-fluid m-3" src={JournalApp}></Image>
                            <Col className="middle">
                                <div className="text-header">A full-stack CRUD application that allows the user to save daily
                                    notes. Some features include user authentication and data manipulation. Notes can be
                                    created, updated, deleted, and filtered by months or favorites. </div>
                                <a href="https://www.google.com/" target='_blank' className="text">Visit Website</a>
                                <footer>
                                    <div className="text-languages">
                                        JS 
                                        <span> •  </span>
                                        <span> CSS </span>
                                        <span> • </span>
                                        <span> HTML </span>
                                    </div>
                                </footer>
                                <div>
                                    <a href="https://github.com/jpeng322/Etch-a-Sketch-Project" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="footer-github">
                                            <title>GitHub</title>
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </Col>
                            
                        </Col>

                        <Col className="container-transition d-flex justify-content-center m-3 p-0" xs={11} sm={8} md={5} lg={5} xl={3}>
                            <Image className="image project-image img-fluid m-3" src={Pokedex}></Image>
                            <Col className="middle">
                                <div className="text-header">Dynamic Pokedex that searches and displays statistics of a specific
                                    pokemon. Error handling was implemented for wrong inputs.</div>
                                <a href="https://www.google.com/" target='_blank' className="text">Visit Website</a>
                                <footer>
                                    <div className="text-languages">
                                        JS 
                                        <span> •  </span>
                                        <span> CSS </span>
                                        <span> • </span>
                                        <span> HTML </span>
                                    </div>
                                </footer>
                                <div>
                                    <a href="https://github.com/jpeng322/Etch-a-Sketch-Project" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="footer-github">
                                            <title>GitHub</title>
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </Col>

                        </Col>

                        <Col
                            className="container-transition d-flex justify-content-center m-3 p-0" xs={11} sm={8} md={5} lg={5} xl={3}>
                            <Image className="project-image img-fluid" src={TicTacToe}></Image>
                            <Col className="middle">
                                <div className="text-header">A two-player Squid-Games-themed Tic-Tac-Toe game created using
                                    Object Oriented Programming. Features include personalized player names, player
                                    marker selection, and player move
                                    indicators.</div>
                                <a href="https://www.google.com/" target='_blank' className="text">Visit Website</a>
                                <footer>
                                    <div className="text-languages">
                                        JS 
                                        <span> •  </span>
                                        <span> CSS </span>
                                        <span> • </span>
                                        <span> HTML </span>
                                    </div>
                                </footer>
                                <div>
                                    <a href="https://github.com/jpeng322/Etch-a-Sketch-Project" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="footer-github">
                                            <title>GitHub</title>
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </Col>


                        </Col>
                        <Col className="container-transition d-flex justify-content-center m-3 p-0" xs={11} sm={8} md={5} lg={5} xl={3}>
                            <Image className="image project-image img-fluid" src={EtchSketch}></Image>
                            <Col className="middle">
                                <div className="text-header">An online rendition of the Etch A Sketch drawing toy.
                                    Users can
                                    select their pen color or rainbow mode, erase using their pen, or fully clear the
                                    board with a press of a button.</div>
                                <a href="https://www.google.com/" target='_blank' className="text">Visit Website</a>
                                <footer>
                                    <div className="text-languages">
                                        JS 
                                         • 
                                         CSS 
                                        • 
                                         HTML 
                                    </div>
                                </footer>
                                <div>
                                    <a href="https://github.com/jpeng322/Etch-a-Sketch-Project" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="footer-github">
                                            <title>GitHub</title>
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </Col>

                        </Col>
                    </Row>
                </Col>


                {/* <Col></Col> */}
            </Row>
        </Container>
    );
}

export default Projects;