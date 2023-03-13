import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import handleViewport from 'react-in-viewport';

//css
import "../CSS/Projects.css"

///images
// import CatSheet from "/outimages/cat-cheetah-sheet.png"
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
        <Container fluid id="projects-section" className="projects-section d-flex flex-column justify-content-center ">
            <ProjectHeaderVP />
            <Row className="d-flex justify-content-center ">
                <Col className="project-container d-flex " xs={11} md={12} lg={11} xl={12} xxl={12}>
                    <Row className="project-container-row d-flex justify-content-center ">

                        <ProjectImageVP
                            imageSrc="../outimages/cat-cheetah-sheet.png"
                            // imageSrc={CatSheet}
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

                    </Row>
                </Col>


                {/* <Col></Col> */}
            </Row>
        </Container>
    );
}

export default Projects;