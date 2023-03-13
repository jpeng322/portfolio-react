import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../CSS/Contact.css";

import { useRef } from 'react';


//email 
import emailjs from '@emailjs/browser';

//component
import FormInput from '../components/ContactComp/FormInput';
import Media from '../components/Media';
import SleepingCatSVG from '../components/ContactComp/SleepingCat';

import handleViewport from 'react-in-viewport';

const ContactForm = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("sent")

        emailjs.sendForm('service_32p2489', 'template_pyz1b4n', form.current, 'cRsFDn_6WFjcFCjmZ')
            .then((result) => {
                console.log(result)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const { inViewport, enterCount, forwardedRef } = props;

    const animations = inViewport && enterCount === 1 ? "animate__animated animate__fadeIn animate__delay-1s" : ""
    return (
        <Col ref={forwardedRef} className={`contact-container mt-5 mb-5  ${animations}`} xs={10} sm={10} md={8} lg={7} xl={7} xxl={6}>
            <Row className="form-header d-flex flex-xs-column flex-xl-row text-center text-xl-start">
                <Col className="contact-header-text text-xs-center" xs={12} md={12} xl={9}>
                    Get in Touch
                </Col>
                <Col className="contact-header-icon d-flex justify-content-center align-items-center justify-content-xl-end ">
                    {/* <Col className=""> */}
                    <Media />
                    {/* </Col> */}
                </Col>
            </Row>
            <Row>
                {/* <ContactFormVP /> */}
                <Form ref={form} onSubmit={sendEmail}>
                    <Row className="first-row-contact d-flex flex-column flex-sm-row gap-3">
                        <Col className="gap-5-xs">
                            <FloatingLabel controlId="floatingFirstName" label="First Name">
                                <Form.Control type="text" placeholder="First Name" name="first_name" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingLastName" label="Last Name">
                                <Form.Control type="text" placeholder="Last Name" name="last_name" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <FormInput
                        controlId="floatingEmail"
                        label="Email"
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                    <FormInput
                        controlId="floatingSubject"
                        label="Subject"
                        type="text"
                        placeholder="Subject"
                        name="subject"
                    />
                    {/* <FormInput
                        controlId="floatingMessage"
                        label="Message"
                        type="text"
                        placeholder="Message"
                        name="message"
                    /> */}
                    <Form.Group className="message-container" controlId="textarea">
                        <Form.Label className="message-header">Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
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
        <Container fluid id="contact-section" className="contact-section d-flex flex-column justify-content-center">
            <Row className='d-flex justify-content-center'>
                <ContactFormVP />
            </Row>
            <SleepingCatSVG />
        </Container>
    );
}

export default Contact;