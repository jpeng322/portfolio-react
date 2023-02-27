import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import handleViewport from 'react-in-viewport';

//css
import "../CSS/Projects.css"

///images
import CatSheet from "../images/cat-cheetah-sheet.png"
import JournalApp from "../images/journal-app.png/"
import Pokedex from "../images/pokedex.png"
import TicTacToe from "../images/tic-tac-toe-pic.png"
import EtchSketch from "../images/etchsketch.jpg"

//components
import ProjectImage from '../components/ProjectComp/ProjectImage';

const ProjectHeaderContainer = (props) => {

    const { inViewport, enterCount, forwardedRef } = props;

    const animations = inViewport && enterCount === 1 ? "animate__animated animate__fadeIn animate__delay-1s" : ""

    return (
        <Row ref={forwardedRef} className={`project-header-container d-flex flex-column text-center ${animations}`}>
            <Col className="projects-header p-4 ">My recent work</Col>
            {/* <Col className="projects-header-subtext">Here are a few past design projects I've worked on.</Col> */}
        </Row>
    )
}
const ProjectImageVP = handleViewport(ProjectImage)
const ProjectHeaderVP = handleViewport(ProjectHeaderContainer)
const Projects = () => {

    return (
        <Container fluid id="projects-section" className="projects-section d-flex flex-column justify-content-center pt-5 pb-5">
            <ProjectHeaderVP />
            <Row className="d-flex justify-content-center ">
                <Col className="project-container d-flex " xs={11} md={12} lg={11} xl={12} xxl={12}>
                    <Row className="project-container-row d-flex justify-content-center ">

                        <ProjectImageVP
                            imageSrc={CatSheet}
                            description="A responsive website that allows users to find information
                            on numerous cat breeds."
                            textlanguages=
                            {<>
                                React
                                <span> • </span>
                                <span> React Bootstrap </span>
                            </>}
                            website="https://cat-cheetah-sheet.onrender.com/"
                            github="https://github.com/jpeng322/cat-app-react-router/tree/main/cat-app"
                        />

                        <ProjectImageVP
                            imageSrc={JournalApp}
                            description="A full-stack journal application that allows the user to create an account and save daily
                            notes. "
                            textlanguages=
                            {<>
                                <div>
                                    React
                                    <span> • </span>
                                    <span> Express </span>
                                    <span> • </span>
                                    <span> MongoDB </span>
                                </div>
                                <div>
                                    <span> Node </span>
                                    <span> • </span>
                                    <span> React Bootstrap </span>
                                </div>
                            </>}
                            website="https://my-journal-app-7sls.onrender.com"
                            github="https://github.com/jpeng322/journal_react"
                        />

                        <ProjectImageVP
                            imageSrc={Pokedex}
                            description="Dynamic Pokedex that searches and displays statistics of a specific
                            pokemon."
                            textlanguages=
                            {<>
                                JS
                                <span> •  </span>
                                <span> CSS </span>
                                <span> • </span>
                                <span> HTML </span>
                            </>}
                            website="https://pokedex-n7lj.onrender.com/"
                            github="https://github.com/jpeng322/TKH-pokedex"
                        />


                        <ProjectImageVP
                            imageSrc={TicTacToe}
                            description="A two-player Squid Games themed Tic-Tac-Toe game with custom player names, 
                            marker selection, and move
                            indicators."
                            textlanguages=
                            {<>
                                JS
                                <span> •  </span>
                                <span> CSS </span>
                                <span> • </span>
                                <span> HTML </span>
                            </>}
                            website="https://jpeng322.github.io/TKH-Tic-Tac-Toe/"
                            github="https://github.com/jpeng322/TKH-Tic-Tac-Toe"
                        />


                        <ProjectImageVP
                            imageSrc={EtchSketch}
                            description="An online rendition of the Etch A Sketch drawing toy with rainbow, erasure, and color selection modes."
                            textlanguages=
                            {<>
                                JS
                                <span> •  </span>
                                <span> CSS </span>
                                <span> • </span>
                                <span> HTML </span>
                            </>}
                            website="https://jpeng322.github.io/Etch-a-Sketch-Project/"
                            github="https://github.com/jpeng322/Etch-a-Sketch-Project"
                        />

                        {/* <Col className="container-transition d-flex justify-content-center m-3 p-0" xs={11} sm={8} md={5} lg={5} xl={3}>
                            <Image className="image project-image img-fluid" src={props.imageSrc}></Image>
                            <Col className="middle">
                                <div className="text-header">{props.description}</div>
                                <a href={props.website} target='_blank' className="text">Visit Website</a>
                                <footer>
                                    <div className="text-languages">
                                     {props.textlanguages}
                                    </div>
                                </footer>
                                <div>
                                    <a href={props.github} target="_blank">
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
                        </Col> */}

                        {/* <Col className="container-transition d-flex justify-content-center m-3 p-0" xs={11} sm={8} md={5} lg={5} xl={3}>
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

                        </Col> */}
                    </Row>
                </Col>


                {/* <Col></Col> */}
            </Row>
        </Container>
    );
}

export default Projects;