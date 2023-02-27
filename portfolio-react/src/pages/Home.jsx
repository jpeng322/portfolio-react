import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../CSS/Home.css";


const Home = () => {
    return (
        <Container fluid id="home-section" className="home-section d-flex flex-column justify-content-center gap-5">
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
                <Col className="heading-subtext  text-center" xs={12} md={8} lg={7} xl={5}>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</Col>
            </Row>
            <Row className='home-row d-flex justify-content-center '>
                <Col className="heading-button text-center p-2" xs={4} md={2}>Contact</Col>
            </Row>
        </Container >
    );
}

export default Home;