import Col from 'react-bootstrap/Col';

const IconContainer = (props) => {
    return (
        <Col className="icon-container">
            <div>{props.svgInfo}</div>
            <div>{props.languageName}</div>
        </Col>);
}

export default IconContainer;