
import { Col, Container, Row } from 'react-bootstrap';
import "../CSS/Home.css";
import BodySVG from '../components/HomeComp/BodySVG';



const Home = () => {
    return (
        <Container fluid id="home-section" className="home-section d-flex flex-column justify-content-center gap-4">
            <Row className='heading-primary home-row d-flex justify-content-center'>
                <Col className="home-col-container p-0 m-0" >
                    <Col className="home-col ">
                        <div className="top-home-heading-container">
                            <div className="top-home-heading">HEY THERE,</div>
                        </div>
                        <div className="bottom-home-heading-container">
                            <div className='bottom-home-heading'>I'M JACKY PENG</div>
                        </div></Col>
                </Col>
            </Row>
            <Row className='home-row d-flex justify-content-center'>
                <Col className="heading-subtext  text-center" xs={11} md={8} lg={7} xl={5}>A web developer focused on creating dynamic, accessible, and scalable applications.  </Col>
            </Row>
            <Row className='home-row d-flex justify-content-center '>
                <Col className="heading-button mt-3 text-center p-2"  xs={4} md={2}> 
                <a className="heading-button-link " href="#contact-section">Contact</a> </Col>
            </Row>
            <Row>
                <Col>
                    <BodySVG />
                </Col>
            </Row>

        </Container >
    );
}

export default Home;