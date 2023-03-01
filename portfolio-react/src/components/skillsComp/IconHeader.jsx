import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IconHeader = (props) => {

    const { inViewport, enterCount, forwardedRef } = props;

    const animations = inViewport && enterCount === 1 ? "animate__animated  animate__fadeIn animate__delay-1s" : ""

    return (
        <Row  ref={forwardedRef} className={`${animations} m-0`}>
            <Col className="icon-header d-flex flex-column text-center">{props.header}</Col>
        </Row>
    );
}

export default IconHeader;