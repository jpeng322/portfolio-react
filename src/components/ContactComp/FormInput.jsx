import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const FormInput = (props) => {

 
    return (
        <Row >
            <Col>
                <FloatingLabel controlId={props.controlId} label={props.label}>
                    <Form.Control type={props.type} placeholder={props.placeholder} name={props.name} />
                </FloatingLabel>
            </Col>
        </Row>
    );
}

export default FormInput;