import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../CSS/Home.css";


const Home = () => {
    return (
        <Container fluid className="home d-flex flex-column justify-content-center gap-5">
            <Row className='heading-primary home-row d-flex justify-content-center'>
                <Col className="home-col text-center" xs={12} md={6}>HI DERE, I'M JACKY PENG</Col>
            </Row>
            <Row className='home-row d-flex justify-content-center'>
                <Col className="heading-subtext home-col text-center" xs={12} md={5}>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</Col>
            </Row>
            <Row className='home-row d-flex justify-content-center '>
                <Col className="heading-button home-col text-center p-2" xs={4} md={2}>Contact</Col>
            </Row>
        </Container>
    );
}

export default Home;