import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../CSS/Contact.css";


//component
import FormInput from '../components/contactComp/FormInput';

const Contact = () => {
    return (
        <Container fluid className="contact-section mt-5 mb-5 border border-danger" id="contact-section">
            <Row className='d-flex justify-content-center'>
                <Col className="contact-container mt-5 mb-5 p-4" xs={10} sm={10} md={8} lg={7} xl={6} xxl={5}>
                    <Row>
                        <Col className="contact-header text-center">
                            Get in Touch
                        </Col>
                    </Row>
                    <Row>
                        <Form className="">
                            <Row className="first-row-contact d-flex flex-column flex-sm-row gap-3">
                                <Col className="gap-5-xs">
                                    <FloatingLabel controlId="floatingFirstName" label="First Name">
                                        <Form.Control type="text" placeholder="First Name" />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel controlId="floatingLastName" label="Last Name">
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <FormInput
                                controlId="floatingEmail"
                                label="Email Address"
                                type="email"
                                placeholder="Email Address"
                            />
                            <FormInput
                                controlId="floatingSubject"
                                label="Subject"
                                type="text"
                                placeholder="Subject"
                            />
                            <FormInput
                                controlId="floatingMessage"
                                label="Message"
                                type="text"
                                placeholder="Message"
                            />
                            <Row className="align-self-center">
                                <Col>
                                    <Button variant="primary" type="submit">
                                        Send Message
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;