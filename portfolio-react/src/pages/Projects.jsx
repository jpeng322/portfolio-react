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
    return (
        <Container fluid className="projects-section">
            <Row className="d-flex flex-column text-center">
                <Col className="projects-header p-4 ">My recent work</Col>
                <Col className="projects-header-subtext">Here are a few past design projects I've worked on.</Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col className="project-container d-flex " xs={12} md={11} lg={12} xl={11} xxl={10}>
                    <Row className="project-container-row d-flex justify-content-center p-4 ">
                        <Col className="d-flex justify-content-center" xs={12} s={12} md={6} lg={4}>
                            <Image className="project-image img-fluid m-3" src={CatSheet}></Image>
                        </Col>
                        <Col className="d-flex justify-content-center" xs={12} md={6} lg={4}>
                            <Image className="project-image img-fluid m-3" src={JournalApp}></Image>
                        </Col>
                        <Col className="d-flex justify-content-center" xs={12} md={6} lg={4}>
                            <Image className="project-image img-fluid m-3" src={Pokedex}></Image>
                        </Col>
                        <Col className="d-flex justify-content-center" xs={12} md={6} lg={4}>
                            <Image className="project-image img-fluid m-3" src={TicTacToe}></Image>
                        </Col>
                        <Col className="d-flex justify-content-center" xs={12} md={6} lg={4}>
                            <Image className="project-image img-fluid m-3" src={EtchSketch}></Image>
                        </Col>
                    </Row>
                </Col>


                {/* <Col></Col> */}
            </Row>
        </Container>
    );
}

export default Projects;