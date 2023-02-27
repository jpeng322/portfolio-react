import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../CSS/Contact.css";

import 'animate.css';

//component
import FormInput from '../components/ContactComp/FormInput';

import handleViewport from 'react-in-viewport';

const ContactForm = (props) => {
    const { inViewport, enterCount, forwardedRef } = props;

    const animations = inViewport && enterCount === 1 ? "animate__animated animate__fadeIn animate__delay-1s" : ""
    return (
        <Col ref={forwardedRef} id="contact-section" className={`contact-container mt-5 mb-5 p-4 ${animations}`} xs={10} sm={10} md={8} lg={7} xl={6} xxl={5}>
            <Row>
                <Col className="contact-header text-center">
                    Get in Touch
                </Col>
            </Row>
            <Row>
                {/* <ContactFormVP /> */}
                <Form>
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
    )
}
const ContactFormVP = handleViewport(ContactForm)

const Contact = () => {
    return (
        <Container fluid className="contact-section mt-5 mb-5 border border-danger" id="contact-section">
            <Row className='d-flex justify-content-center'>
                <ContactFormVP />
            </Row>
        </Container>
    );
}

export default Contact;