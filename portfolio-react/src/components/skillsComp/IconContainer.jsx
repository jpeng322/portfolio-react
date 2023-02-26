import Col from 'react-bootstrap/Col';

const IconContainer = (props) => {
    return (
        <Col className={`icon-container animate__animated animate__fadeIn animate__delay-1s`}>
            <div>{props.svgInfo}</div>
            <div>{props.languageName}</div>
        </Col>);
}

export default IconContainer;